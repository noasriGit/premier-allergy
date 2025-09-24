'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './ServiceSection.module.css'

const ServiceSection = forwardRef(({ id, title, icon, items, type = 'list' }, ref) => {
  // Handle new data structure with description, bullet points, and additional info
  const hasStructuredData = items && typeof items === 'object' && !Array.isArray(items)
  
  if (hasStructuredData) {
    const { description, commonSymptoms, diagnosticMethods, treatmentOptions, preventionStrategies, additionalInfo } = items
    const bulletPoints = commonSymptoms || diagnosticMethods || treatmentOptions || preventionStrategies || []
    
    return (
      <motion.section
        ref={ref}
        id={id}
        className={styles.section}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon} aria-hidden="true">
              {icon}
            </span>
            {title}
          </h2>
        </div>

        <div className={styles.sectionContent}>
          {/* Main description paragraph - now the primary content */}
          <motion.div
            className={styles.mainDescriptionContainer}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <p 
              className={styles.mainDescriptionText}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </motion.div>

          {/* Additional info paragraph - secondary content */}
          {additionalInfo && (
            <motion.div
              className={styles.additionalInfoContainer}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p 
                className={styles.additionalInfoText}
                dangerouslySetInnerHTML={{ __html: additionalInfo }}
              />
            </motion.div>
          )}

          {/* Bullet points - now secondary, more subtle presentation */}
          {bulletPoints && bulletPoints.length > 0 && (
            <motion.div
              className={styles.bulletPointsContainer}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.bulletPointsWrapper}>
                <h3 className={styles.bulletPointsTitle}>Key Points:</h3>
                <ul className={styles.itemList}>
                  {bulletPoints.map((item, index) => (
                    <motion.li
                      key={index}
                      className={styles.listItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className={styles.itemIcon}>•</span>
                      <span className={styles.itemText}>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>
    )
  }

  // Handle legacy data structure (simple arrays)
  return (
    <motion.section
      ref={ref}
      id={id}
      className={styles.section}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionIcon} aria-hidden="true">
            {icon}
          </span>
          {title}
        </h2>
      </div>

      <div className={styles.sectionContent}>
        {type === 'list' && (
          <ul className={styles.itemList}>
            {items.map((item, index) => (
              <motion.li
                key={index}
                className={styles.listItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className={styles.itemIcon}>•</span>
                <span className={styles.itemText}>{item}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {type === 'text' && (
          <div className={styles.textContent}>
            {items.map((item, index) => (
              <motion.p
                key={index}
                className={styles.textItem}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.p>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
})

ServiceSection.displayName = 'ServiceSection'

export default ServiceSection
