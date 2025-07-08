'use client'

import styles from './MissionSection.module.css'

export default function MissionSection() {
  return (
    <section className={styles.section} aria-labelledby="mission-title">
      <div className={styles.overlay}>
        <h2 id="mission-title" className={styles.heading}>
        Guided by Care. Backed by Science.
        </h2>
        <p className={styles.paragraph}>
          Our mission is to provide the highest quality allergy and asthma care with compassion,
          integrity, and professionalism. We are committed to improving the quality of life for our
          patients by delivering personalized treatment in a friendly and supportive environment.
        </p>
      </div>
    </section>
  )
}
