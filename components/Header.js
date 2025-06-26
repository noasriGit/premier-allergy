'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
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

        {/* Hamburger Icon (mobile only) */}
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
          {navLinks.map(({ href, label }) => (
            <li key={href} className={styles.navItem}>
              <Link href={href} className={styles.navLink}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navLinks.map(({ href, label }) => (
              <li key={href} className={styles.mobileNavItem}>
                <Link
                  href={href}
                  className={styles.mobileLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
