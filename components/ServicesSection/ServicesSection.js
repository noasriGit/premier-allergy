'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ServicesSection.module.css'

const services = [
  {
    href: '/services',
    img: '/services1.jpg',
    title: 'Allergy Treatments',
    description: 'Comprehensive allergy diagnosis and treatment for all types of allergies',
    features: ['Skin Testing', 'Blood Testing', 'Environmental Allergies', 'Food Allergies'],
    alt: 'Professional allergy testing and treatment services',
  },
  {
    href: '/services/asthma',
    img: '/services2.jpg',
    title: 'Asthma Management',
    description: 'Expert asthma care and management for children and adults',
    features: ['Asthma Testing', 'Treatment Plans', 'Medication Management', 'Lifestyle Guidance'],
    alt: 'Asthma management and treatment services',
  },
  {
    href: '/immunotherapy',
    img: '/services3.jpg',
    title: 'Immunotherapy',
    description: 'Long-term allergy treatment through immunotherapy solutions',
    features: ['Allergy Shots', 'Sublingual Therapy', 'Custom Treatment Plans', 'Long-term Relief'],
    alt: 'Immunotherapy treatment for long-term allergy relief',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={ref} 
      className={styles.section} 
      aria-labelledby="services-title"
    >
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <h2 id="services-title" className={styles.title}>
            Our Services
          </h2>
          <p className={styles.subtitle}>
            Comprehensive allergy and asthma care from board-certified specialists
          </p>
        </header>

        <div className={`${styles.cards} ${visible ? styles.visible : ''}`}>
          {services.map((service, index) => (
            <article 
              key={service.href} 
              className={styles.card}
              aria-labelledby={`service-${index}-title`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={service.img}
                  alt={service.alt}
                  width={400}
                  height={250}
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}>
                  <Link href={service.href} className={styles.learnMore}>
                    Learn More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 id={`service-${index}-title`} className={styles.cardTitle}>
                  {service.title}
                </h3>
                <p className={styles.cardDescription}>
                  {service.description}
                </p>
                
                <ul className={styles.featuresList}>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={styles.feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={service.href} className={styles.button}>
                  View Details
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Ready to start your journey to better health?
          </p>
          <Link href="/services" className={styles.ctaButton}>
            View All Services
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
