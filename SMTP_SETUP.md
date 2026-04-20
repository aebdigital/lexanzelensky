# SMTP2GO Contact Form Setup

The contact form posts to the Netlify Function at `/.netlify/functions/contact`.

## Required Environment Variables

Set these in the Netlify dashboard under Site configuration -> Environment variables:

- `CONTACT_FORM_RECIPIENT`: Recipient email address. You can use a comma-separated list.
- `SMTP2GO_API_KEY`: SMTP2GO API key.
- `SMTP2GO_SENDER`: Verified SMTP2GO sender, for example `LEXAN Zelensky <no-reply@lexanzelensky.sk>`.

## Flow

1. The contact page serializes the selected branch, customer data, message, and optional files.
2. The browser sends JSON to `/.netlify/functions/contact`.
3. The Netlify Function validates name, email, and message.
4. The function sends the email through SMTP2GO.
5. The contact page displays a success or error message.

## Local Testing

Use Netlify Dev if you want the same function URL locally:

```bash
netlify dev
```

The regular Next dev server will render the form, but the Netlify function endpoint is only available through Netlify Dev or on Netlify hosting.
