import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Meet Our Doctor | Premier Allergy & Asthma',
  description: 'Meet our experienced allergist and immunologist. Learn about our doctor\'s credentials, expertise, and commitment to providing exceptional allergy and asthma care.',
  keywords: 'allergist, immunologist, allergy doctor, asthma specialist, Premier Allergy',
  openGraph: {
    title: 'Meet Our Doctor | Premier Allergy & Asthma',
    description: 'Meet our experienced allergist and immunologist. Learn about our doctor\'s credentials, expertise, and commitment to providing exceptional allergy and asthma care.',
    type: 'website',
  },
}

export default function MeetOurDoctorPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Meet Our Doctor</h1>
            <p className={styles.heroSubtitle}>
              Dedicated to providing exceptional allergy and asthma care with compassion and expertise
            </p>
          </div>
                     <div className={styles.heroImage}>
             <Image
               src="/images/petr_bocek.jpg"
               alt="Dr. Petr Bocek - Allergist and Immunologist"
               width={300}
               height={400}
               priority
               className={styles.doctorImage}
             />
           </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className={styles.profileSection}>
        <div className={styles.profileContent}>
                     <div className={styles.profileInfo}>
             <h2 className={styles.doctorName}>Dr. Petr Bocek, MD, PhD, FAAAAI</h2>
             <p className={styles.doctorTitle}>Medical Director & Founder, Board-Certified Allergist & Immunologist</p>
             
             <div className={styles.credentials}>
               <h3>Education & Training</h3>
               <ul>
                 <li>Medical School: Masaryk University Medical School, Czech Republic (Summa Cum Laude)</li>
                 <li>PhD: Weizmann Institute of Science, Israel (Allergy/Immunology)</li>
                 <li>Residency: Department of Medicine, SUNY Stony Brook, NY</li>
                 <li>Fellowship: National Institute of Allergy and Infectious Diseases (NIAID), NIH</li>
                 <li>Additional Training: Walter Reed Army Medical Center & Children&apos;s National Hospital</li>
                 <li>Board Certification: American Board of Internal Medicine & Allergy/Immunology</li>
               </ul>
             </div>

                         <div className={styles.specialties}>
               <h3>Professional Experience & Expertise</h3>
               <ul>
                 <li>Medical Director of large allergy practice (Maryland & Northern Virginia)</li>
                 <li>Clinical Research: Atopic dermatitis, sublingual immunotherapy</li>
                 <li>Food & Environmental Allergies</li>
                 <li>Academic setting experience at NIAID (tertiary referral center)</li>
                 <li>10+ years in private allergy/immunology practice</li>
                 <li>Author of original research articles in peer-reviewed journals</li>
                 <li>Fellow of American Academy of Allergy, Asthma & Immunology</li>
                 <li>Comprehensive allergy & immunology care</li>
               </ul>
             </div>
          </div>

                     
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContent}>
          <h2>Our Philosophy</h2>
          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>🎯</div>
              <h3>Patient-Centered Care</h3>
              <p>
                We believe in treating each patient as an individual with unique needs. 
                Our approach focuses on understanding your specific symptoms, triggers, 
                and lifestyle to develop personalized treatment plans.
              </p>
            </div>
            
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>🔬</div>
              <h3>Evidence-Based Medicine</h3>
              <p>
                All treatments and recommendations are based on the latest medical 
                research and clinical guidelines. We stay current with advances in 
                allergy and immunology to provide the best possible care.
              </p>
            </div>
            
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>🤝</div>
              <h3>Compassionate Approach</h3>
              <p>
                We understand that dealing with allergies and asthma can be challenging. 
                Our team provides compassionate, understanding care while helping you 
                achieve better health and quality of life.
              </p>
            </div>
            
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>📚</div>
              <h3>Education & Empowerment</h3>
              <p>
                We believe in empowering patients through education. Understanding your 
                condition and treatment options helps you make informed decisions about 
                your health and manage your symptoms effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experienceSection}>
        <div className={styles.experienceContent}>
          <h2>Experience & Achievements</h2>
                     <div className={styles.experienceGrid}>
             <div className={styles.experienceItem}>
               <h3>Years of Experience</h3>
               <p className={styles.experienceNumber}>25+</p>
               <p>Years in allergy and immunology</p>
             </div>
             
             <div className={styles.experienceItem}>
               <h3>Academic Excellence</h3>
               <p className={styles.experienceNumber}>Summa Cum Laude</p>
               <p>Top of his medical school class</p>
             </div>
             
             <div className={styles.experienceItem}>
               <h3>Research Leadership</h3>
               <p className={styles.experienceNumber}>NIAID</p>
               <p>Medical officer at National Institutes of Health</p>
             </div>
             
             <div className={styles.experienceItem}>
               <h3>Professional Recognition</h3>
               <p className={styles.experienceNumber}>FAAAAI</p>
               <p>Fellow of American Academy of Allergy, Asthma & Immunology</p>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContent}>
          <h2>What Our Patients Say</h2>
          <div className={styles.testimonialsGrid}>
                         <div className={styles.testimonialCard}>
               <div className={styles.testimonialStars}>★★★★★</div>
               <p className={styles.testimonialText}>
                 &ldquo;Dr. Bocek is incredibly knowledgeable and caring. He took the time 
                 to understand my complex allergy history and developed a treatment plan 
                 that has significantly improved my quality of life.&rdquo;
               </p>
               <p className={styles.testimonialAuthor}>- Sarah M.</p>
             </div>
             
             <div className={styles.testimonialCard}>
               <div className={styles.testimonialStars}>★★★★★</div>
               <p className={styles.testimonialText}>
                 &ldquo;After struggling with asthma for years, Dr. Bocek helped me get it 
                 under control. His expertise and patience made all the difference in 
                 my treatment journey.&rdquo;
               </p>
               <p className={styles.testimonialAuthor}>- Michael R.</p>
             </div>
             
             <div className={styles.testimonialCard}>
               <div className={styles.testimonialStars}>★★★★★</div>
               <p className={styles.testimonialText}>
                 &ldquo;The immunotherapy treatment plan Dr. Bocek created for my seasonal 
                 allergies has been life-changing. I can finally enjoy outdoor activities 
                 without constant symptoms.&rdquo;
               </p>
               <p className={styles.testimonialAuthor}>- Jennifer L.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Get Started?</h2>
          <p>
            Schedule a consultation with our experienced allergist to discuss your 
            symptoms and develop a personalized treatment plan.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.ctaButton}>
              Schedule Appointment
            </a>
            <Link href="/services" className={styles.ctaButtonSecondary}>
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
