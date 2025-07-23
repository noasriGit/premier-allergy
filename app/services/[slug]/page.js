import { services } from './data'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export async function generateStaticParams() {
  return services.map(service => ({ slug: service.slug }))
}

export async function generateMetadata({ params }) {
  const service = services.find(s => s.slug === params.slug)
  return {
    title: `${service.title} | Premier Allergy and Asthma Centers`,
    description: `Learn about ${service.title.toLowerCase()} including symptoms, diagnosis, treatment, and prevention.`,
  }
}

export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) return <div>Service not found</div>

  return (
    <div className={styles.container}>
      {/* Sticky Navbar */}
      <nav className={styles.navbar}>
        {['info', 'symptoms', 'diagnosis', 'treatment', 'prevention', 'faq'].map(id => (
          <a key={id} href={`#${id}`} className={styles.navLink}>
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <Image src={service.heroImage} alt={service.title} fill priority className={styles.heroImage} />
        <h1 className={styles.heroTitle}>{service.title}</h1>
      </section>

      {/* Info Section */}
      <section id="info" className={styles.splitSection}>
        <div className={styles.text}>
          <h2>{service.info.heading}</h2>
          <p>{service.info.text}</p>
        </div>
        <Image src={service.info.image} alt="Info" width={400} height={300} className={styles.image} />
      </section>

      {/* Repeatable Sections */}
      {['symptoms', 'diagnosis', 'treatment', 'prevention', 'faq'].map(key => (
        <section key={key} id={key} className={styles.section}>
          <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
          <ul>
            {service[key].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
