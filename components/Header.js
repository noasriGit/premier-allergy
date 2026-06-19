'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

function dropdownId(label) {
  return `nav-dropdown-${label.toLowerCase().replace(/\s+/g, '-')}`
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const hamburgerRef = useRef(null)
  const mobileMenuRef = useRef(null)

  const handleToggleDropdown = (dropdownLabel) => {
    setOpenDropdown(openDropdown === dropdownLabel ? null : dropdownLabel)
  }

  const handleMouseEnter = (dropdownLabel) => {
    setOpenDropdown(dropdownLabel)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  const closeAllMenus = useCallback(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeAllMenus()
        hamburgerRef.current?.focus()
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
      const firstFocusable = mobileMenuRef.current?.querySelector('a[href], button:not([disabled])')
      firstFocusable?.focus()
    })

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, closeAllMenus])

  useEffect(() => {
    if (!openDropdown || menuOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [openDropdown, menuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    {
      label: 'Services',
      dropdown: [
        { href: '/services/asthma', label: 'Asthma Management' },
        { href: '/services/nasal-allergies', label: 'Nasal Allergies' },
        { href: '/services/ocular-allergies', label: 'Ocular Allergies' },
        { href: '/services/sinus-disease', label: 'Sinus Disease' },
        { href: '/services/eczema-skin-allergies', label: 'Eczema & Skin Allergies' },
        { href: '/services/contact-implant-allergies', label: 'Contact & Implant Allergies' },
        { href: '/services/hives-angioedema', label: 'Hives & Angioedema' },
        { href: '/services/food-allergies', label: 'Food Allergies' },
        { href: '/services/drug-medication-allergies', label: 'Drug & Medication Allergies' },
        { href: '/services/novel-biologic-therapies', label: 'Novel Biologic Therapies' },
        { href: '/services/eosinophilic-esophagitis', label: 'Eosinophilic Esophagitis' },
        { href: '/immunotherapy', label: 'Immunotherapy' },
      ],
    },
    {
      label: 'Before You Visit',
      dropdown: [
        { href: '/before-you-visit', label: 'First Visit Guide' },
        { href: '/forms', label: 'Patient Forms' },
        { href: '/insurance', label: 'Insurance Information' },
        { href: '/prescription-medications', label: 'Prescription Medications' },
      ],
    },
    {
      label: 'Patient Education',
      dropdown: [
        { href: '/common-allergens', label: 'Common Allergens' },
        { href: '/common-symptoms', label: 'Common Symptoms' },
        { href: '/for-moms', label: 'For Moms' },
        { href: '/epinephrine-administration', label: 'Epinephrine Administration' },
        { href: '/links-resources', label: 'Links & Resources' },
      ],
    },
    { href: '/allergy-skin-testing', label: 'Allergy Skin Testing' },
    { href: '/meet-our-doctor', label: 'Meet Our Doctor' },
    { href: '/#ethos-section', label: 'Locations' },
    { href: '/immunotherapy', label: 'Immunotherapy' },
    {
      href: 'https://portal.allergyandasthmaclinicalcenters.com/',
      label: 'Patient Portal',
      externalLabel: 'Patient Portal (opens in new tab)',
    },
    {
      href: 'https://portal.allergyandasthmaclinicalcenters.com/',
      label: 'Online Payment',
      emphasized: true,
      externalLabel: 'Online Payment (opens in new tab)',
    },
  ]

  const renderExternalLink = (link, className, isMobile = false) => (
    <a
      href={link.href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.externalLabel || `${link.label} (opens in new tab)`}
      onClick={() => {
        closeAllMenus()
        if (link.href.includes('imscare.com')) {
          gtag_report_conversion(link.href)
        }
      }}
    >
      {link.label}
    </a>
  )

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" onClick={closeAllMenus}>
            <Image
              src="/logo.png"
              alt="Premier Allergy and Asthma Centers"
              width={260}
              height={60}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        <div className={styles.contact}>
          <a href="tel:18555287348" className={styles.phone} aria-label="Call us at 1-855-528-7348">
            (1-855-528-7348)
          </a>
          <span className={styles.cta}>Call and make an appointment</span>
          <a
            href="tel:18555287348"
            className={styles.callNowButton}
            aria-label="Call now to make an appointment at 1-855-528-7348"
            onClick={() => {
              gtag_report_phone_conversion()
            }}
          >
            Call Now
          </a>
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      <nav className={styles.navbar} aria-label="Primary navigation">
        <ul className={styles.navList}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <li
                key={link.label}
                className={styles.navItem}
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={() => handleToggleDropdown(link.label)}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.label}
                  aria-controls={dropdownId(link.label)}
                >
                  {link.label}
                  <span
                    className={`${styles.arrow} ${openDropdown === link.label ? styles.arrowUp : styles.arrowDown}`}
                    aria-hidden="true"
                  />
                </button>
                <ul
                  id={dropdownId(link.label)}
                  className={`${styles.dropdownMenu} ${openDropdown === link.label ? styles.showDropdown : ''}`}
                  role="menu"
                  aria-label={`${link.label} submenu`}
                >
                  {link.dropdown.map((sub) => (
                    <li key={sub.href} role="none">
                      <Link
                        href={sub.href}
                        className={styles.dropdownLink}
                        role="menuitem"
                        onClick={closeAllMenus}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href + link.label} className={styles.navItem}>
                {link.href.startsWith('http') ? (
                  renderExternalLink(
                    link,
                    `${styles.navLink} ${link.emphasized ? styles.emphasizedLink : ''}`
                  )
                ) : (
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${link.emphasized ? styles.emphasizedLink : ''}`}
                    onClick={closeAllMenus}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </nav>

      {menuOpen && (
        <nav
          ref={mobileMenuRef}
          id="mobile-navigation"
          className={styles.mobileMenu}
          aria-label="Mobile navigation"
        >
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className={styles.mobileNavItem}>
                  <button
                    type="button"
                    onClick={() => handleToggleDropdown(link.label)}
                    className={styles.mobileLink}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    aria-controls={`mobile-${dropdownId(link.label)}`}
                  >
                    {link.label}
                    <span
                      className={`${styles.arrow} ${openDropdown === link.label ? styles.arrowUp : styles.arrowDown}`}
                      aria-hidden="true"
                    />
                  </button>
                  {openDropdown === link.label && (
                    <ul
                      id={`mobile-${dropdownId(link.label)}`}
                      className={styles.mobileDropdown}
                      role="menu"
                      aria-label={`${link.label} submenu`}
                    >
                      {link.dropdown.map((sub) => (
                        <li key={sub.href} role="none">
                          <Link
                            href={sub.href}
                            className={styles.mobileSubLink}
                            role="menuitem"
                            onClick={closeAllMenus}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href + link.label} className={styles.mobileNavItem}>
                  {link.href.startsWith('http') ? (
                    renderExternalLink(
                      link,
                      `${styles.mobileLink} ${link.emphasized ? styles.emphasizedMobileLink : ''}`,
                      true
                    )
                  ) : (
                    <Link
                      href={link.href}
                      className={`${styles.mobileLink} ${link.emphasized ? styles.emphasizedMobileLink : ''}`}
                      onClick={closeAllMenus}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
