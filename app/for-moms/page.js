import styles from './page.module.css'

export const metadata = {
  title: 'For Moms | Premier Allergy & Asthma',
  description: 'Resources and support for mothers of children with allergies. Find helpful forums, food products, and allergy-friendly resources.',
  keywords: 'allergy moms, children with allergies, allergy resources, food allergies, allergy support, Premier Allergy',
  openGraph: {
    title: 'For Moms | Premier Allergy & Asthma',
    description: 'Support and resources for mothers of children with allergies.',
    type: 'website',
  },
}

export default function ForMomsPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>For Moms</h1>
          <p className={styles.heroSubtitle}>
            Resources and Support for Mothers of Children with Allergies
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.content}>
          <h2>Support Forums</h2>
          <p className={styles.introText}>
            Connect with other mothers who understand the challenges of managing children&apos;s allergies.
          </p>
          
          <div className={styles.resourceCard}>
            <h3>Allergy Moms Community</h3>
            <p>
              Join a supportive community of mothers dealing with children&apos;s allergies. Share experiences, get advice, and find emotional support.
            </p>
            <a href="https://www.allergymoms.com" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
              Visit www.allergymoms.com →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.foodProductsSection}>
        <div className={styles.content}>
          <h2>Allergy-Friendly Food Products</h2>
          <p className={styles.introText}>
            Discover safe and delicious food options for children (and adults) with food allergies.
          </p>
          
          <div className={styles.productsGrid}>
            <div className={styles.productCard}>
              <h3>Cherrybrook Kitchen</h3>
              <p>Specialty baking mixes and ingredients for allergy-friendly cooking</p>
              <a href="https://www.cherrybrookkitchen.com" target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                Visit Cherrybrook Kitchen →
              </a>
            </div>

            <div className={styles.productCard}>
              <h3>Enjoy Life Foods</h3>
              <p>Free-from snacks, cookies, and baking ingredients</p>
              <a href="https://www.enjoylifefoods.com" target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                Visit Enjoy Life Foods →
              </a>
            </div>

            <div className={styles.productCard}>
              <h3>Ener-G Foods</h3>
              <p>Gluten-free and allergy-friendly food products</p>
              <a href="https://www.ener-g.com" target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                Visit Ener-G Foods →
              </a>
            </div>

            <div className={styles.productCard}>
              <h3>Ian&apos;s Natural Foods</h3>
              <p>Allergy-friendly frozen meals and snacks for kids</p>
              <a href="https://www.iansnaturalfoods.com" target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                Visit Ian&apos;s Natural Foods →
              </a>
            </div>

            <div className={styles.productCard}>
              <h3>Tinkyada Pasta</h3>
              <p>Rice pasta products for gluten-free and allergy-friendly meals</p>
              <a href="https://www.tinkyada.com" target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                Visit Tinkyada →
              </a>
            </div>

            <div className={styles.productCard}>
              <h3>No Nuttin&apos;</h3>
              <p>Nut-free snacks and treats for school and home</p>
              <a href="https://www.nonuttin.com" target="_blank" rel="noopener noreferrer" className={styles.productLink}>
                Visit No Nuttin&apos; →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.otherProductsSection}>
        <div className={styles.content}>
          <h2>Other Useful Allergy Products</h2>
          <p className={styles.introText}>
            Additional products to help manage allergies and keep your family safe.
          </p>
          
          <div className={styles.resourceCard}>
            <h3>One Spot Allergy</h3>
            <p>
              Comprehensive allergy management products including cleaning supplies, air purifiers, and allergy-friendly household items.
            </p>
            <a href="https://www.onespotallergy.com" target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
              Visit One Spot Allergy →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.content}>
          <h2>We&apos;re Here to Help</h2>
          <p className={styles.introText}>
            Managing your child&apos;s allergies can be overwhelming. Our team of allergy specialists is here to provide expert care and support for your family.
          </p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactCard}>
              <h3>Schedule an Appointment</h3>
              <p>Get expert allergy care for your child</p>
              <a href="tel:18555287348" className={styles.callButton}>
                Call 1-855-528-7348
              </a>
            </div>
            
            <div className={styles.contactCard}>
              <h3>Patient Portal</h3>
              <p>Access your child&apos;s medical records and communicate with our team</p>
              <a href="https://portal.allergyandasthmaclinicalcenters.com/" target="_blank" rel="noopener noreferrer" className={styles.portalButton}>
                Access Patient Portal →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

