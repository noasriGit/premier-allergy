// app/services/page.js
import styles from './ServicesPage.module.css';
import Image from 'next/image';
import Head from 'next/head';

export const metadata = {
  title: 'Our Services | Premier Allergy and Asthma Centers',
  description: 'Explore expert allergy and asthma services in Maryland. From testing to treatment, we provide personalized care for all ages.',
};

const services = [
  {
    title: 'Allergy Testing',
    image: '/images/services/allergy-testing.jpg',
    description: 'We provide advanced allergy testing for environmental and food allergens using skin and blood testing methods.',
  },
  {
    title: 'Asthma Management',
    image: '/images/services/asthma-management.jpg',
    description: 'Comprehensive asthma diagnosis, monitoring, and treatment for adults and children.',
  },
  {
    title: 'Immunotherapy',
    image: '/images/services/immunotherapy.jpg',
    description: 'Personalized allergy shots and sublingual therapy designed to treat root causes, not just symptoms.',
  },
  {
    title: 'Pediatric Allergy Care',
    image: '/images/services/pediatric-allergy.jpg',
    description: 'Gentle, expert care tailored for children suffering from allergies or asthma.',
  },
  {
    title: 'Eczema & Skin Conditions',
    image: '/images/services/eczema.jpg',
    description: 'Relief for eczema, hives, and other allergic skin disorders through personalized treatments.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.title}>Our Services</h1>
        <p className={styles.subtitle}>
          Comprehensive care for allergies, asthma, and related conditions.
        </p>
      </div>

      <section className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className={styles.image}
                priority={index === 0}
              />
            </div>
            <h2 className={styles.cardTitle}>{service.title}</h2>
            <p className={styles.cardDesc}>{service.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
