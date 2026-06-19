'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ServiceNavbar.module.css'

export default function ServiceNavbar({ sections, activeSection, onSectionClick, serviceTitle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(`.${styles.navbar}`)) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen, closeMenu])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
        return
      }

      if (e.key === 'Tab' && mobileMenuRef.current) {
        const focusable = mobileMenuRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        )
        if (focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    requestAnimationFrame(() => {
      const closeButton = mobileMenuRef.current?.querySelector(`.${styles.mobileMenuClose}`)
      closeButton?.focus()
    })

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen, closeMenu])

  const handleSectionClick = (sectionId) => {
    onSectionClick(sectionId)
    setIsMenuOpen(false)
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
      aria-label={`${serviceTitle} page sections`}
    >
      <div className={styles.navContent}>
        <div className={styles.navLinks} role="tablist" aria-label="Page sections">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => handleSectionClick(section.id)}
              className={`${styles.navLink} ${
                activeSection === section.id ? styles.active : ''
              }`}
              role="tab"
              aria-selected={activeSection === section.id}
              aria-controls={section.id}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className={styles.navActions}>
          <a href="/contact" className={styles.ctaButton}>
            Schedule Visit
          </a>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.mobileMenuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close section menu' : 'Open section menu'}
          aria-expanded={isMenuOpen}
          aria-controls="service-section-menu"
        >
          <div className={styles.hamburger} aria-hidden="true">
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="presentation"
          >
            <motion.div
              ref={mobileMenuRef}
              id="service-section-menu"
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              role="dialog"
              aria-modal="true"
              aria-label={`${serviceTitle} section navigation`}
            >
              <div className={styles.mobileMenuHeader}>
                <span className={styles.mobileMenuTitle}>{serviceTitle}</span>
                <button
                  type="button"
                  className={styles.mobileMenuClose}
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <div className={styles.closeIcon} aria-hidden="true"></div>
                </button>
              </div>

              <div className={styles.mobileNavLinks}>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => handleSectionClick(section.id)}
                    className={`${styles.mobileNavLink} ${
                      activeSection === section.id ? styles.active : ''
                    }`}
                    aria-current={activeSection === section.id ? 'true' : undefined}
                  >
                    <span className={styles.mobileNavText}>{section.title}</span>
                    {activeSection === section.id && (
                      <span className={styles.activeIndicator} aria-hidden="true"></span>
                    )}
                  </button>
                ))}
              </div>

              <div className={styles.mobileMenuFooter}>
                <a href="/contact" className={styles.mobileCtaButton}>
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
