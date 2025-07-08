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
    desc: 'Allergies represent the most common acute and chronic disorders affecting about 20% of population both children and adults worldwide.',
  },
  {
    href: '/services/asthma',
    img: '/services2.jpg',
    title: 'Asthma Management',
    desc: 'Asthma is a common chronic disease affecting tens of millions of Americans and a major public health problem in the US and worldwide.',
  },
  {
    href: '/services/immunotherapy',
    img: '/services3.jpg',
    title: 'Immunotherapy',
    desc: 'Allergen immunotherapy is one of the specific areas where an intervention guided by a board-certified allergist can lead to long-term remission of your allergy.',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className={styles.section} aria-labelledby="services-title">
      <h2 id="services-title">Our Services</h2>
      <div className={`${styles.cards} ${visible ? styles.visible : ''}`}>
        {services.map((s, i) => (
          <article key={s.href} className={styles.card}>
            <Image
              src={s.img}
              alt={s.title}
              width={400}
              height={250}
              className={styles.image}
            />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <Link href={s.href} className={styles.button}>
              Learn More
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
