import styles from './page.module.css'

export const metadata = {
  title: 'Common Allergy Symptoms | Premier Allergy & Asthma',
  description: 'Learn about common allergy symptoms including respiratory, skin, and food allergy reactions. Understand when to seek medical attention.',
  keywords: 'allergy symptoms, allergic reactions, anaphylaxis, respiratory allergies, skin allergies, food allergies, Premier Allergy',
  openGraph: {
    title: 'Common Allergy Symptoms | Premier Allergy & Asthma',
    description: 'Comprehensive guide to recognizing and understanding allergy symptoms.',
    type: 'website',
  },
}

export default function CommonSymptomsPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Common Allergy Symptoms</h1>
          <p className={styles.heroSubtitle}>
            Understanding Allergy Symptoms and When to Seek Help
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          <h2>Most Common Symptoms of Inhaled Allergens</h2>
          <p className={styles.introText}>
            Most common symptoms of an allergic reaction to inhaled allergens include:
          </p>
          
          <div className={styles.symptomsGrid}>
            <div className={styles.symptomCard}>
              <h3>Eye Symptoms</h3>
              <ul>
                <li>Itchy, red, watery eyes</li>
              </ul>
            </div>
            
            <div className={styles.symptomCard}>
              <h3>Nasal Symptoms</h3>
              <ul>
                <li>Itchy nose, sneezing</li>
                <li>Nasal congestion, runny nose</li>
                <li>Postnasal drainage, throat clearing, cough</li>
              </ul>
            </div>
            
            <div className={styles.symptomCard}>
              <h3>General Symptoms</h3>
              <ul>
                <li>Feeling tired or ill</li>
                <li>Wheezing and shortness of breath in more severe cases</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.otherReactionsSection}>
        <div className={styles.content}>
          <h2>Other Types of Allergic Reactions</h2>
          
          <div className={styles.reactionCard}>
            <h3>Food Allergen Reactions</h3>
            <p>
              An allergic reaction to food allergens can cause itching of the mouth, lips, swelling of the lips or tongue, &ldquo;scratchy throat&rdquo;, hives, generalized itching or flushing, stomach cramps, vomiting or diarrhea.
            </p>
          </div>

          <div className={styles.reactionCard}>
            <h3>Contact Allergen Reactions</h3>
            <p>
              Contact allergens may cause rashes with dry, itchy skin with redness or even blistering in the exposed area.
            </p>
          </div>

          <div className={styles.reactionCard}>
            <h3>Insect Sting Reactions</h3>
            <p>
              An allergic reaction to a sting from a bee or other insect can cause a local reaction with swelling, redness, and/or pain while systemic reaction may involve hives, itching, dizziness, wheezing and shortness of breath.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.severitySection}>
        <div className={styles.content}>
          <h2>Symptom Severity Levels</h2>
          
          <div className={styles.severityGrid}>
            <div className={styles.severityCard}>
              <h3>Mild Symptoms</h3>
              <p>
                Mild allergy symptoms may be minimal, just making you feel a little unwell, having poor sleep or mild upper respiratory symptoms.
              </p>
            </div>
            
            <div className={styles.severityCard}>
              <h3>Moderate Symptoms</h3>
              <p>
                Moderate symptoms can make you feel ill, as if you&apos;ve got a cold or even the flu.
              </p>
            </div>
            
            <div className={styles.severityCard}>
              <h3>Severe Symptoms</h3>
              <p>
                Severe allergic reactions are extremely uncomfortable, even incapacitating.
              </p>
            </div>
          </div>
          
          <p className={styles.note}>
            Most symptoms of an allergic reaction go away shortly after the exposure stops.
          </p>
        </div>
      </section>

      <section className={styles.anaphylaxisSection}>
        <div className={styles.content}>
          <h2>Anaphylaxis - The Most Severe Allergic Reaction</h2>
          <p className={styles.warningText}>
            The most severe allergic reaction is called anaphylaxis. In anaphylaxis, allergens cause a whole-body allergic reaction that can include:
          </p>
          
          <div className={styles.anaphylaxisSymptoms}>
            <div className={styles.symptomItem}>Hives, itching or flushing all over (not just in the exposed area)</div>
            <div className={styles.symptomItem}>Wheezing and/or shortness of breath</div>
            <div className={styles.symptomItem}>Hoarseness or tightness in the throat</div>
            <div className={styles.symptomItem}>Tingling in the hands, feet, lips, or scalp</div>
            <div className={styles.symptomItem}>Lightheadedness or dizziness</div>
            <div className={styles.symptomItem}>Feeling of &ldquo;impending doom&rdquo;</div>
          </div>
          
          <div className={styles.emergencyWarning}>
            <h3>⚠️ Emergency Warning</h3>
            <p>
              Anaphylaxis may be life-threatening and requires immediate medical attention. Symptoms can progress rapidly, so head for the emergency room if there&apos;s any suspicion of anaphylaxis.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

