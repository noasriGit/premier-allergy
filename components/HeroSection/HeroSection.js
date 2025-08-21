'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSection.module.css'

// ORIGINAL HERO SECTION (COMMENTED OUT)
/*
const slides = [
  {
    image: '/hero1.jpg',
    heading: 'Maryland and Virginia\'s Premier Clinics for Allergy Testing and Asthma Management',
    buttonLink: '/contact',
  },
  {
    image: '/hero2.jpg',
    heading: 'Skin Testing & Immunotherapy',
    buttonLink: '/services',
  },
  { 
    image: '/hero3.jpg',
    heading: 'Care for All Ages',
    buttonLink: '/about',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className={styles.hero} aria-label="Hero Banner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority={index === 0}
              className={styles.image}
            />
            <div className={styles.overlay}>
              {index === 0 ? (
                <h1 className={styles.heading}>{slide.heading}</h1>
              ) : (
                <h2 className={styles.heading}>{slide.heading}</h2>
              )}
            </div>
          </div>
        ))}
      </section>

      <div className={styles.ctaBar}>
        <div className={styles.ctaText}>
          <p className={styles.ctaCall}>
            Call to book an appointment now: <a href="tel:1234567890">(123) 456-7890</a>
          </p>
          <p className={styles.ctaLocations}>
            We have two convenient locations in Maryland and Virginia.
          </p>
        </div>
        <Link href="/contact" className={styles.ctaButton}>
          Book An Appointment
        </Link>
      </div>
    </>
  )
}
*/

// NEW AWARD-WINNING HERO SECTION
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.background}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.floatingShapes}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={styles.shape}
              style={{
                '--delay': `${i * 0.5}s`,
                '--duration': `${3 + i * 0.5}s`,
                '--size': `${20 + i * 10}px`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🏆</span>
            <span>Board-Certified Specialists</span>
          </div>
          
          <h1 className={styles.heading}>
            <span className={styles.headingLine1}>Expert Allergy &</span>
            <span className={styles.headingLine2}>Asthma Care</span>
            <span className={styles.headingLine3}>That Actually Works</span>
          </h1>
          
          <p className={styles.subtitle}>
            Stop suffering from seasonal allergies, asthma, and chronic symptoms. 
            Our board-certified allergists provide personalized treatment plans 
            that bring lasting relief to patients of all ages.
          </p>

          <div className={styles.ctaSection}>
            <Link href="/contact" className={styles.primaryButton}>
              <span>Schedule Your Consultation</span>
              <svg className={styles.buttonArrow} viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            
            <Link href="/services" className={styles.secondaryButton}>
              View Our Services
            </Link>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>25+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Patients Helped</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
          </div>
        </div>

        <div className={styles.visualSection}>
          <div className={styles.heroImage}>
            <div className={styles.imageContainer}>
              <Image
                src="/hero1.jpg"
                alt="Professional allergy testing and care"
                fill
                priority
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            
            {/* Floating Elements */}
            <div className={styles.floatingElements}>
              <div className={styles.element} style={{ '--delay': '0s' }}>
                <span className={styles.elementIcon}>🔬</span>
                <span className={styles.elementText}>Advanced Testing</span>
              </div>
              <div className={styles.element} style={{ '--delay': '1s' }}>
                <span className={styles.elementIcon}>💊</span>
                <span className={styles.elementText}>Personalized Care</span>
              </div>
              <div className={styles.element} style={{ '--delay': '2s' }}>
                <span className={styles.elementIcon}>🎯</span>
                <span className={styles.elementText}>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className={styles.trustSection}>
        <div className={styles.trustContent}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>⭐</div>
            <span>Board-Certified Specialists</span>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🏥</div>
            <span>State-of-the-Art Facilities</span>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>📱</div>
            <span>Same-Day Appointments</span>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>💳</div>
            <span>Insurance Accepted</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Discover More</div>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  )
}
