import styles from './page.module.css'

export const metadata = {
  title: 'Insurance Information | Premier Allergy & Asthma',
  description: 'Learn about our insurance participation, coverage policies, and patient responsibilities. We work with major insurance carriers including AETNA, Anthem BCBS, CareFirst BCBS, CIGNA, Medicare, TRICARE, and United Healthcare.',
  keywords: 'insurance, allergy insurance, asthma insurance, in-network providers, AETNA, Anthem BCBS, CareFirst BCBS, CIGNA, Medicare, TRICARE, United Healthcare, Premier Allergy',
  openGraph: {
    title: 'Insurance Information | Premier Allergy & Asthma',
    description: 'Learn about our insurance participation, coverage policies, and patient responsibilities.',
    type: 'website',
  },
}

export default function InsurancePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Insurance Information</h1>
          <p className={styles.heroSubtitle}>
            Understanding your insurance coverage and our participation policies
          </p>
        </div>
      </section>

      {/* Insurance Participation Section */}
      <section className={styles.participationSection}>
        <div className={styles.content}>
          <h2>Insurance Participation</h2>
          <p className={styles.introText}>
            We are in-network providers with these insurance carriers:
          </p>
          
          <div className={styles.insuranceGrid}>
            <div className={styles.insuranceCard}>
              <h3>AETNA</h3>
            </div>
            <div className={styles.insuranceCard}>
              <h3>ANTHEM BCBS</h3>
            </div>
            <div className={styles.insuranceCard}>
              <h3>CAREFIRST BCBS</h3>
            </div>
            <div className={styles.insuranceCard}>
              <h3>CIGNA</h3>
            </div>
            <div className={styles.insuranceCard}>
              <h3>MEDICARE</h3>
            </div>
            <div className={styles.insuranceCard}>
              <h3>TRICARE</h3>
            </div>
            <div className={styles.insuranceCard}>
              <h3>UNITED HEALTHCARE</h3>
            </div>
            <div className={styles.insuranceCard}>
              <h3>MEDICAID HMO</h3>
              <p className={styles.note}>some, please call to confirm that we accept your plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Not Accepted Section */}
      <section className={styles.notAcceptedSection}>
        <div className={styles.content}>
          <h2>We do not accept:</h2>
          <div className={styles.notAcceptedGrid}>
            <div className={styles.notAcceptedCard}>
              <h3>MEDICAID</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className={styles.importantSection}>
        <div className={styles.content}>
          <h2>Other important insurance information:</h2>
          
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <h3>Patient Responsibilities</h3>
              <p>
                It is your responsibility to inform us of any special requirements in your insurance 
                contract, such as referrals, pre-authorizations or non-coverage for specific diagnostic 
                and/or treatment services.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>In-Network Coverage</h3>
              <p>
                If we participate (contract) with an insurance plan under which you are covered, we will 
                bill your carrier directly for all charges for rendered services except co-pays and 
                deductibles. We will bill both your primary and secondary insurance (if applicable) for 
                contracted plans. However, in the event that the secondary does not pay within 60 days, 
                you will be billed for the balance.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Out-of-Network Coverage</h3>
              <p>
                If we do not participate and are out-of-network with an insurance plan under which you 
                are covered, it is your responsibility to verify that your policy includes out-of-network 
                benefits before your first visit. You will be responsible for balances on claim denials 
                if there are no out-of-network benefits available.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Deductibles & Co-pays</h3>
              <p>
                You are responsible for paying your annual deductible, coinsurance, and copayment 
                associated with your in-network or out-of-network insurance plan. Please be aware that 
                co-pays and deductibles are payable in full at the time of your visit.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Non-Covered Services</h3>
              <p>
                In the event we are not aware that a particular service is not covered by your plan, 
                you will be responsible for the balance after we obtain a denial from your insurance carrier.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3>Claims Processing</h3>
              <p>
                We always strive to minimize the likelihood that the claim to your insurance carrier is 
                declined, and you are made liable for the charges incurred. Please help us in this process by following these steps:
              </p>
              <ul>
                <li>Bring picture ID and valid insurance card to your first visit. We keep a copy of your insurance card on file.</li>
                <li>Please inform us immediately of any change in insurance coverage and/or benefits and change of personal information.</li>
                <li>This helps us to assure proper and timely reimbursement from your insurance company.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.content}>
          <h2>Questions About Your Bill?</h2>
          <p>
            If you have any questions regarding your bill, please call our billing department for 
            assistance at <strong>1-855-528-7348 EXT. 704</strong>.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>Billing Department</h3>
              <p>Phone: 1-855-528-7348 EXT. 704</p>
              <p>Available during business hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
