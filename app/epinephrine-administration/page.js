import styles from './page.module.css'

export const metadata = {
  title: 'Epinephrine Administration | Premier Allergy & Asthma',
  description: 'Learn about epinephrine administration for allergic emergencies. Critical information about auto-injectors and emergency treatment.',
  keywords: 'epinephrine, adrenaline, anaphylaxis, auto-injector, allergic emergency, emergency treatment, Premier Allergy',
  openGraph: {
    title: 'Epinephrine Administration | Premier Allergy & Asthma',
    description: 'Critical information about epinephrine administration for allergic emergencies.',
    type: 'website',
  },
}

export default function EpinephrineAdministrationPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Epinephrine Administration</h1>
          <p className={styles.heroSubtitle}>
            Critical Information for Allergic Emergencies
          </p>
        </div>
      </section>

      <section className={styles.overviewSection}>
        <div className={styles.content}>
          <h2>What is Epinephrine?</h2>
          <p className={styles.introText}>
            Epinephrine (adrenaline) administration is the first-line treatment for allergic emergencies (anaphylaxis). The severity of the anaphylactic reaction may vary and include symptoms such as hives, flushing, tightness in the throat, breathing problems, lightheadedness, dizziness, decrease in blood pressure, vomiting and in most severe cases, anaphylaxis can be lethal.
          </p>
          
          <div className={styles.warningBox}>
            <h3>⚠️ Emergency Triggers</h3>
            <p>
              Allergic emergencies can be caused by triggers such as food, stinging insects, medications, but sometimes may occur spontaneously or due to exercise.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.importanceSection}>
        <div className={styles.content}>
          <h2>Why Prompt Administration is Critical</h2>
          <p className={styles.introText}>
            The prompt administration of epinephrine via an auto-injector or new epinephrine nasal spray is critical to prevent progression of the anaphylaxis symptoms and helps their resolution.
          </p>
          
          <div className={styles.importanceGrid}>
            <div className={styles.importanceCard}>
              <h3>Immediate Action Required</h3>
              <p>
                You never know when an allergic emergency will occur, so it&apos;s essential for you and your loved ones to be prepared.
              </p>
            </div>
            
            <div className={styles.importanceCard}>
              <h3>Professional Guidance</h3>
              <p>
                Make sure you speak with your health care professional about how to identify the signs and symptoms of an allergic emergency.
              </p>
            </div>
            
            <div className={styles.importanceCard}>
              <h3>Emergency Protocol</h3>
              <p>
                If you, your child or someone you&apos;re caring for shows signs or symptoms of an allergic emergency, administer the health care professional prescribed epinephrine immediately, then promptly call 911 and seek immediate medical attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.devicesSection}>
        <div className={styles.content}>
          <h2>Epinephrine Devices</h2>
          <p className={styles.introText}>
            There are multiple brands and their generic versions of epinephrine autoinjectors and new epinephrine nasal spray (Neffy). They are all available in 2-Pak kits.
          </p>
          
          <div className={styles.deviceInfo}>
            <div className={styles.deviceCard}>
              <h3>Auto-Injectors</h3>
              <p>
                Traditional epinephrine auto-injectors are the most common form of emergency epinephrine administration. They are easy to use and provide a measured dose of epinephrine.
              </p>
            </div>
            
            <div className={styles.deviceCard}>
              <h3>Nasal Spray (Neffy)</h3>
              <p>
                The epinephrine nasal spray is especially convenient for patients scared of needles. This new delivery method provides an alternative to traditional injections.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.importantInfoSection}>
        <div className={styles.content}>
          <h2>Important Information</h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Carry Two Doses</h3>
              <p>
                It is important that patients at risk for allergic emergencies carry two doses of epinephrine because the additional dose may be needed in severe cases.
              </p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Multiple Locations</h3>
              <p>
                Talk to your health care professional if you need additional epinephrine devices to keep at work, school or other locations.
              </p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Regular Check-ups</h3>
              <p>
                Make sure to check expiration dates regularly and replace devices as needed. Always have current, unexpired epinephrine available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.emergencySection}>
        <div className={styles.content}>
          <h2>Emergency Action Plan</h2>
          <div className={styles.emergencySteps}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Recognize Symptoms</h3>
                <p>Look for signs of anaphylaxis: hives, swelling, difficulty breathing, dizziness, or loss of consciousness.</p>
              </div>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Administer Epinephrine</h3>
                <p>Use the auto-injector or nasal spray immediately as prescribed by your healthcare provider.</p>
              </div>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Call 911</h3>
                <p>Call emergency services immediately after administering epinephrine.</p>
              </div>
            </div>
            
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h3>Seek Medical Attention</h3>
                <p>Go to the nearest emergency room even if symptoms improve, as a second reaction may occur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.content}>
          <h2>Questions About Epinephrine?</h2>
          <p className={styles.introText}>
            If you have questions about epinephrine administration or need to discuss your emergency action plan, please don&apos;t hesitate to contact us.
          </p>
          
          <div className={styles.contactInfo}>
            <a href="tel:18555287348" className={styles.callButton}>
              Call 1-855-528-7348
            </a>
            <p className={styles.contactNote}>
              Our team is here to help you prepare for allergic emergencies and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

