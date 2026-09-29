import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://formspree.io/f/xeaovkzw",
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("Inquiry sent successfully.");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Unable to send inquiry. Please try again.");
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">

        {/* CONTACT INTRO */}
        <div className="contact-intro reveal">
          <div className="eyebrow">05 — Contact</div>

          <h2>
            Let&apos;s make
            <br />
            <em>something.</em>
          </h2>

          <p>
            For commissions, directing, editorial stories and creative
            collaborations.
          </p>
        </div>

        {/* CONTACT FORM */}
        <form
          className="contact-form reveal"
          onSubmit={handleSubmit}
        >
          <label>
            <span className="eyebrow">Name</span>

            <input
              name="name"
              type="text"
              required
              maxLength="120"
              placeholder="Your name"
            />
          </label>

          <label>
            <span className="eyebrow">Email</span>

            <input
              name="email"
              type="email"
              required
              maxLength="180"
              placeholder="you@email.com"
            />
          </label>

          <label>
            <span className="eyebrow">Message</span>

            <textarea
              name="message"
              required
              maxLength="3000"
              rows="5"
              placeholder="Tell me about the project"
            />
          </label>

          {/* Formspree subject */}
         <input
  type="hidden"
  name="_subject"
  value="New Client Inquiry — Gillesia Seduco"
/>

          <div className="form-footer">
            <span className="form-status">
              {status}
            </span>

            <button type="submit">
              Send inquiry ↗
            </button>
          </div>
        </form>

      </div>
    </section>
  );
}