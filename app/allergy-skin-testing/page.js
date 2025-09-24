import styles from './page.module.css'

export const metadata = {
  title: 'Allergy Skin Testing | Premier Allergy & Asthma',
  description: 'Important information about allergy skin testing preparation, medications to stop, and what to expect during your appointment at Premier Allergy and Asthma Centers.',
  keywords: 'allergy skin testing, skin test preparation, antihistamines, allergy testing, Premier Allergy',
  openGraph: {
    title: 'Allergy Skin Testing | Premier Allergy & Asthma',
    description: 'Complete guide to allergy skin testing preparation and what to expect during your appointment.',
    type: 'website',
  },
}

export default function AllergySkinTestingPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Allergy Skin Testing</h1>
          <p className={styles.heroSubtitle}>
            Important Information About Allergy Skin Testing
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.content}>
          <h2>Appointment Information</h2>
          <p className={styles.mainText}>
            It is very important to be on time for your allergy skin test appointment. If you arrive late, we may be unable to test you, due to the time constraints. The time set aside for your skin test is exclusively yours for which special allergens are prepared. If for unforeseen reasons you need to change your skin test appointment, you have to give us at least 24 hours advance notice. Due to the length of time scheduled for skin testing, a last minute change results in a loss of valuable time that another patient might have utilized and is a subject to a cancellation fee per our policies.
          </p>
          
          <p className={styles.mainText}>
            Allow at least one hour for your appointment involving allergy skin testing. Dr. Bocek will spend time with you after the test to discuss the results and your best treatment options. Wear comfortable clothing. You will be required to take all clothes off waist up, so do not wear a one piece outfit!
          </p>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className={styles.processSection}>
        <div className={styles.content}>
          <h2>What to Expect During Testing</h2>
          <p className={styles.processText}>
            The test consists of application of various allergens on your skin with a micropoint plastic applicator. The test is not painful, and the applicator does not penetrate the skin (does not cause any bleeding). It may be slightly uncomfortable compared to the sensation of pointy hairbrush applied to your skin. If you react to a given allergen, a red, raised, itchy bump (caused by histamine release into the skin) will appear on your skin within 15 to 20 minutes. These reactions will be measured and carefully recorded. You may experience some local redness and itching for up to 12 hours after testing.
          </p>
        </div>
      </section>

      {/* Medications Section */}
      <section className={styles.medicationsSection}>
        <div className={styles.content}>
          <h2>Important: Stop Antihistamines Before Testing</h2>
          <p className={styles.warningText}>
            It is IMPORTANT TO STOP ANTIHISTAMINES FOR THE SPECIFIED NUMBER OF DAYS. Antihistamines would block the skin test reaction and result in a falsely negative test. Below is a list of the most common antihistamines which must be stopped for indicated period prior to your skin test:
          </p>
          
          <div className={styles.medicationTable}>
            <h3>Oral Antihistamines</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.medicationTableContent}>
                <thead>
                  <tr>
                    <th>Brand Name</th>
                    <th>Generic Name</th>
                    <th>Stop (days)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Alavert/Claritin/Claritin</td><td>Loratadin</td><td>&gt;4</td></tr>
                  <tr><td>Clarinex/Clarinex D</td><td>Desloratidine</td><td>&gt;4</td></tr>
                  <tr><td>Allergra/Allegra D</td><td>Fexofenadine</td><td>&gt;4</td></tr>
                  <tr><td>Zyrtec/Zyrtec D</td><td>Cetirizine</td><td>&gt;4</td></tr>
                  <tr><td>Xyzal</td><td>Levocetirizine</td><td>&gt;4</td></tr>
                  <tr><td>Atarax/Vistaril</td><td>Hydroxyzine</td><td>&gt;4</td></tr>
                  <tr><td>Benadryl</td><td>Diphenhydramine</td><td>&gt;4</td></tr>
                  <tr><td>Periactin</td><td>Cyproheptadine</td><td>&gt;4</td></tr>
                  <tr><td>Phenergan</td><td>Promethazine</td><td>&gt;4</td></tr>
                  <tr><td>Chlortrimeton</td><td>Chlorpheniramine</td><td>&gt;4</td></tr>
                  <tr><td>Aleva/Ebastel</td><td>Ebastine</td><td>&gt;4</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={styles.warningBox}>
            <p><strong>Please DO NOT TAKE ANY OVER THE COUNTER ANTIHISTAMINES, ALLERGY, SLEEP, COUGH AND COLD MEDICINES</strong> such as Drixoral, Tavist, Actifed, Dimetapp, Allerx, Tylenol PM, Nyquil PM, Advil PM, Advil Allergy etc. If you are unsure, ask the pharmacist or call us at <a href="tel:18555287348">1-855-528-7348</a>.</p>
          </div>
        </div>
      </section>

      {/* Nasal Sprays Section */}
      <section className={styles.nasalSpraysSection}>
        <div className={styles.content}>
          <h2>Nasal Sprays (Also Antihistamines)</h2>
          <p className={styles.warningText}>
            PLEASE NOTE THAT CERTAIN NASAL SPRAYS ARE ALSO ANTIHISTAMINES AND NEED TO BE STOPPED.
          </p>
          
          <div className={styles.medicationTable}>
            <div className={styles.tableWrapper}>
              <table className={styles.medicationTableContent}>
                <thead>
                  <tr>
                    <th>Brand Name</th>
                    <th>Generic</th>
                    <th>Stop (days)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Azelastine</td><td>Azelastine</td><td>&gt;4</td></tr>
                  <tr><td>Azelastine/Fluticasone</td><td>Azelastine</td><td>&gt;4</td></tr>
                  <tr><td>Astelin</td><td>Azelastine</td><td>&gt;4</td></tr>
                  <tr><td>Astepro</td><td>Azelastine</td><td>&gt;4</td></tr>
                  <tr><td>Patanase</td><td>Olapatadine</td><td>&gt;4</td></tr>
                  <tr><td>Dymista</td><td>Azelastine</td><td>&gt;4</td></tr>
                  <tr><td>Ryaltris</td><td>Olapatadine</td><td>&gt;4</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Other Medications Section */}
      <section className={styles.otherMedicationsSection}>
        <div className={styles.content}>
          <h2>Other Important Medications</h2>
          
          <div className={styles.medicationCard}>
            <h3>Psychotropic/Antidepressant Drugs</h3>
            <p>
              Certain psychotropic/antidepressant drugs such as amitriptyline (Elavil), doxepin (Sinequan), imipramine (Tofranil) and Trazodone (Desyrel) have antihistaminic activity. Please let us know ahead of your test that you are taking these medications. We may need to discuss with your prescribing physician whether they could be stopped and for how long.
            </p>
          </div>

          <div className={styles.medicationCard}>
            <h3>H2 Blockers (Acid Reflux Medications)</h3>
            <p>
              &ldquo;H2 blockers&rdquo; which are antihistamines used for acid reflux and indigestion should be stopped for at least two days prior to the skin testing: Axid, Pepcid, Zantac, Tagamet, Cimetidine, Famotidine, Nizatidine, Ranitidine etc.
            </p>
          </div>
        </div>
      </section>

      {/* Safe Medications Section */}
      <section className={styles.safeMedicationsSection}>
        <div className={styles.content}>
          <h2>Medications You Can Continue</h2>
          
          <div className={styles.safeCard}>
            <h3>✅ DO NOT STOP YOUR ASTHMA INHALERS</h3>
            <p>They do not affect the skin testing.</p>
          </div>

          <div className={styles.safeCard}>
            <h3>✅ DO NOT STOP Your Intranasal Steroids</h3>
            <p>Examples: Nasonex, Flonase/fluticasone, Flunisolide, Nasacort AQ, Sensimist, Rhinocort, Aqua, Omnaris or Singulair (montelukast). If you are unsure, call us ahead of time.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.content}>
          <h2>Questions About Your Medications?</h2>
          <p>
            If you have any questions about which medications to stop or continue, please don&apos;t hesitate to contact us.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>Call Us</h3>
              <p>Phone: <a href="tel:18555287348">1-855-528-7348</a></p>
              <p>Available during office hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
