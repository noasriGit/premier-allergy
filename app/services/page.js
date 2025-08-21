// app/services/page.js
import styles from './ServicesPage.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ServicesGrid from './ServicesGrid';

export const metadata = {
  title: 'Our Services | Premier Allergy and Asthma Centers',
  description: 'Explore expert allergy and asthma services in Maryland. From testing to treatment, we provide personalized care for all ages.',
};

const services = [
  {
    slug: 'asthma',
    title: 'Asthma Management',
    image: '/services/asthma.jpg',
    description: 'Comprehensive asthma diagnosis, monitoring, and treatment for adults and children with personalized care plans.',
    category: 'Respiratory'
  },
  {
    slug: 'nasal-allergies',
    title: 'Nasal Allergies',
    image: '/services/nasal-allergies.jpg',
    description: 'Expert treatment for allergic rhinitis, seasonal and perennial allergies with advanced diagnostic testing.',
    category: 'Allergies'
  },
  {
    slug: 'ocular-allergies',
    title: 'Ocular Allergies',
    image: '/services/ocular-allergies.jpg',
    description: 'Specialized care for allergic conjunctivitis and eye-related allergy symptoms affecting vision and comfort.',
    category: 'Allergies'
  },
  {
    slug: 'sinus-disease',
    title: 'Sinus Disease',
    image: '/services/sinus-disease.jpg',
    description: 'Comprehensive treatment for acute and chronic sinusitis, fungal sinusitis, and structural abnormalities.',
    category: 'Respiratory'
  },
  {
    slug: 'eczema-skin-allergies',
    title: 'Eczema & Skin Allergies',
    image: '/services/eczema-skin-allergies.jpg',
    description: 'Relief for eczema, hives, and other allergic skin disorders through personalized treatment approaches.',
    category: 'Dermatological'
  },
  {
    slug: 'contact-implant-allergies',
    title: 'Contact & Implant Allergies',
    image: '/services/contact-implant-allergies.jpg',
    description: 'Specialized testing and treatment for allergies to medical devices, implants, and contact materials.',
    category: 'Specialized'
  },
  {
    slug: 'hives-angioedema',
    title: 'Hives & Angioedema',
    image: '/services/hives-angioedema.jpg',
    description: 'Expert care for acute and chronic urticaria, angioedema, and related inflammatory skin conditions.',
    category: 'Dermatological'
  },
  {
    slug: 'food-allergies',
    title: 'Food Allergies',
    image: '/services/food-allergies.jpg',
    description: 'Comprehensive food allergy testing, diagnosis, and management including emergency preparedness.',
    category: 'Allergies'
  },
  {
    slug: 'drug-medication-allergies',
    title: 'Drug & Medication Allergies',
    image: '/services/drug-medication-allergies.jpg',
    description: 'Specialized testing and management for medication allergies with safe alternative recommendations.',
    category: 'Specialized'
  },
  {
    slug: 'novel-biologic-therapies',
    title: 'Novel Biologic Therapies',
    image: '/services/novel-biologic-therapies.jpg',
    description: 'Cutting-edge biologic treatments for severe allergic and inflammatory conditions resistant to conventional therapy.',
    category: 'Advanced'
  },
  {
    slug: 'eosinophilic-esophagitis',
    title: 'Eosinophilic Esophagitis',
    image: '/services/eosinophilic-esophagitis.jpg',
    description: 'Specialized care for EoE with dietary management, medication therapy, and endoscopic monitoring.',
    category: 'Gastrointestinal'
  },
  {
    slug: 'immune-disorders-diagnostics',
    title: 'Immune Disorders Diagnostics',
    image: '/services/immune-disorders-diagnostics.jpg',
    description: 'Comprehensive evaluation and treatment for primary and secondary immune system disorders.',
    category: 'Specialized'
  },
  {
    slug: 'immunotherapy',
    title: 'Immunotherapy',
    image: '/services/immunotherapy.jpg',
    description: 'Allergy shots and sublingual immunotherapy designed to treat root causes, not just symptoms.',
    category: 'Treatment'
  }
];

const categories = {
  'Allergies': { color: '#095ea3', bgColor: '#e3f2fd' },
  'Respiratory': { color: '#2e7d32', bgColor: '#e8f5e8' },
  'Dermatological': { color: '#f57c00', bgColor: '#fff3e0' },
  'Specialized': { color: '#7b1fa2', bgColor: '#f3e5f5' },
  'Advanced': { color: '#c62828', bgColor: '#ffebee' },
  'Gastrointestinal': { color: '#1565c0', bgColor: '#e3f2fd' },
  'Treatment': { color: '#388e3c', bgColor: '#e8f5e8' }
};

export default function ServicesPage() {
  return (
    <>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Our Services
        </h1>
        <p className={styles.subtitle}>
          Comprehensive care for allergies, asthma, and related conditions. 
          Our board-certified allergists provide personalized treatment plans 
          using the latest diagnostic and therapeutic approaches.
        </p>
      </div>

      <ServicesGrid services={services} categories={categories} />

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Contact us today to schedule a consultation and take the first step 
            toward better allergy and asthma management.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaButton}>
              Schedule Consultation
            </Link>
            <Link href="/locations" className={styles.ctaButtonSecondary}>
              Find a Location
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
