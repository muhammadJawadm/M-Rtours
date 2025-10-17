"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../../lib/firebase"

interface FormData {
  fullName: string
  contactNumber: string
  email: string
  travelMonth: string
  duration: string
  numberOfGuests: string
  departureCity: string
  accommodationPreference: string
  currentQuote: string
  packageDetails: string
}

export default function BeatMyQuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contactNumber: "+44",
    email: "",
    travelMonth: "",
    duration: "",
    numberOfGuests: "",
    departureCity: "",
    accommodationPreference: "",
    currentQuote: "",
    packageDetails: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const ukCities = [
    "London",
    "Birmingham",
    "Manchester",
    "Glasgow",
    "Liverpool",
    "Edinburgh",
    "Leeds",
    "Bristol",
    "Sheffield",
    "Newcastle",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Create a data object with form data and timestamp
      const formDataWithTimestamp = {
        ...formData,
        submittedAt: serverTimestamp(),
        status: "new", // Add status field for tracking
      }

      // Add document to Firestore
      const docRef = await addDoc(collection(db, "beat_price"), formDataWithTimestamp)
      console.log("Quote request submitted with ID: ", docRef.id)

      // Send the email via the API
      try {
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formType: 'beatMyPrice',
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.contactNumber,
            travelMonth: formData.travelMonth,
            duration: formData.duration,
            numberOfGuests: formData.numberOfGuests,
            departureCity: formData.departureCity || 'Not specified',
            accommodationPreference: formData.accommodationPreference,
            currentQuote: formData.currentQuote,
            packageDetails: formData.packageDetails || 'No additional details provided',
          }),
        });

        const emailResult = await emailResponse.json();
        if (!emailResult.success) {
          console.warn("Email sent to server but there was an issue delivering it:", emailResult.message);
        }
      } catch (emailError) {
        // Log email error but don't fail the overall submission since Firestore succeeded
        console.error("Error sending email notification:", emailError);
      }

      // Reset form on success
      setSubmitStatus("success")
      setFormData({
        fullName: "",
        contactNumber: "+44",
        email: "",
        travelMonth: "",
        duration: "",
        numberOfGuests: "",
        departureCity: "",
        accommodationPreference: "",
        currentQuote: "",
        packageDetails: "",
      })

      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Error submitting form to Firestore:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style jsx>{`
        /* Introduce local design tokens with fallbacks to keep color count tight and preserve brand */
        :root {
          --brand: #28AAE2; /* primary brand color - unchanged */
          --bg: var(--color-background, #ffffff);
          --fg: var(--color-foreground, #1f2937);
          --muted-fg: #5b6472;
          --card: #ffffff;
          --border: #e8ecef;
          --ring: rgba(40, 170, 226, 0.12);
          --shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          --success-bg: #d4edda;
          --success-border: #28a745;
          --success-fg: #155724;
          --error-bg: #f8d7da;
          --error-border: #dc3545;
          --error-fg: #721c24;
          --whatsapp: #25d366; /* accent */
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .page-container {
          min-height: 100vh;
          background: var(--bg);
          color: var(--fg);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }

        /* Header with hero image and subtle brand overlay */
        .header-section {
          position: relative;
          color: #ffffff;
          padding: 68px 20px 96px;
          text-align: center;
          isolation: isolate;
        }

        /* Add a pseudo-element for the background with brightness filter */
        .header-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background:
            linear-gradient(to bottom, rgba(18, 32, 44, 0.15), rgba(18, 32, 44, 0.4)),
            linear-gradient(to bottom, rgba(40, 170, 226, 0.18), rgba(40, 170, 226, 0.05)),
            url('/assets/img/BeatPrice.jpg') center/cover no-repeat;
          filter: brightness(0.5);
          z-index: -1;
        }

        .header-content {
          max-width: 980px;
          margin: 0 auto;
          margin-top: 120px;
          position: relative;
          z-index: 2; /* Ensure content is above the background */
        }

        .main-title {
          font-size: 44px;
          font-weight: 800;
          line-height: 1.15;
          text-wrap: balance;
          color: #ffffff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Enhanced text shadow for better readability */
          margin: 0 0 12px 0;
        }

        .subtitle {
          font-size: 18px;
          opacity: 0.95;
          font-weight: 500;
          margin: 0 auto 28px;
          max-width: 780px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25); /* Added text shadow to subtitle */
        }

        .trust-badges {
          display: flex;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 14px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #0b1720;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 999px;
          padding: 8px 14px;
          backdrop-filter: saturate(180%) blur(4px);
          box-shadow: 0 1px 1px rgba(16, 24, 40, 0.08);
        }

        .badge-icon {
          width: 28px;
          height: 28px;
          background: rgba(40, 170, 226, 0.12);
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 16px;
          color: #0b1720;
          border: 1px solid rgba(40, 170, 226, 0.24);
        }

        .form-section {
          max-width: 980px;
          margin: 0px auto 0;
          padding: 0 20px 84px;
          position: relative;
          z-index: 10;
          margin-top: 60px; /* Pull up the form to overlap header */
        }

        .form-container {
          background: var(--card);
          border-radius: 14px;
          box-shadow: var(--shadow);
          padding: 40px 34px;
          border: 1px solid var(--border);
        }

        .form-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .form-title {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
        }

        .form-hint {
          font-size: 14px;
          color: var(--muted-fg);
        }

        .alert {
          padding: 16px;
          border-radius: 10px;
          margin: 18px 0 26px;
          text-align: center;
          font-weight: 600;
        }

        .success-message {
          background: var(--success-bg);
          border-left: 4px solid var(--success-border);
          color: var(--success-fg);
        }

        .error-message {
          background: var(--error-bg);
          border-left: 4px solid var(--error-border);
          color: var(--error-fg);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-label {
          font-size: 14px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .required {
          color: #e74c3c;
          margin-left: 4px;
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 14px 16px;
          border: 2px solid var(--border);
          border-radius: 10px;
          font-size: 16px;
          transition: all 0.2s ease;
          font-family: inherit;
          background: #ffffff;
          color: #0f172a;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9aa4b2;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--brand);
          box-shadow: 0 0 0 6px var(--ring);
        }

        .form-textarea {
          min-height: 130px;
          resize: vertical;
        }

        .submit-button {
          width: 100%;
          padding: 18px;
          background: #1f8bc0;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          letter-spacing: 0.2px;
        }

        .submit-button:hover:not(:disabled) {
          background: #1f8bc0; /* darker shade of brand for hover - same hue */
          transform: translateY(-1px);
          box-shadow: 0 8px 22px rgba(40, 170, 226, 0.28);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-top-color: #ffffff;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          width: 60px;
          height: 60px;
          background: var(--whatsapp);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          z-index: 1000;
          border: 2px solid rgba(255, 255, 255, 0.65);
        }

        .whatsapp-float:hover {
          transform: scale(1.06);
          box-shadow: 0 8px 26px rgba(37, 211, 102, 0.5);
        }

        .whatsapp-icon {
          width: 30px;
          height: 30px;
          fill: white;
        }

        @media (min-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr 1fr;
          }
          .form-group.full-width {
            grid-column: 1 / -1;
          }
          .main-title { font-size: 52px; }
          .subtitle { font-size: 20px; }
        }

        @media (max-width: 767px) {
          .header-section { padding: 44px 18px 76px; }
          .main-title { font-size: 32px; }
          .subtitle { font-size: 16px; }
          .trust-badges { gap: 10px; }
          .badge { font-size: 13px; }
          .badge-icon { width: 24px; height: 24px; font-size: 14px; }
          .form-section { padding: 0 16px 68px; }
          .form-container { padding: 28px 22px; }
          .whatsapp-float { width: 56px; height: 56px; bottom: 18px; right: 18px; }
          .whatsapp-icon { width: 28px; height: 28px; }
        }
      `}</style>

      <div className="page-container">
        <header className="header-section" role="banner">
          <div className="header-content ">
          
            <h1 className="main-title" >Already have a quote? Let us beat it!</h1>
            <p className="subtitle">
              Better value, hotels, and service—guaranteed. Share your quote and we’ll craft a superior package without
              compromising on quality.
            </p>

            <div className="trust-badges" aria-label="Trust badges">
              <div className="badge">
                <div className="badge-icon" aria-hidden="true">
                  ✓
                </div>
                <span>ATOL Protected</span>
              </div>
              <div className="badge">
                <div className="badge-icon" aria-hidden="true">
                  ★
                </div>
                <span>Trusted Hajj & Umrah Partner</span>
              </div>
              <div className="badge">
                <div className="badge-icon" aria-hidden="true">
                  ☎
                </div>
                <span>UK Based Support</span>
              </div>
            </div>
          </div>
        </header>

        <main className="form-section">
          <div className="form-container" role="region" aria-label="Beat My Quote form">
            <div className="form-header">
              <h2 className="form-title">Tell us about your trip</h2>
              <span className="form-hint">We respond within 24 hours</span>
            </div>

            {submitStatus === "success" && (
              <div className="alert success-message" role="status" aria-live="polite">
                Thank you! Your quote request has been submitted. We&apos;ll contact you shortly with a better deal!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="alert error-message" role="alert" aria-live="assertive">
                Sorry, there was an error submitting your request. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name<span className="required">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    className="form-input"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactNumber" className="form-label">
                    Contact Number (WhatsApp preferred)<span className="required">*</span>
                  </label>
                  <input
                    id="contactNumber"
                    type="tel"
                    name="contactNumber"
                    className="form-input"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="+44 7XXX XXXXXX"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="email" className="form-label">
                    Email Address<span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="travelMonth" className="form-label">
                    Preferred Travel Month<span className="required">*</span>
                  </label>
                  <select
                    id="travelMonth"
                    name="travelMonth"
                    className="form-select"
                    value={formData.travelMonth}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select month</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="duration" className="form-label">
                    Duration (Days)<span className="required">*</span>
                  </label>
                  <input
                    id="duration"
                    type="number"
                    name="duration"
                    className="form-input"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 7, 10, 14"
                    min="1"
                    inputMode="numeric"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="numberOfGuests" className="form-label">
                    No. of Guests / Travellers<span className="required">*</span>
                  </label>
                  <input
                    id="numberOfGuests"
                    type="number"
                    name="numberOfGuests"
                    className="form-input"
                    value={formData.numberOfGuests}
                    onChange={handleInputChange}
                    required
                    placeholder="Number of travelers"
                    min="1"
                    inputMode="numeric"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="departureCity" className="form-label">
                    Departure City (UK)
                  </label>
                  <select
                    id="departureCity"
                    name="departureCity"
                    className="form-select"
                    value={formData.departureCity}
                    onChange={handleInputChange}
                  >
                    <option value="">Select city</option>
                    {ukCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="accommodationPreference" className="form-label">
                    Accommodation Preference<span className="required">*</span>
                  </label>
                  <select
                    id="accommodationPreference"
                    name="accommodationPreference"
                    className="form-select"
                    value={formData.accommodationPreference}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select preference</option>
                    <option value="3-Star">3-Star</option>
                    <option value="4-Star">4-Star</option>
                    <option value="5-Star">5-Star</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="currentQuote" className="form-label">
                    Current Quote Received (£)<span className="required">*</span>
                  </label>
                  <input
                    id="currentQuote"
                    type="number"
                    name="currentQuote"
                    className="form-input"
                    value={formData.currentQuote}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., 2500"
                    min="0"
                    step="0.01"
                    inputMode="decimal"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="packageDetails" className="form-label">
                    Package Details / Message
                  </label>
                  <textarea
                    id="packageDetails"
                    name="packageDetails"
                    className="form-textarea"
                    value={formData.packageDetails}
                    onChange={handleInputChange}
                    placeholder="Tell us what your quote includes (optional)"
                  />
                </div>

                <div className="form-group full-width">
                  <button type="submit" className="submit-button" disabled={isSubmitting} aria-live="polite">
                    {isSubmitting && <span className="spinner" aria-hidden="true" />}
                    {isSubmitting ? "Submitting..." : "Beat My Quote Now"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>

        {/* <a
          href="https://wa.me/44XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contact us on WhatsApp"
        >
          <svg className="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="sr-only">Chat with us on WhatsApp</span>
        </a> */}
      </div>
    </>
  )
}
