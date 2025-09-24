import styles from './page.module.css'
import Link from 'next/link'

export const metadata = {
  title: 'Common Allergens | Premier Allergy & Asthma',
  description: 'Learn about the most common allergens and get tips on how to avoid them. Comprehensive guide to pollen, pet dander, dust mites, and more.',
  keywords: 'common allergens, pollen allergies, pet dander, dust mites, food allergies, allergy prevention, Premier Allergy',
  openGraph: {
    title: 'Common Allergens | Premier Allergy & Asthma',
    description: 'Comprehensive guide to common allergens and prevention tips.',
    type: 'website',
  },
}

export default function CommonAllergensPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Common Allergens</h1>
          <p className={styles.heroSubtitle}>
            Most common Allergens and Tips on How to Avoid them
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          <h2>Environmental Allergens</h2>
          
          <div className={styles.allergenCard}>
            <h3>Pollen</h3>
            <p>
              Prevent pollen allergy symptoms by staying indoors on windy days or when pollen counts are high; closing windows; using air conditioning and a dehumidifier; refraining from hanging clothes out to dry during the pollen season; by removing shoes worn outdoors; changing clothes as soon as possible after being outside for long periods and showering after spending time outdoors to remove built up pollen from skin and hair.
            </p>
          </div>

          <div className={styles.allergenCard}>
            <h3>Animal Dander</h3>
            <p>
              Help prevent allergies to pet dander by removing the pet from the home, or at least the bedroom. Keep pets off upholstered furniture and wash the pet weekly.
            </p>
          </div>

          <div className={styles.allergenCard}>
            <h3>Dust Mites</h3>
            <p>
              Help prevent dust mite allergies by putting dust mite covers over mattresses, pillows, and box springs, using hypoallergenic pillows, washing sheets weekly in hot water, and keeping all areas of the house, especially the bedroom, free of dust collecting items including stuffed animals, curtains, and carpet. The humidity should be kept between 30% and 45%.
            </p>
          </div>

          <div className={styles.allergenCard}>
            <h3>Insect Stings</h3>
            <p>
              Minimize exposure to insects by not wearing brightly colored clothes and scented cosmetics and by keeping insecticide available, wearing shoes outdoors, and avoiding outdoor garbage. If you do get stung, remove the stinger. If you are at risk of anaphylaxis, get an epinephrine injection immediately.
            </p>
          </div>

          <div className={styles.allergenCard}>
            <h3>Molds</h3>
            <p>
              Help prevent mold allergies by avoiding activities that trigger symptoms, such as raking leaves or mulching. Keep windows and doors closed, and make sure moist places in the home, such as the basement and bathrooms, are well ventilated. Look for areas of water damage and repair those spots. Keep indoor plants to a minimum since their soil harbors and promotes mold growth.
            </p>
          </div>

          <div className={styles.allergenCard}>
            <h3>Latex</h3>
            <p>
              To prevent a latex reaction, sensitive individuals should avoid products containing latex.
            </p>
          </div>

          <div className={styles.allergenCard}>
            <h3>Medication</h3>
            <p>
              The best treatment of drug allergies is to avoid the offending drug altogether; however, when exposed, treatment with antihistamines or steroids is recommended.
            </p>
          </div>

          <div className={styles.allergenCard}>
            <h3>Cockroaches</h3>
            <p>
              Cockroach allergy prevention includes keeping trash in closed containers and taking it out regularly. If you suspect that your home may be infested, pest control treatment by a pest control professional may be helpful.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.foodAllergensSection}>
        <div className={styles.content}>
          <h2>Most Common <Link href="/services/food-allergies">Food Allergy Triggers</Link></h2>
          <div className={styles.foodGrid}>
            <div className={styles.foodItem}>Peanuts</div>
            <div className={styles.foodItem}>Milk and dairy foods</div>
            <div className={styles.foodItem}>Eggs</div>
            <div className={styles.foodItem}>Shellfish</div>
            <div className={styles.foodItem}>Tree Nuts</div>
            <div className={styles.foodItem}>Finned Fish</div>
            <div className={styles.foodItem}>Soy</div>
            <div className={styles.foodItem}>Wheat</div>
          </div>
        </div>
      </section>
    </div>
  )
}

