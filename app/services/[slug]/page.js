import { servicesData } from './data'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import ServiceNavbar from './ServiceNavbar'
import ServiceHero from './ServiceHero'
import ServiceSection from './ServiceSection'
import ServiceFAQ from './ServiceFAQ'
import ServicePageClient from './ServicePageClient'

export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const service = servicesData[params.slug]
  return {
    title: `${service.title} | Premier Allergy and Asthma Centers`,
    description: `Learn about ${service.title.toLowerCase()} including symptoms, diagnosis, treatment, and prevention. Expert care from board-certified allergists.`,
    keywords: `${service.title}, allergy treatment, asthma management, allergist, ${params.slug}`,
    openGraph: {
      title: `${service.title} | Premier Allergy and Asthma Centers`,
      description: `Expert ${service.title.toLowerCase()} treatment and management. Board-certified allergists serving Maryland and Virginia.`,
      images: [service.heroImage],
    },
  }
}

export default function ServicePage({ params }) {
  const service = servicesData[params.slug]

  if (!service) {
    return (
      <div className={styles.errorContainer}>
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>
        <Link href="/services" className={styles.backLink}>
          ← Back to Services
        </Link>
      </div>
    )
  }

  // Define available sections for this service
  const availableSections = [
    { id: 'info', title: 'Overview', icon: '📋' },
    ...(service.symptoms ? [{ id: 'symptoms', title: 'Symptoms', icon: '⚠️' }] : []),
    ...(service.diagnosis ? [{ id: 'diagnosis', title: 'Diagnosis', icon: '🔍' }] : []),
    ...(service.treatment ? [{ id: 'treatment', title: 'Treatment', icon: '💊' }] : []),
    ...(service.prevention ? [{ id: 'prevention', title: 'Prevention', icon: '🛡️' }] : []),
    ...(service.faq ? [{ id: 'faq', title: 'FAQ', icon: '❓' }] : []),
  ]

  return (
    <ServicePageClient 
      service={service}
      availableSections={availableSections}
    />
  )
}
