import { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.css'

export const metadata = {
  title: 'Immunotherapy | Premier Allergy and Asthma Centers',
  description: 'Learn about allergen immunotherapy (allergy shots) at Premier Allergy and Asthma Centers. Long-term remission and cure for allergic conditions in Maryland and Virginia.',
  keywords: 'immunotherapy, allergy shots, allergen immunotherapy, AIT, allergy treatment, Maryland, Virginia',
  openGraph: {
    title: 'Immunotherapy | Premier Allergy and Asthma Centers',
    description: 'Expert allergen immunotherapy treatment for long-term allergy relief. Board-certified allergists serving Maryland and Virginia.',
    images: ['/images/pediatric.jpg'],
  },
}

export default function ImmunotherapyPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/pediatric.jpg"
            alt="Immunotherapy treatment"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Immunotherapy</h1>
            <p className={styles.heroDescription}>
              Allergen immunotherapy, also known as allergy shots or allergy injections is one of the specific areas of allergic disease and disorders where an intervention guided by a well-trained and experienced allergist can lead to a long-term remission of your allergy symptoms and, in fact, a cure of your condition.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Overview Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🏥</span>
              Allergen Immunotherapy in Maryland and Virginia
            </h2>
          </div>
          
          <div className={styles.sectionContent}>
            <p className={styles.overviewText}>
              Allergen immunotherapy, also known as allergy shots or allergy injections is one of the specific areas of allergic disease and disorders where an intervention guided by a well-trained and experienced allergist can lead to a long-term remission of your allergy symptoms and, in fact, a cure of your condition. We provide allergen immunotherapy in our centers serving Clarksburg, Urbana, Germantown, Gaithersburg, Montgomery Village, Rockville in Montgomery County, MD as well as in Manassas, Manassas Park, Chantilly, Gainesville, Woodbridge and Centerville and surrounding areas of Northern Virginia. In Premier Allergy and Asthma Centers we have the expertise and the tools to not only manage but to cure your allergy symptoms.
            </p>
          </div>
        </section>

        {/* What is Immunotherapy Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💉</span>
              Allergen Immunotherapy
            </h2>
          </div>
          
          <div className={styles.sectionContent}>
            <p className={styles.descriptionText}>
              AIT - (allergy shots or allergy injections) is a series of subcutaneous injections introducing very small increasing doses of allergen(s) you were found to react to, into your system. By introducing the allergens gradually over period of time and by altered route (i.e. subcutaneous injection instead of inhalation or exposure to eyes) your immune system will become &ldquo;re-educated&rdquo;. Namely, instead of inappropriate and excessive reaction, you start to tolerate the allergens which would otherwise trigger your symptoms. Unlike medications for allergies which allow for management of your allergies, allergy shots provide a real treatment of your condition and the symptoms substantially decrease, become minimal or are eliminated.
            </p>
            
            <p className={styles.descriptionText}>
              Allergen immunotherapy is effective and is recommended for patients with allergic asthma, allergic rhinitis/conjunctivitis and stinging insect allergy. Allergy shots may also indirectly improve or eliminate oral allergy (food-pollen) syndrome (patients with seasonal allergies developing itchy/scratchy throat after eating certain raw fruits and vegetables – see our section on food allergies) and may improve atopic eczema. Allergen immunotherapy is not recommended and may be potentially dangerous if used for food allergies.
            </p>
          </div>
        </section>

        {/* Effectiveness Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📈</span>
              Effectiveness
            </h2>
          </div>
          
          <div className={styles.sectionContent}>
            <p className={styles.descriptionText}>
              AIT decreases and ultimately prevents allergic reactions to common allergens including pollens, molds, animal dander and dust mites in sensitive individuals. Lots of patients who undergo allergen immunotherapy will see some improvement by the time they reach maintenance phase (3 - 6 months) with continued decrease in symptoms as they continue the treatment. Most patients have a remarkable reduction of symptoms within the 12 months of therapy. After the proper course of immunotherapy (which lasts 3 – 5 years), the benefits are long-lasting.
            </p>
            
            <p className={styles.descriptionText}>
              We are proud in Premier Allergy and Asthma Centers to provide you with the highest level of expertise regarding indications for allergen immunotherapy, its administration (done conveniently on walk-in basis), and periodic re-evaluation by our Board Certified Allergist. We employ state of the art testing methods which are prerequisite to optimal composition of your individualized allergen extracts utilizing the best and standardized allergen materials available. While your primary care doctor, pediatrician or family practitioner can help you manage your allergy symptoms, our expert team led by our allergy/immunology specialist can provide real treatment and cure.
            </p>
          </div>
        </section>

        {/* Treatment Phases Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>⏱️</span>
              How long are AIT shots given?
            </h2>
          </div>
          
          <div className={styles.sectionContent}>
            <p className={styles.descriptionText}>
              There are generally two phases to immunotherapy: a build-up phase and a maintenance phase:
            </p>
            
            <div className={styles.phaseContainer}>
              <div className={styles.phase}>
                <h3 className={styles.phaseTitle}>Build-up phase</h3>
                <p className={styles.phaseDescription}>
                  involves receiving injections with increasing amounts of your specific allergens 1 to 2 times a week. (More rapid build-up schedule may sometimes be used if appropriate). The duration of this phase depends on the frequency of the injections and how you tolerate the treatment. It generally ranges from 3 to 6 months (at a frequency of twice and once a week, respectively). The faster you go through your build-up phase, the sooner you reach the next level and can expect relief of your allergy symptoms.
                </p>
              </div>
              
              <div className={styles.phase}>
                <h3 className={styles.phaseTitle}>Maintenance phase</h3>
                <p className={styles.phaseDescription}>
                  starts when the effective therapeutic dose is reached. The effective therapeutic dose is based on the current guidelines, research and clinical studies published on immunotherapy. The effective maintenance dose may be individualized for a particular person based on their degree of sensitivity (how &ldquo;allergic they are&rdquo; to the allergens in their extract/vaccine) and their response to the immunotherapy build-up phase. Once the target maintenance dose is reached, the intervals between the allergy injections can be increased to once in 2 to every 4 weeks. However, the intervals need to be individualized to provide the best combination of effectiveness and safety for each person. Shorter intervals between allergy injections may lead to fewer reactions and greater benefit in some people while some individuals may do well receiving injections only once in four weeks. Your AACC Allergist and the staff will guide you through this process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>❓</span>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className={styles.sectionContent}>
            <div className={styles.faqContainer}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does immunotherapy take to work?</h3>
                <p className={styles.faqAnswer}>
                  Most patients begin to see improvement within 3-6 months of starting immunotherapy, with maximum benefits typically achieved after 1-2 years of treatment. Some patients may continue to see improvement for up to 3-5 years.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What is the difference between build-up and maintenance phases?</h3>
                <p className={styles.faqAnswer}>
                  The build-up phase involves receiving injections with increasing amounts of your specific allergens 1-2 times per week for 3-6 months. The maintenance phase begins when the effective therapeutic dose is reached, with injections every 2-4 weeks for the remaining 3-5 years of treatment.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Are there any side effects of immunotherapy?</h3>
                <p className={styles.faqAnswer}>
                  Immunotherapy can cause local reactions at the injection site and, rarely, systemic reactions. These are typically mild and manageable. Your allergist will monitor you closely and adjust treatment as needed.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Can children receive immunotherapy?</h3>
                <p className={styles.faqAnswer}>
                  Yes, children can receive immunotherapy, and it is often very effective. The minimum age varies by treatment type, but many children start treatment around age 5-6.
                </p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Is immunotherapy covered by insurance?</h3>
                <p className={styles.faqAnswer}>
                  Most insurance plans cover immunotherapy for FDA-approved indications. Coverage may vary by plan, and prior authorization is typically required. We can help navigate insurance requirements.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

