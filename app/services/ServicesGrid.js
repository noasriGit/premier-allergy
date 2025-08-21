'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServicesPage.module.css';

export default function ServicesGrid({ services, categories }) {
  return (
    <section className={styles.servicesGrid}>
      {services.map((service, index) => (
        <motion.div
          key={service.slug}
          className={styles.card}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Link href={`/services/${service.slug}`} className={styles.cardLink}>
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className={styles.image}
                priority={index < 3}
              />
              <div 
                className={styles.categoryBadge}
                style={{
                  backgroundColor: categories[service.category].bgColor,
                  color: categories[service.category].color
                }}
              >
                {service.category}
              </div>
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.learnMore}>
                Learn More →
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
