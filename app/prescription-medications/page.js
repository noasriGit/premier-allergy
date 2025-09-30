import styles from './page.module.css'

export const metadata = {
  title: 'Prescription Medications | Premier Allergy & Asthma',
  description: 'Learn about prescription medications and biologic therapies for allergy and asthma treatment at Premier Allergy and Asthma Centers.',
  keywords: 'prescription medications, biologic therapies, asthma treatment, allergy medication, Premier Allergy',
  openGraph: {
    title: 'Prescription Medications | Premier Allergy & Asthma',
    description: 'Learn about prescription medications and biologic therapies for allergy and asthma treatment.',
    type: 'website',
  },
}

export default function PrescriptionMedicationsPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Allergy and Asthma Prescription Medication and Refills</h1>
          <p className={styles.heroSubtitle}>
            Premier Allergy and Asthma Centers provides comprehensive prescription medication management 
            with electronic prescribing and convenient refill services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <section className={styles.contentSection}>
          <h2>Prescription Management</h2>
          <p className={styles.mainText}>
            Our practice is using EHR (Electronic Health Records) and e-Prescribe software which allows us to submit electronically a prescription for your medication directly to a pharmacy of your choice. Please provide us with the name, address and phone number of the pharmacy where you usually pick up your prescription. Then, all you will have left to do is to go over to pick up your medication after you leave our office.
          </p>
        </section>

        <section className={styles.refillSection}>
          <h2>Prescription Refills</h2>
          <p className={styles.refillText}>
            For a refill, please call during our office hours. Call prior to running out of your medicine as refill requests may take up to 48 hours to process. Prescriptions cannot be refilled after hours or on the weekends.
          </p>
        </section>

      </main>
    </div>
  )
}
