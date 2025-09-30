import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Before You Visit | Premier Allergy & Asthma',
  description: 'Prepare for your first visit to Premier Allergy and Asthma Centers. Learn about required forms, medications to discontinue, and important information for new patients.',
  keywords: 'first visit, new patient, allergy appointment, preparation, forms, Premier Allergy',
  openGraph: {
    title: 'Before You Visit | Premier Allergy & Asthma',
    description: 'Prepare for your first visit to Premier Allergy and Asthma Centers. Learn about required forms, medications to discontinue, and important information for new patients.',
    type: 'website',
  },
}

export default function BeforeYouVisitPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Before Your First Visit</h1>
          <p className={styles.heroSubtitle}>
          Now that you have made the first step towards resolution of your allergy and asthma problems 
            by making an appointment in Premier Allergy and Asthma Centers, we would like to extend our 
            early sincere welcome to our practice. We appreciate the opportunity to put our knowledge, 
            experience and expertise into the service of your health care needs and to become part of 
            your health management team. The information below will help you get ready for your visit. 
            Please read all the information carefully. We are looking forward to seeing you at one of our 
            offices. Thank you for choosing us!
          </p>
        </div>
      </section>

     

      {/* Preparation Steps */}
      <section className={styles.preparationSection}>
        <div className={styles.preparationContent}>
          <h2>How to prepare for your first visit</h2>
          
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Required Documents</h3>
              <p>You will need to bring a picture ID and your insurance card to your first visit.</p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Patient Portal Access</h3>
              <p>
                After scheduling your appointment, we will e-mail you a link to our secure patient portal 
                allowing you to access new patient registration form, medical questionnaire and office 
                policies you will need to review, complete and sign.
              </p>
              <div className={styles.contactInfo}>
                <p><strong>Need Help?</strong> Please call our administrator at <a href="tel:18555287348">1-855-528-7348</a> if you have not received email with the link and your login credentials within 24 hours of scheduling your appointment. Also, please be sure to check your &ldquo;spam&rdquo; or &ldquo;junk&rdquo; mailboxes if you have not received this email.</p>
                <p>Once you have logged in to the secure patient portal, it will contain information about the time and place of your appointment, the new patient forms and also allow you to securely communicate with your doctor and our staff should you need to change your appointment after you visit. Please review, complete and sign all the included forms and bring to your appointment.</p>
                <p><a href="/forms">You can also find all the new patient forms and our policies here</a></p>
              </div>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Complete Forms in Advance</h3>
              <p>
                By completing and signing these forms prior to your arrival you will help us to significantly 
                streamline both your registration and your entire visit. Otherwise, please plan on arriving 
                15 minutes ahead of your scheduled appointment allowing for time required to review and complete the forms.
              </p>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Allergy Skin Testing Preparation</h3>
              <p>
                Your first visit may include allergy skin testing. In that case, please allow 
                approximately one hour for the test and visit. After the skin test our doctor 
                will discuss the results with you. Wear comfortable clothing. You will be asked to take your top off, so please do not wear a one-piece outfit.
              </p>
              <p><strong>Important:</strong> There are allergy medications which need to be discontinued prior to the allergy skin testing. This is very important for the accuracy of your test. <a href="/allergy-skin-testing">Please review carefully here:</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className={styles.importantSection}>
        <div className={styles.importantContent}>
          <h2><a href="/forms">Forms that need to be completed and signed prior to your visit</a></h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Insurance & Referrals</h3>
              <p>
                If you have an insurance plan that requires any referrals, pre-certifications or 
                authorizations to receive any specialty care and diagnostic testing it is your 
                responsibility to obtain such a referral or authorization from your primary care 
                provider or your insurance company prior to your visit at PAAC. If you choose to be 
                treated without a referral you understand you will be held responsible for all charges 
                for the services rendered. If you arrive without a referral and choose to reschedule 
                your appointment, we reserve the right to charge you a late cancellation fee.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Payment Requirements</h3>
              <p>Co-pays and deductibles are required to be paid in full at the time of your visit.</p>
            </div>

            <div className={styles.infoCard}>
              <h3>Cancellation Policy</h3>
              <p>
                We are aware that emergencies arise, and plans change. However, we ask for at least 
                24 hours advance notice for a cancellation since it affects both our staff and other patients. 
                If an appointment is missed or cancelled with less than 24 hours notification, you will be 
                charged missed appointment fee.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Medical Insurance</h3>
              <p>
                If you have medical insurance, please make sure you verify your benefits under your 
                insurance plan with your insurance carrier prior to your visit at PAAC. For a list of 
                insurance carriers we participate with <a href="/insurance">click here</a>.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Privacy & HIPAA</h3>
              <p>
                We respect your privacy. Please read our <a href="/privacy-policy">Privacy Policy</a>.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Office Locations</h3>
              <p>
                <Link href="/#ethos-section">Directions to our office locations</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className={styles.linksSection}>
        <div className={styles.linksContent}>
          <h2>Additional Resources</h2>
          <div className={styles.linksGrid}>
            <a href="/forms" className={styles.linkCard}>
              <h3>Patient Forms</h3>
              <p>Download and complete required forms before your visit</p>
            </a>
            
            <a href="/insurance" className={styles.linkCard}>
              <h3>Insurance Information</h3>
              <p>Verify your benefits and check our participating insurance carriers</p>
            </a>
            
            <a href="/#ethos-section" className={styles.linkCard}>
              <h3>Office Locations</h3>
              <p>Get directions to our office locations</p>
            </a>
            
            <a href="/contact" className={styles.linkCard}>
              <h3>Contact Us</h3>
              <p>Have questions? Reach out to our team</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready for Your Visit?</h2>
          <p>
            If you have any questions about preparing for your appointment, please don&apos;t hesitate to contact us.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:18555287348" className={styles.ctaButton}>
              Call 855-5CURE4U
            </a>
            <a href="/contact" className={styles.ctaButtonSecondary}>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
