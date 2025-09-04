import styles from './page.module.css'

export const metadata = {
  title: 'Patient Forms | Premier Allergy & Asthma',
  description: 'Download new patient registration forms for Premier Allergy and Asthma Centers. Complete forms online through our EHR patient portal or download printable forms for Maryland and Northern Virginia locations.',
  keywords: 'patient forms, new patient forms, adult forms, pediatric forms, registration forms, EHR portal, Premier Allergy',
  openGraph: {
    title: 'Patient Forms | Premier Allergy & Asthma',
    description: 'Download new patient registration forms for Premier Allergy and Asthma Centers.',
    type: 'website',
  },
}

export default function FormsPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Patient Forms</h1>
          <p className={styles.heroSubtitle}>
            Complete your forms online or download printable versions
          </p>
        </div>
      </section>

      {/* EHR Information Section */}
      <section className={styles.ehrSection}>
        <div className={styles.content}>
          <h2>Electronic Health Records (EHR)</h2>
          <div className={styles.ehrInfo}>
            <div className={styles.ehrCard}>
              <h3>📱 Preferred Method: Online Forms</h3>
              <p>
                Our practice is using EHR (Electronic Health Records). We are trying to minimize 
                the use of paper in our offices. Please help us in this effort by completing our 
                interactive forms on your computer prior to your visit and sending them over to us 
                as prompted in your appointment confirmation e-mail through our EHR patient portal.
              </p>
            </div>
            
            <div className={styles.ehrCard}>
              <h3>📄 Alternative: Download & Fax</h3>
              <p>
                If you are unable to complete forms online, you can fax us 
                <strong> (855-329-2873) </strong>the completed interactive forms you find on this page 
                below or bring the completed forms with you to your appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className={styles.noticeSection}>
        <div className={styles.content}>
          <div className={styles.noticeBox}>
            <h3>⚠️ Important Notice</h3>
            <p>
              We ask all of our patients to complete required forms and review and sign our patient 
              information/policies prior to being seen by our physician. We pride ourselves in not 
              rushing appointments and instead dedicating as much time as needed to your visit, 
              explaining your condition, proposed treatment plan and answering all your questions.
            </p>
            <p>
              By reviewing and completing the new patient registration packet prior to your arrival, 
              you will facilitate your registration and make your entire visit the most time efficient. 
              If you like to complete our new patient information forms in our office prior to your 
              appointment, please plan to arrive <strong>20 minutes in advance</strong>. Thank you.
            </p>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className={styles.formsSection}>
        <div className={styles.content}>
          <h2>Download Patient Forms</h2>
          <p className={styles.formsIntro}>
            Complete new patient registration forms for Maryland and Northern Virginia locations
          </p>

          <div className={styles.formsGrid}>
            <div className={styles.formItem}>
              <div className={styles.formInfo}>
                <h4>📋 Adult New Patient Forms</h4>
                <p>Complete registration packet for adult patients including registration form, financial policies, and consent forms</p>
              </div>
              <a 
                href="/forms/ADULT NEW PATIENT FORMS.pdf" 
                className={styles.downloadButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Download PDF
              </a>
            </div>

            <div className={styles.formItem}>
              <div className={styles.formInfo}>
                <h4>📋 Pediatric New Patient Forms</h4>
                <p>Complete registration packet for pediatric patients including registration form, financial policies, and consent forms</p>
              </div>
              <a 
                href="/forms/PEDIATRIC NEW PATIENT FORMS.pdf" 
                className={styles.downloadButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.content}>
          <h2>Need Help?</h2>
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h3>📧 EHR Portal Access</h3>
              <p>Check your appointment confirmation email for EHR portal login instructions</p>
            </div>
            
            <div className={styles.contactCard}>
              <h3>📠 Fax Forms</h3>
              <p>Fax completed forms to: <strong>(855) 329-2873</strong></p>
            </div>
            
            <div className={styles.contactCard}>
              <h3>📞 Questions?</h3>
              <p>Call us at <strong>(703) 249-8500</strong> for assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
