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
    image: '/images/asthma.jpg',
    description: 'Comprehensive asthma diagnosis, monitoring, and treatment for adults and children with personalized care plans.',
    category: 'Respiratory'
  },
  {
    slug: 'nasal-allergies',
    title: 'Nasal Allergies',
    image: '/images/sneezing.jpg',
    description: 'Expert treatment for allergic rhinitis, seasonal and perennial allergies with advanced diagnostic testing.',
    category: 'Allergies'
  },
  {
    slug: 'ocular-allergies',
    title: 'Ocular Allergies',
    image: '/images/eyedrops.jpg',
    description: 'Specialized care for allergic conjunctivitis and eye-related allergy symptoms affecting vision and comfort.',
    category: 'Allergies'
  },
  {
    slug: 'sinus-disease',
    title: 'Sinus Disease',
    image: '/images/sinus.jpg',
    description: 'Comprehensive treatment for acute and chronic sinusitis, fungal sinusitis, and structural abnormalities.',
    category: 'Respiratory'
  },
  {
    slug: 'eczema-skin-allergies',
    title: 'Eczema & Skin Allergies',
    image: '/images/itching.jpg',
    description: 'Relief for eczema, hives, and other allergic skin disorders through personalized treatment approaches.',
    category: 'Dermatological'
  },
  {
    slug: 'contact-implant-allergies',
    title: 'Contact & Implant Allergies',
    image: '/images/implant-allergies.jpg',
    description: 'Specialized testing and treatment for allergies to medical devices, implants, and contact materials.',
    category: 'Specialized'
  },
  {
    slug: 'hives-angioedema',
    title: 'Hives & Angioedema',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    description: 'Expert care for acute and chronic urticaria, angioedema, and related inflammatory skin conditions.',
    category: 'Dermatological'
  },
  {
    slug: 'food-allergies',
    title: 'Food Allergies',
    image: '/images/foodAllergy.jpg',
    description: 'Comprehensive food allergy testing, diagnosis, and management including emergency preparedness.',
    category: 'Allergies'
  },
  {
    slug: 'drug-medication-allergies',
    title: 'Drug & Medication Allergies',
    image: '/images/medicine.jpg',
    description: 'Specialized testing and management for medication allergies with safe alternative recommendations.',
    category: 'Specialized'
  },
  {
    slug: 'novel-biologic-therapies',
    title: 'Novel Biologic Therapies',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop',
    description: 'Cutting-edge biologic treatments for severe allergic and inflammatory conditions resistant to conventional therapy.',
    category: 'Advanced'
  },
  {
    slug: 'eosinophilic-esophagitis',
    title: 'Eosinophilic Esophagitis',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    description: 'Specialized care for EoE with dietary management, medication therapy, and endoscopic monitoring.',
    category: 'Gastrointestinal'
  },
  {
    slug: 'immunotherapy',
    title: 'Immunotherapy',
    image: '/images/pediatric.jpg',
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
            <Link 
              href="/contact" 
              className={styles.ctaButton}
            >
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
