export const metadata = {
  title: 'Contact Us',
  description: 'Contact Premier Allergy and Asthma Centers by phone or email with questions about appointments, forms, or insurance.',
}

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '600px', margin: '140px auto 80px', padding: '0 20px' }}>
      <h1>Contact Us</h1>
      <p>
        For appointment scheduling, please call{' '}
        <a href="tel:18555287348" aria-label="Call us at 1-855-528-7348">
          (1-855-528-7348)
        </a>{' '}
        or email{' '}
        <a href="mailto:info@allergyandasthmaclinicalcenters.com">
          info@allergyandasthmaclinicalcenters.com
        </a>
        .
      </p>

      <form aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="sr-only">
          Send us a message
        </h2>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="contact-name">
            Name <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            aria-required="true"
            autoComplete="name"
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="contact-email">
            Email <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            aria-required="true"
            autoComplete="email"
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="contact-message">
            Message <span aria-hidden="true">*</span>
            <span className="sr-only"> (required)</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            aria-required="true"
            rows={5}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  )
}
