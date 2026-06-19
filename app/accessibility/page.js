import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Accessibility Statement',
  description:
    'Premier Allergy and Asthma Centers accessibility statement. Learn about our commitment to website accessibility and how to report barriers.',
  openGraph: {
    title: 'Accessibility Statement | Premier Allergy and Asthma Centers',
    description:
      'Our commitment to making our website accessible and usable for as many people as possible.',
    type: 'website',
  },
}

export default function AccessibilityPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Accessibility Statement</h1>
          <p className={styles.heroSubtitle}>
            Our commitment to an accessible experience for all visitors
          </p>
        </div>
      </section>

      <article className={styles.content}>
        <section aria-labelledby="commitment-heading">
          <h2 id="commitment-heading">Our Commitment</h2>
          <p>
            Premier Allergy and Asthma Centers is committed to making our website accessible and
            usable for as many people as possible. We aim to follow generally recognized
            accessibility standards, including WCAG 2.1 AA and WCAG 2.2 AA where practical.
          </p>
          <p>
            We continue to review and improve our website to reduce barriers and improve usability
            for people with disabilities, including those who use assistive technologies.
          </p>
        </section>

        <section aria-labelledby="measures-heading">
          <h2 id="measures-heading">Measures We Take</h2>
          <ul>
            <li>Using semantic HTML and clear page structure</li>
            <li>Providing keyboard access to navigation, links, buttons, and forms</li>
            <li>Adding descriptive text for images and interactive controls where needed</li>
            <li>Working to maintain sufficient color contrast for text and focus indicators</li>
            <li>Supporting reduced-motion preferences where animations are used</li>
          </ul>
        </section>

        <section aria-labelledby="limitations-heading">
          <h2 id="limitations-heading">Known Limitations</h2>
          <p>
            Some third-party services linked from or embedded on our website — including our
            patient portal, online payment system, and analytics tools — may not fully meet the
            same accessibility standards as our main site. We encourage users to contact us if they
            need assistance accessing these services.
          </p>
          <p>
            Accessibility is an ongoing effort. Some areas of the site may still need manual review
            or further improvement.
          </p>
        </section>

        <section aria-labelledby="feedback-heading">
          <h2 id="feedback-heading">Feedback and Assistance</h2>
          <p>
            If you experience difficulty accessing any part of this website, please contact us so
            we can assist you and work to address the issue.
          </p>
          <ul className={styles.contactList}>
            <li>
              Email:{' '}
              <a href="mailto:info@allergyandasthmaclinicalcenters.com">
                info@allergyandasthmaclinicalcenters.com
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href="tel:18555287348" aria-label="Call us at 1-855-528-7348">
                (1-855-528-7348)
              </a>
            </li>
            <li>
              Contact page: <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="assessment-heading">
          <h2 id="assessment-heading">Assessment Approach</h2>
          <p>
            We evaluate our website using a combination of automated accessibility checks, manual
            keyboard testing, and periodic review of page structure, forms, and interactive
            components. This statement was last reviewed in June 2026.
          </p>
        </section>
      </article>
    </div>
  )
}
