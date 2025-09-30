import styles from './page.module.css'

export const metadata = {
  title: 'Links & Resources | Premier Allergy & Asthma',
  description: 'Professional associations, nonprofit organizations, and reliable resources for allergy and asthma information.',
  keywords: 'allergy resources, asthma resources, professional associations, nonprofit organizations, allergy information, Premier Allergy',
  openGraph: {
    title: 'Links & Resources | Premier Allergy & Asthma',
    description: 'Comprehensive list of professional associations and resources for allergy and asthma information.',
    type: 'website',
  },
}

export default function LinksResourcesPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Links & Resources</h1>
          <p className={styles.heroSubtitle}>
            Professional Associations and Reliable Resources
          </p>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.content}>
          <h2>Reliable Resources</h2>
          <p className={styles.introText}>
            Below are links to reliable resources on the topics discussed briefly above. If you have specific questions, please bring the materials with you to your appointment. We will be happy to discuss the topic with you and answer your questions.
          </p>
        </div>
      </section>

      <section className={styles.associationsSection}>
        <div className={styles.content}>
          <h2>Professional Associations and Nonprofit Organizations</h2>
          
          <div className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <h3>American Academy of Asthma, Allergy and Immunology</h3>
              <p>Leading professional organization for allergists and immunologists</p>
              <a href="https://www.aaaai.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit AAAAI →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>American College of Asthma, Allergy and Immunology</h3>
              <p>Professional organization dedicated to the advancement of allergy and immunology</p>
              <a href="https://www.acaai.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit ACAAI →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>American Academy of Pediatrics</h3>
              <p>Professional organization for pediatricians and child health</p>
              <a href="https://www.aap.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit AAP →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>American Lung Association</h3>
              <p>Organization dedicated to lung health and preventing lung disease</p>
              <a href="https://www.lung.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit ALA →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Asthma and Allergy Foundation of America</h3>
              <p>Leading nonprofit organization for asthma and allergy education and advocacy</p>
              <a href="https://www.aafa.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit AAFA →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>National Institute of Allergy and Infectious Diseases</h3>
              <p>NIH institute conducting research on allergies and infectious diseases</p>
              <a href="https://www.niaid.nih.gov" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit NIAID →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>National Heart, Lung and Blood Institute (NIH)</h3>
              <p>NIH institute focused on heart, lung, and blood diseases</p>
              <a href="https://www.nhlbi.nih.gov" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit NHLBI →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Asthma Guidelines (2007 Expert Panel Report, NHLBI)</h3>
              <p>Comprehensive asthma management guidelines</p>
              <div className={styles.linkGroup}>
                <a href=" https://ginasthma.org/2024-report/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  Full Report →
                </a>
                <a href=" https://ginasthma.org/2025-gina-summary-guide/" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                  Summary →
                </a>
              </div>
            </div>

            <div className={styles.resourceCard}>
              <h3>Allergy and Asthma Network Mothers of Asthmatics (AANMA)</h3>
              <p>Support network for families dealing with asthma and allergies</p>
              <a href="https://www.allergyasthmanetwork.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit AANMA →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Allergy and Asthma Foundation of America</h3>
              <p>Nonprofit organization providing education and support for allergy and asthma patients</p>
              <a href="https://www.aafa.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit AAFA →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>National Eczema Association</h3>
              <p>Organization dedicated to eczema education and support</p>
              <a href="https://www.nationaleczema.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit NEA →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>American Partnership for Eosinophilic Disorders</h3>
              <p>Organization supporting patients with eosinophilic disorders</p>
              <a href="https://www.apfed.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit APFED →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Food Allergy and Anaphylaxis Network</h3>
              <p>Organization focused on food allergy education and advocacy</p>
              <a href="https://www.foodallergy.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit FAAN →
              </a>
            </div>

            <div className={styles.resourceCard}>
              <h3>Immune Deficiency Foundation</h3>
              <p>Organization supporting patients with primary immunodeficiency diseases</p>
              <a href="https://www.primaryimmune.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit IDF →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.comprehensiveInfoSection}>
        <div className={styles.content}>
          <h2>Comprehensive Information Resources</h2>
          <p className={styles.introText}>
            For comprehensive information on allergies, asthma and disorders of the immune system, diagnosis and treatment:
          </p>
          
          <div className={styles.comprehensiveLinks}>
            <div className={styles.comprehensiveCard}>
              <h3>Allergy Library</h3>
              <p>Comprehensive library of allergy and immunology information</p>
              <a href="https://www.aaaai.org/conditions-and-treatments/library/allergy-library.aspx" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit Allergy Library →
              </a>
            </div>

            <div className={styles.comprehensiveCard}>
              <h3>ACAAI Patient Resources</h3>
              <p>Patient-focused information from the American College of Allergy, Asthma & Immunology</p>
              <a href="https://www.acaai.org" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                Visit ACAAI →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.content}>
          <h2>Questions About These Resources?</h2>
          <p className={styles.introText}>
            If you have questions about any of these resources or need help understanding the information, please don&apos;t hesitate to contact us.
          </p>
          
          <div className={styles.contactInfo}>
            <a href="tel:18555287348" className={styles.callButton}>
              Call 1-855-528-7348
            </a>
            <p className={styles.contactNote}>
              Our team is here to help you understand these resources and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

