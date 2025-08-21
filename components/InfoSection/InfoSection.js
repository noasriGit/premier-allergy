'use client'

import styles from './InfoSection.module.css'
import { motion } from 'framer-motion'

export default function InfoSection() {
  const infoSections = [
    {
      id: 'welcome',
      title: 'Welcome to Premier Allergy & Asthma Centers',
      content: 'Our centers of excellence provide comprehensive diagnosis and treatment of pediatric and adult asthma and allergic disorders. We combine the newest advances in medicine with personalized care to improve your quality of life.',
      icon: '🏥'
    },
    {
      id: 'expertise',
      title: 'Expert Care Team',
      content: 'Led by Dr. Petr Bocek, MD PhD FAAAAI, our friendly and dedicated staff is here to help educate you and your children. We truly care and treat every patient like family.',
      icon: '👨‍⚕️'
    },
    {
      id: 'approach',
      title: 'Our Patient-Centered Approach',
      content: 'We take the time to provide all the information you need to understand your condition and feel comfortable with your personalized treatment plan. Every care plan is tailored to your specific health needs.',
      icon: '💙'
    },
    {
      id: 'locations',
      title: 'Serving Maryland & Virginia',
      content: 'We provide comprehensive allergy and asthma testing, diagnosis, and treatment for patients throughout the region.',
      icon: '📍'
    }
  ]

  const serviceAreas = {
    maryland: {
      title: 'Maryland Service Areas',
      areas: [
        'Germantown',
        'Gaithersburg', 
        'Montgomery Village',
        'Rockville',
        'Clarksburg',
        'Montgomery County'
      ]
    },
    virginia: {
      title: 'Virginia Service Areas',
      areas: [
        'Manassas',
        'Manassas Park',
        'Gainesville',
        'Centreville',
        'Haymarket',
        'Bristow',
        'Prince William County',
        'Loudoun County',
        'Fairfax County'
      ]
    }
  }

  return (
    <section className={styles.section} aria-labelledby="info-heading">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="info-heading" className={styles.heading}>
            Board-Certified Allergy & Asthma Specialists
          </h2>
          <p className={styles.subtitle}>
            Serving Maryland & Virginia Families with Excellence in Care
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Main Information Cards */}
          <div className={styles.infoCards}>
            {infoSections.map((section, index) => (
              <motion.article
                key={section.id}
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon} aria-hidden="true">
                    {section.icon}
                  </span>
                  <h3 className={styles.cardTitle}>{section.title}</h3>
                </div>
                <p className={styles.cardContent}>{section.content}</p>
              </motion.article>
            ))}
          </div>

          {/* Service Areas */}
          <motion.div
            className={styles.serviceAreas}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.areasTitle}>Our Service Areas</h3>
            
            <div className={styles.areasGrid}>
              <div className={styles.areaCard}>
                <h4 className={styles.areaCardTitle}>
                  <span className={styles.areaIcon} aria-hidden="true">🏛️</span>
                  {serviceAreas.maryland.title}
                </h4>
                <ul className={styles.areaList}>
                  {serviceAreas.maryland.areas.map((area, index) => (
                    <li key={index} className={styles.areaItem}>{area}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.areaCard}>
                <h4 className={styles.areaCardTitle}>
                  <span className={styles.areaIcon} aria-hidden="true">🏛️</span>
                  {serviceAreas.virginia.title}
                </h4>
                <ul className={styles.areaList}>
                  {serviceAreas.virginia.areas.map((area, index) => (
                    <li key={index} className={styles.areaItem}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={styles.ctaText}>
            Experience the quality of care you've been looking for. Schedule your consultation today.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
