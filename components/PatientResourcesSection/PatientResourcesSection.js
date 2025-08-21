'use client'

import styles from './PatientResourcesSection.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function PatientResourcesSection() {
  const resources = [
    {
      id: 'forms',
      title: 'Patient Forms',
      description: 'Download and complete forms before your visit to save time',
      image: '/resources/forms.png',
      alt: 'Patient Forms Icon',
      href: '/forms',
      icon: '📋'
    },
    {
      id: 'portal',
      title: 'Patient Portal',
      description: 'Access your medical records, test results, and appointment history',
      image: '/resources/portal.png',
      alt: 'Patient Portal Icon',
      href: '/portal',
      icon: '🏥'
    },
    {
      id: 'insurance',
      title: 'Insurance & Billing',
      description: 'Learn about accepted insurance plans and payment options',
      image: '/resources/updates.png',
      alt: 'Insurance Information Icon',
      href: '/insurance',
      icon: '💳'
    }
  ]

  return (
    <section className={styles.section} aria-labelledby="resources-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="resources-title" className={styles.heading}>
            Patient Resources
          </h2>
          <p className={styles.subtitle}>
            Everything you need for a smooth and efficient visit
          </p>
        </div>

        <div className={styles.cardGrid}>
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.cardImageContainer}>
                <Image
                  src={resource.image}
                  alt={resource.alt}
                  width={300}
                  height={200}
                  className={styles.cardImage}
                  priority={index < 2}
                />
                <div className={styles.imageOverlay}>
                  <span className={styles.resourceIcon} aria-hidden="true">
                    {resource.icon}
                  </span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{resource.title}</h3>
                <p className={styles.cardDescription}>{resource.description}</p>
                
                <Link href={resource.href} className={styles.cardButton}>
                  <span>Access {resource.title}</span>
                  <svg 
                    className={styles.arrowIcon} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Need help? Our team is here to assist you with any questions.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
