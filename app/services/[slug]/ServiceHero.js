'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './ServiceHero.module.css'

export default function ServiceHero({ title, heroImage, description }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src={heroImage}
          alt={`${title} hero image`}
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      
      <div className={styles.heroContent}>
        <motion.div
          className={styles.heroText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.heroTitle}>{title}</h1>
          <p 
            className={styles.heroDescription}
            dangerouslySetInnerHTML={{
              __html: description.length > 200 
                ? `${description.substring(0, 200)}...` 
                : description
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
