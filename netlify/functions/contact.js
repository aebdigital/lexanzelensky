const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

function json(statusCode, payload) {
  return {
    statusCode,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
}

function text(value) {
  return `${value ?? ""}`.trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return json(405, {
      success: false,
      message: "Metóda nie je povolená."
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (error) {
    return json(400, {
      success: false,
      message: "Neplatný formát požiadavky."
    });
  }

  const name = text(payload.name);
  const email = text(payload.email);
  const message = text(payload.message);
  const phone = text(payload.phone);
  const subject = text(payload.subject) || "Kontaktný formulár LEXAN";
  const branchKey = text(payload.branch);
  const branchLabel = text(payload.branchLabel);
  const branchEmail = text(payload.branchEmail);
  const files = Array.isArray(payload.files) ? payload.files : [];

  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;

  let recipientString = process.env.CONTACT_FORM_RECIPIENT;
  if (branchKey === "trnava" && process.env.CONTACT_TRNAVA) {
    recipientString = process.env.CONTACT_TRNAVA;
  } else if (branchKey === "senec" && process.env.CONTACT_SENEC) {
    recipientString = process.env.CONTACT_SENEC;
  } else if (branchKey === "piestany" && process.env.CONTACT_PIESTANY) {
    recipientString = process.env.CONTACT_PIESTANY;
  }

  const recipients = text(recipientString)
    .split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  if (!apiKey || !sender || recipients.length === 0) {
    return json(500, {
      success: false,
      message:
        "Kontaktný formulár nie je nakonfigurovaný. Skontrolujte email adresy pre pobočky, SMTP2GO_API_KEY a SMTP2GO_SENDER."
    });
  }

  if (!name || !email || !message) {
    return json(400, {
      success: false,
      message: "Vyplňte meno, email a opis požiadaviek."
    });
  }

  if (!isValidEmail(email)) {
    return json(400, {
      success: false,
      message: "Zadajte platnú emailovú adresu."
    });
  }

  const attachments = files
    .filter((file) => file && file.filename && file.content)
    .map((file) => ({
      filename: text(file.filename),
      mimetype: text(file.mimetype) || "application/octet-stream",
      fileblob: text(file.content)
    }));

  const textBody = [
    `Meno: ${name}`,
    `Email: ${email}`,
    phone ? `Telefón: ${phone}` : "",
    branchLabel ? `Pobočka: ${branchLabel}` : "",
    branchEmail ? `Email pobočky: ${branchEmail}` : "",
    "",
    "Správa:",
    message
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
    <h2>Nová požiadavka z webu LEXAN</h2>
    <p><strong>Meno:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    ${phone ? `<p><strong>Telefón:</strong> ${phone}</p>` : ""}
    ${branchLabel ? `<p><strong>Pobočka:</strong> ${branchLabel}</p>` : ""}
    ${branchEmail ? `<p><strong>Email pobočky:</strong> ${branchEmail}</p>` : ""}
    <hr>
    <p><strong>Správa:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `;

  try {
    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_key: apiKey,
        sender,
        to: recipients,
        subject: `[LEXAN] ${subject}`,
        text_body: textBody,
        html_body: htmlBody,
        reply_to: email,
        attachments
      })
    });

    const result = await response.json();
    const failed = result?.data?.failed ?? 0;
    const succeeded = result?.data?.succeeded ?? 0;

    if (!response.ok || failed > 0 || succeeded === 0) {
      return json(502, {
        success: false,
        message: "Email sa nepodarilo odoslať cez SMTP2GO.",
        details: result
      });
    }

    return json(200, {
      success: true,
      message: "Ďakujeme, vaša požiadavka bola úspešne odoslaná."
    });
  } catch (error) {
    return json(500, {
      success: false,
      message: error instanceof Error ? error.message : "Nastala chyba pri odosielaní formulára."
    });
  }
};
