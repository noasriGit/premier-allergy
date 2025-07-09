'use client'

import styles from './PatientResourcesSection.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PatientResourcesSection() {
  return (
    <section className={styles.section} aria-labelledby="resources-title">
      <h2 id="resources-title" className={styles.heading}>
        Patient Resources
      </h2>

      <div className={styles.cardGrid}>
        <div className={styles.card}>
          <Image
            src="/resources/forms.png"
            alt="Patient Forms"
            width={300}
            height={200}
            className={styles.cardImage}
          />
          <Link href="/patient-forms" className={styles.cardButton}>
            Patient Forms
          </Link>
        </div>

        <div className={styles.card}>
          <Image
            src="/resources/portal.png"
            alt="Patient Portal"
            width={300}
            height={200}
            className={styles.cardImage}
          />
          <Link href="/insurance" className={styles.cardButton}>
            Patient Portal
          </Link>
        </div>

        <div className={styles.card}>
          <Image
            src="/resources/updates.png"
            alt="News and Updates"
            width={300}
            height={200}
            className={styles.cardImage}
          />
          <Link href="/appointment-prep" className={styles.cardButton}>
            Appointment Prep
          </Link>
        </div>
      </div>
    </section>
  )
}
