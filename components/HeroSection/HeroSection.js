'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './HeroSection.module.css'

const slides = [
  {
    image: '/hero1.jpg',
    heading: 'Expert Allergy & Asthma Care in Maryland',
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
