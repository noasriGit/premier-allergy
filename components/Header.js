'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleToggleDropdown = (dropdownLabel) => {
    setOpenDropdown(openDropdown === dropdownLabel ? null : dropdownLabel)
  }

  const closeAllMenus = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

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
        { href: '/services/immune-disorders-diagnostics', label: 'Immune Disorders Diagnostics' },
        { href: '/services/immunotherapy', label: 'Immunotherapy' },
      ],
    },
    {
      label: 'Before You Visit',
      dropdown: [
        { href: '/before-you-visit', label: 'First Visit Guide' },
        { href: '/forms', label: 'Patient Forms' },
        { href: '/insurance', label: 'Insurance Information' },

      ],
    },
    { href: '/meet-our-doctor', label: 'Meet Our Doctor' },
    { href: '/#ethos-section', label: 'Locations' },
    { href: '/services/immunotherapy', label: 'Immunotherapy' },
    { href: 'https://allergyandasthmaclinicalcenters.imscare.com/abs/login', label: 'Patient Portal' },
    { href: 'https://portal.allergyandasthmaclinicalcenters.com/general/index.php', label: 'Online Payment', emphasized: true },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" onClick={closeAllMenus}>
            <Image
              src="/logo.png"
              alt="Premier Allergy and Asthma logo"
              width={260}
              height={60}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        {/* Contact Info */}
        <div className={styles.contact}>
          <a href="tel: 1-855-528-7348" className={styles.phone}>
            (1-855-528-7348)
          </a>
          <span className={styles.cta}>Call and make an appointment</span>
          <a href="tel: 1-855-528-7348" className={styles.callNowButton}>
            Call Now
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Desktop Nav */}
      <nav className={styles.navbar} aria-label="Primary navigation">
        <ul className={styles.navList}>
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className={styles.navItem}>
                <button
                  className={styles.navLink}
                  onClick={() => handleToggleDropdown(link.label)}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <span
                    className={`${styles.arrow} ${openDropdown === link.label ? styles.arrowUp : styles.arrowDown}`}
                  />
                </button>
                <ul className={`${styles.dropdownMenu} ${openDropdown === link.label ? styles.showDropdown : ''}`}>
                  {link.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <Link 
                        href={sub.href} 
                        className={styles.dropdownLink}
                        onClick={closeAllMenus}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href} className={styles.navItem}>
                {link.href.startsWith('http') ? (
                  <a 
                    href={link.href} 
                    className={`${styles.navLink} ${link.emphasized ? styles.emphasizedLink : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      closeAllMenus();
                      if (link.href.includes('imscare.com')) {
                        gtag_report_conversion(link.href);
                      }
                    }}
                  >
                    {link.label}
                  </a>
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

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.label} className={styles.mobileNavItem}>
                  <button
                    onClick={() => handleToggleDropdown(link.label)}
                    className={styles.mobileLink}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    <span
                      className={`${styles.arrow} ${openDropdown === link.label ? styles.arrowUp : styles.arrowDown}`}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <ul className={styles.mobileDropdown}>
                      {link.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link 
                            href={sub.href} 
                            className={styles.mobileSubLink}
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
                <li key={link.href} className={styles.mobileNavItem}>
                  {link.href.startsWith('http') ? (
                    <a 
                      href={link.href} 
                      className={`${styles.mobileLink} ${link.emphasized ? styles.emphasizedMobileLink : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        closeAllMenus();
                        if (link.href.includes('imscare.com')) {
                          gtag_report_conversion(link.href);
                        }
                      }}
                    >
                      {link.label}
                    </a>
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
