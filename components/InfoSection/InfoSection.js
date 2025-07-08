

import styles from './InfoSection.module.css'

export default function InfoSection() {
  return (
    <section className={styles.section} aria-labelledby="info-heading">
      <div className={styles.cards}>
        <article className={styles.cardTitle}>
      <h2 id="info-heading" className={styles.heading}>
      Board-Certified Allergy & Asthma Specialists Serving Maryland & Virginia Families
      </h2>
      </article>

      
        <article className={styles.card}>
          <p>
            Welcome to our centers of excellence for diagnosis and treatment of pediatric and adult asthma and allergic and immunologic disorders. At Premier Allergy and Asthma Centers we provide our patients with the newest advances in medicine and medical research to better diagnose, treat and manage your disorders and to improve your quality of life. Our physician Dr. Petr Bocek, MD PhD FAAAAI together with our friendly, dedicated staff is here to help and educate you and your children. At Premier Allergy and Asthma Centers we truly care and treat you like family. We take the time to give you all the information you need to better understand your condition and to feel comfortable with the treatment plan we recommend for you or your child based on the specific and individual health care needs. Come to experience the quality of care you have been looking for.
          </p>
        </article>

        <article className={styles.card}>
          <p>
            At our allergy and asthma clinics we provide allergy and asthma testing, diagnosis and treatment for adult and pediatric patients living in Germantown, Gaithersburg, Montgomery Village, Rockville, Clarksburg and surrounding areas of Montgomery County, Maryland as well as Manassas, Manassas Park, Gainsville, Centerville, Haymarket, Bristow and surrounding areas of Prince William, Loudoun and Fairfax Counties, Virginia.
          </p>
        </article>
      </div>
    </section>
  )
}
