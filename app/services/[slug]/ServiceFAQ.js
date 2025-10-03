'use client'

import { forwardRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ServiceFAQ.module.css'

const ServiceFAQ = forwardRef(({ id, title, icon, faqs }, ref) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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

      <div className={styles.faqContainer}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <motion.div
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className={`${styles.faqQuestion} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={styles.arrowIcon} aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    className={styles.faqAnswer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.answerText} dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
})

ServiceFAQ.displayName = 'ServiceFAQ'

export default ServiceFAQ
