"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Branch, branches } from "../lib/site-data";

type SubmissionState = {
  kind: "idle" | "success" | "error";
  message: string;
};

type EncodedFile = {
  filename: string;
  mimetype: string;
  content: string;
};

const netlifyContactEndpoint = "/.netlify/functions/contact";

function fileToBase64(file: File) {
  return new Promise<EncodedFile>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(`Nepodarilo sa načítať súbor ${file.name}.`));
    reader.onload = () => {
      const value = `${reader.result ?? ""}`;
      const content = value.includes(",") ? value.split(",")[1] : value;
      resolve({
        filename: file.name,
        mimetype: file.type || "application/octet-stream",
        content
      });
    };
    reader.readAsDataURL(file);
  });
}

export function ContactPageClient() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);
  const [files, setFiles] = useState<File[]>([]);
  const [submission, setSubmission] = useState<SubmissionState>({ kind: "idle", message: "" });
  const [sending, setSending] = useState(false);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(event.target.files ?? []));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setSubmission({ kind: "idle", message: "" });

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    try {
      const oversizedFile = files.find((file) => file.size > 10 * 1024 * 1024);
      if (oversizedFile) {
        throw new Error(`Súbor "${oversizedFile.name}" je príliš veľký. Maximálna veľkosť je 10MB.`);
      }

      const encodedFiles = await Promise.all(files.map(fileToBase64));
      const requestPayload = {
        branch: selectedBranch.key,
        branchLabel: `LEXAN ${selectedBranch.city}`,
        branchEmail: selectedBranch.email,
        name: `${formData.get("customer-name") ?? ""}`.trim(),
        email: `${formData.get("customer-email") ?? ""}`.trim(),
        phone: `${formData.get("customer-phone") ?? ""}`.trim(),
        subject: `${formData.get("subject") ?? ""}`.trim(),
        message: `${formData.get("requirements") ?? ""}`.trim(),
        files: encodedFiles
      };

      let response = await fetch(netlifyContactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestPayload)
      });

      const contentType = response.headers.get("content-type") ?? "";
      if (response.status === 404 || !contentType.includes("application/json")) {
        response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestPayload)
        });
      }
      const responsePayload = (await response.json()) as { success: boolean; message: string };

      setSubmission({
        kind: responsePayload.success ? "success" : "error",
        message: responsePayload.message
      });

      if (responsePayload.success) {
        formElement.reset();
        setFiles([]);
      }
    } catch (error) {
      setSubmission({
        kind: "error",
        message: error instanceof Error ? error.message : "Nepodarilo sa odoslať formulár."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="locations-section">
        <div className="site-container">
          <div className="locations-grid">
            {branches.map((branch) => {
              const active = selectedBranch.key === branch.key;
              return (
                <button
                  key={branch.key}
                  type="button"
                  onClick={() => setSelectedBranch(branch)}
                  className={active ? "location-card is-selected" : "location-card"}
                >
                  <span className="active-indicator">
                    <span />
                  </span>
                  <span className="location-card-content">
                    <span className="location-icon" aria-hidden>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                    <span>
                      <strong className="mb-3 block text-2xl font-semibold text-[#333]">
                        {branch.city}
                      </strong>
                      <span className="mb-2 block text-[#666]">{branch.address}</span>
                      <span className="mb-2 block font-semibold text-[#5a5a58]">{branch.phone}</span>
                      <span className="mb-2 block text-[#666]">{branch.email}</span>
                      <span className="block text-sm font-medium text-[#c00000]">PON-PIA: 8:00 - 16:00</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-copy-section">
        <div className="site-container">
          <div className="contact-form-map-grid">
            <div className="contact-form-wrapper contact-form-side">
              <h2>Zaujala vás naša ponuka?</h2>
              <p className="mb-8 text-[1.1rem] leading-7 text-[#666]">
                Kontaktujte nás ešte dnes pre cenovú ponuku na mieru alebo si vyžiadajte vzorku.
              </p>
              <form className="contact-form" id="enhanced-contact-form" onSubmit={handleSubmit}>
                <label>
                  Vyberte pobočku, ktorú chcete kontaktovať *
                  <select
                    id="branch"
                    name="branch"
                    value={selectedBranch.key}
                    required
                    onChange={(event) =>
                      setSelectedBranch(
                        branches.find((branch) => branch.key === event.target.value) ?? branches[0]
                      )
                    }
                  >
                    <option value="">-- Vyberte pobočku --</option>
                    {branches.map((branch) => (
                      <option key={branch.key} value={branch.key}>
                        LEXAN {branch.city}
                      </option>
                    ))}
                  </select>
                  <span id="branch-email-display" className="branch-email-display">
                    Správa bude odoslaná na: {selectedBranch.email}
                  </span>
                </label>

                <label>
                  Stručný opis vašich požiadaviek *
                  <textarea
                    required
                    id="requirements"
                    name="requirements"
                  />
                  <span className="text-sm font-normal text-[#666]">
                    Napríklad: "Potrebujem dutinkové polykarbonáty pre skleník 6x4m, hrúbka 10mm,
                    transparentné, včítane montážneho príslušenstva"
                  </span>
                </label>

                <h3 className="contact-form-subtitle">Vaše kontaktné údaje *</h3>

                <div className="form-grid">
                  <label>
                    Meno a priezvisko *
                    <input required id="customer-name" name="customer-name" />
                  </label>
                  <label>
                    Email *
                    <input required id="customer-email" type="email" name="customer-email" />
                  </label>
                </div>

                <label>
                  Telefónne číslo
                  <input id="customer-phone" name="customer-phone" placeholder="+421 XXX XXX XXX" />
                </label>

                <label>
                  Nahrávanie súborov a fotiek
                  <div className="file-upload-box">
                    <input
                      type="file"
                      id="file-upload"
                      name="files[]"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf,.dwg,.doc,.docx"
                      onChange={handleFileChange}
                    />
                    <strong>Kliknite pre nahranie súborov</strong>
                    <p className="mt-3 text-sm text-[#666]">
                      Nákresy, fotografie, technické špecifikácie
                      <br />
                      Maximálne 10MB na súbor | JPG, PNG, PDF, DWG
                    </p>
                    {files.length > 0 ? (
                      <div className="file-chip-row">
                        {files.map((file) => (
                          <span key={`${file.name}-${file.size}`} className="file-chip">
                            {file.name}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </label>

                {submission.kind !== "idle" ? (
                  <div
                    className={
                      submission.kind === "success"
                        ? "status-box is-success"
                        : "status-box is-error"
                    }
                  >
                    {submission.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={sending}
                  className="contact-submit-btn disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Odosiela sa..." : "Odoslať požiadavku"}
                </button>
              </form>
            </div>

            <div className="map-side">
              <h2>Mapa pobočiek</h2>
              <div className="contact-map">
              <iframe
                title={`Mapa pobočky ${selectedBranch.city}`}
                src={selectedBranch.mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
