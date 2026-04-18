"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Branch, branches } from "../lib/site-data";

type SubmissionState = {
  kind: "idle" | "success" | "error";
  message: string;
};

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
    formData.set("branch", selectedBranch.key);
    formData.delete("files[]");
    files.forEach((file) => formData.append("files[]", file));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      const payload = (await response.json()) as { success: boolean; message: string };

      setSubmission({
        kind: payload.success ? "success" : "error",
        message: payload.message
      });

      if (payload.success) {
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
                  <h3 className="mb-3 text-2xl font-semibold text-[#333]">{branch.city}</h3>
                  <p className="mb-2 text-[#666]">{branch.address}</p>
                  <p className="mb-2 text-[#666]">{branch.phone}</p>
                  <p className="text-[#666]">{branch.email}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-copy-section">
        <div className="site-container">
          <div className="contact-form-map-grid">
            <div className="contact-map">
              <iframe
                title={`Mapa pobočky ${selectedBranch.city}`}
                src={selectedBranch.mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="contact-form-wrapper">
              <h2>Napíšte nám</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  Vyberte pobočku, ktorú chcete kontaktovať *
                  <select
                    name="branch"
                    value={selectedBranch.key}
                    onChange={(event) =>
                      setSelectedBranch(
                        branches.find((branch) => branch.key === event.target.value) ?? branches[0]
                      )
                    }
                  >
                    {branches.map((branch) => (
                      <option key={branch.key} value={branch.key}>
                        {branch.city}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="form-grid">
                  <label>
                    Meno a priezvisko *
                    <input required name="customer-name" />
                  </label>
                  <label>
                    Email *
                    <input required type="email" name="customer-email" />
                  </label>
                  <label>
                    Telefón
                    <input name="customer-phone" />
                  </label>
                  <label>
                    Predmet
                    <input name="subject" />
                  </label>
                </div>

                <label>
                  Opis požiadaviek *
                  <textarea
                    required
                    name="requirements"
                    placeholder="Typ materiálu, rozmery, farba, účel použitia, termín realizácie..."
                  />
                </label>

                <label>
                  Prílohy
                  <div className="file-upload-box">
                    <input
                      type="file"
                      name="files[]"
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf,.dwg,.doc,.docx"
                      onChange={handleFileChange}
                    />
                    {files.length > 0 ? (
                      <div className="file-chip-row">
                        {files.map((file) => (
                          <span key={`${file.name}-${file.size}`} className="file-chip">
                            {file.name}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-3 text-sm text-[#666]">
                        Môžete priložiť nákresy, fotky alebo technické podklady.
                      </p>
                    )}
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

                <div className="cta-row">
                  <button
                    type="submit"
                    disabled={sending}
                    className="footer-button disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? "Odosiela sa..." : "Odoslať formulár"}
                  </button>
                  <a href={`mailto:${selectedBranch.email}`} className="legacy-button-dark">
                    Napísať priamo na {selectedBranch.city}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
