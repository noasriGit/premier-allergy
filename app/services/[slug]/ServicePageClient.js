'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from './page.module.css'
import ServiceNavbar from './ServiceNavbar'
import ServiceHero from './ServiceHero'
import ServiceSection from './ServiceSection'
import ServiceFAQ from './ServiceFAQ'

export default function ServicePageClient({ service, availableSections }) {
  const [activeSection, setActiveSection] = useState('')
  const sectionRefs = useRef({})

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.1,
      }
    )

    // Observe all sections
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [service])

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      // Calculate offset for fixed headers
      const headerHeight = 120 // Main header height
      const navbarHeight = 80 // Service navbar height
      const totalOffset = headerHeight + navbarHeight + 20 // Extra padding
      
      const elementPosition = element.offsetTop - totalOffset
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={styles.container}>
      {/* Dynamic Secondary Navbar */}
      <ServiceNavbar 
        sections={availableSections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        serviceTitle={service.title}
      />

      {/* Hero Section */}
      <ServiceHero 
        title={service.title}
        heroImage={service.heroImage}
        description={service.heroDescription || service.info.text}
      />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Info/Overview Section */}
        <motion.section
          ref={(el) => (sectionRefs.current.info = el)}
          id="info"
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📋</span>
              {service.info.heading}
            </h2>
          </div>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoText}>
              <p className={styles.infoParagraph}>{service.info.text}</p>
            </div>
            <div className={styles.infoImage}>
              <Image
                src={service.info.image}
                alt={`${service.title} information`}
                width={500}
                height={350}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </motion.section>

        {/* Symptoms Section */}
        {service.symptoms && (
          <ServiceSection
            ref={(el) => (sectionRefs.current.symptoms = el)}
            id="symptoms"
            title="Symptoms"
            icon="⚠️"
            items={service.symptoms}
            type="list"
          />
        )}

        {/* Diagnosis Section */}
        {service.diagnosis && (
          <ServiceSection
            ref={(el) => (sectionRefs.current.diagnosis = el)}
            id="diagnosis"
            title="Diagnosis"
            icon="🔍"
            items={service.diagnosis}
            type="list"
          />
        )}

        {/* Treatment Section */}
        {service.treatment && (
          <ServiceSection
            ref={(el) => (sectionRefs.current.treatment = el)}
            id="treatment"
            title="Treatment"
            icon="💊"
            items={service.treatment}
            type="list"
          />
        )}

        {/* Prevention Section */}
        {service.prevention && (
          <ServiceSection
            ref={(el) => (sectionRefs.current.prevention = el)}
            id="prevention"
            title="Prevention"
            icon="🛡️"
            items={service.prevention}
            type="list"
          />
        )}

        {/* FAQ Section */}
        {service.faq && (
          <ServiceFAQ
            ref={(el) => (sectionRefs.current.faq = el)}
            id="faq"
            title="Frequently Asked Questions"
            icon="❓"
            faqs={service.faq}
          />
        )}

        {/* Call to Action */}
        <motion.section
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Get Relief?</h2>
            <p className={styles.ctaText}>
              Don&apos;t let {service.title.toLowerCase()} control your life. Our expert team is here to help you find the right treatment plan.
            </p>
            <div className={styles.ctaButtons}>
              <Link 
                href="/contact" 
                className={styles.ctaButtonPrimary}
              >
                Schedule Consultation
              </Link>
              <Link href="/services" className={styles.ctaButtonSecondary}>
                View All Services
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}
