'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const handleToggleServices = () => setServicesOpen((prev) => !prev)

  const navLinks = [
    { href: '/about', label: 'About' },
    {
      label: 'Services',
      dropdown: [
        { href: '/services/asthma', label: 'Asthma Management' },
        { href: '/services/allergy-testing', label: 'Allergy Testing' },
        { href: '/services/immunotherapy', label: 'Immunotherapy' },
      ],
    },
    { href: '/locations', label: 'Locations' },
    { href: '/forms', label: 'Forms' },
    { href: '/insurance', label: 'Insurance' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
    { href: '/portal', label: 'Patient Portal' },
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">
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
          <a href="tel:1234567890" className={styles.phone}>
            (123) 456-7890
          </a>
          <span className={styles.cta}>Call and make an appointment</span>
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
                  onClick={handleToggleServices}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <span
                    className={`${styles.arrow} ${servicesOpen ? styles.arrowUp : styles.arrowDown}`}
                  />
                </button>
                <ul className={`${styles.dropdownMenu} ${servicesOpen ? styles.showDropdown : ''}`}>
                  {link.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <Link href={sub.href} className={styles.dropdownLink}>
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
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
                    onClick={handleToggleServices}
                    className={styles.mobileLink}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <span
                      className={`${styles.arrow} ${servicesOpen ? styles.arrowUp : styles.arrowDown}`}
                    />
                  </button>
                  {servicesOpen && (
                    <ul className={styles.mobileDropdown}>
                      {link.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link href={sub.href} className={styles.mobileSubLink}>
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href} className={styles.mobileNavItem}>
                  <Link href={link.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      )}
    </header>
  )
}
