'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ServiceNavbar.module.css'

export default function ServiceNavbar({ sections, activeSection, onSectionClick, serviceTitle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.navbar}`)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const handleSectionClick = (sectionId) => {
    onSectionClick(sectionId)
    setIsMenuOpen(false) // Close menu on mobile after selection
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={styles.navContent}>
        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`${styles.navLink} ${
                activeSection === section.id ? styles.active : ''
              }`}
              aria-label={`Go to ${section.title} section`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className={styles.navActions}>
          <a 
            href="/contact" 
            className={styles.ctaButton}
            onClick={() => gtag_report_conversion('/contact')}
          >
            Schedule Visit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <div className={styles.hamburger}>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.mobileMenuHeader}>
                <span className={styles.mobileMenuTitle}>{serviceTitle}</span>
                <button
                  className={styles.mobileMenuClose}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <div className={styles.closeIcon}></div>
                </button>
              </div>
              
              <div className={styles.mobileNavLinks}>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className={`${styles.mobileNavLink} ${
                      activeSection === section.id ? styles.active : ''
                    }`}
                    aria-label={`Go to ${section.title} section`}
                  >
                    <span className={styles.mobileNavText}>{section.title}</span>
                    {activeSection === section.id && (
                      <span className={styles.activeIndicator}></span>
                    )}
                  </button>
                ))}
              </div>

              <div className={styles.mobileMenuFooter}>
                <a 
                  href="/contact" 
                  className={styles.mobileCtaButton}
                  onClick={() => gtag_report_conversion('/contact')}
                >
                  Schedule Visit
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
