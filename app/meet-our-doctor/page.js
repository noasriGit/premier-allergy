import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Meet Our Team | Premier Allergy & Asthma',
  description: 'Meet our experienced allergy and asthma team in Maryland and Virginia. Learn about our doctor\'s credentials, expertise, and our dedicated support staff.',
  keywords: 'allergist, immunologist, allergy doctor, asthma specialist, Premier Allergy, team',
  openGraph: {
    title: 'Meet Our Team | Premier Allergy & Asthma',
    description: 'Meet our experienced allergy and asthma team in Maryland and Virginia. Learn about our doctor\'s credentials, expertise, and our dedicated support staff.',
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
            <h1 className={styles.heroTitle}>Meet Our Team</h1>
            <p className={styles.heroSubtitle}>
              Meet our Allergy and Asthma Team in Maryland and Virginia
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className={styles.profileSection}>
        <div className={styles.profileContent}>
          <h2>MEET OUR DOCTOR</h2>
          <h3>Meet our Allergy and Asthma doctor in Maryland and Virginia</h3>
          
          <div className={styles.doctorCard}>
            <div className={styles.doctorImage}>
              <Image
                src="/images/petr_bocek.jpg"
                alt="Dr. Petr Bocek - Allergist and Immunologist"
                width={200}
                height={200}
                className={styles.doctorPhoto}
              />
            </div>
            <div className={styles.doctorInfo}>
              <h2 className={styles.doctorName}>Dr. Petr Bocek, MD, PhD, FAAAAI</h2>
              <p className={styles.doctorTitle}>Medical Director & Founder, Board-Certified Allergist & Immunologist</p>
              
              <div className={styles.doctorBio}>
                <p>
                  Petr Bocek, MD, PhD, FAAAAI is the medical director and founder of Premier Allergy and Asthma Centers. 
                  Prior to establishing his own practice, he served as a medical director of a large allergy practice 
                  with multiple offices in Maryland and Northern Virginia.
                </p>
                
                <p>
                  Dr. Bocek obtained his M.D. from Masaryk University Medical School, Czech Republic suma cum laude as 
                  the best in his class. After spending a year in the University Children&apos;s Hospital, Brno, Czech Republic 
                  he won a scholarship in the prestigious Weizmann Institute of Science, Israel where he completed his 
                  formal studies towards Ph.D. in allergy/immunology in 1996.
                </p>
                
                <p>
                  Dr. Bocek then trained in the Department of Medicine, SUNY Stony Brook, NY and continued his 
                  allergy/immunology Fellowship training in the National Institute of Allergy and Infectious Diseases (NIAID), 
                  National Institute of Health, Bethesda, MD, Walter Reed Army Medical Center and Children&apos;s National Hospital 
                  in Washington D.C. After his fellowship, Dr. Bocek oversaw numerous clinical studies on atopic dermatitis, 
                  sublingual immunotherapy, food and environmental allergies as a medical officer in the Division of Allergy, 
                  Immunology and Transplantation of NIAID.
                </p>
                
                <p>
                  Dr. Bocek is board certified by The National Board of Physicians and Surgeons in both internal medicine 
                  and <a href="/immunotherapy">allergy/immunology</a>. He has many years of experience working as an allergist in academic setting in 
                  tertiary referral center (NIAID), as well as more than twenty years in private allergy/immunology practice. 
                  Dr. Bocek has unique skills and training as an allergist with broad experience and deepest knowledge, 
                  exceptional clinical judgment and commitment to the patient care. He is also an author of number of 
                  original research articles in the area of allergy/immunology published in highly recognized peer-reviewed 
                  journals. Dr. Bocek is an elected Fellow of American Academy of <Link href="/services/asthma">Allergy, Asthma</Link> and Immunology. Dr. Bocek 
                  lives in Maryland and spends his free time with his wife Lenka and their children. His main hobby is 
                  woodworking and he is quite an accomplished furniture builder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.teamContent}>
          <h2>MEET OUR TEAM</h2>
          <h3>Meet our Allergy and Asthma Team in Maryland and Virginia</h3>
          
          <div className={styles.teamMemberCard}>
            <div className={styles.teamMemberImage}>
              <Image
                src="/images/placeholder-person.jpg"
                alt="Lenka M. Bocek - Clinic Manager"
                width={200}
                height={200}
                className={styles.teamMemberPhoto}
              />
            </div>
            <div className={styles.teamMemberInfo}>
              <h4>Lenka M. Bocek – Clinic Manager:</h4>
              <p>
                Attended School of Medicine at the Charles University in Prague, Czech Republic with the goal of becoming 
                an anesthesiologist. After starting a family and coming to the United States in 1994 she worked as a 
                translator and interpreter for the Embassy of the Czech Republic in Washington D.C. and several other agencies. 
                She gained an entrepreneurial experience while running her own small business venture in legal services. 
                She also spent several years working for the US Department of State teaching languages to diplomats at the 
                Foreign Service Institute in Arlington VA. In recent years Lenka has been studying and gaining experience 
                in health care management, billing and electronic health records.
              </p>
              <p>
                Lenka and all the support staff at AACC is wholeheartedly committed to provide the best care and treatment 
                education possible to all of our patients. Her goal is to create the most inviting atmosphere and pleasant 
                environment for all of our patients who come and receive treatment at our offices.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Get Started?</h2>
          <p>
            Schedule a consultation with our experienced team to discuss your 
            symptoms and develop a personalized treatment plan.
          </p>
          <div className={styles.ctaButtons}>
            <a 
              href="/contact" 
              className={styles.ctaButton}
            >
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
