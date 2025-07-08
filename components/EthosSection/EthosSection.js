'use client'

import { useEffect, useState } from 'react'
import styles from './EthosSection.module.css'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function EthosSection() {
  const [germantownReviews, setGermantownReviews] = useState(null)
  const [manassasReviews, setManassasReviews] = useState(null)
  const achievementsRef = useRef(null)
  const isInView = useInView(achievementsRef, { once: true, margin: '0px 0px -100px 0px' })

  useEffect(() => {
    const fetchReviews = async () => {
      const placeIds = {
        germantown: 'ChIJk_JrOhUstokRsZ_yFXoEOfk',
        manassas: 'ChIJ034G_AJdtokRKExjpkLlKC0'
      }

      const fetchPlace = async (placeId) => {
        const res = await fetch(`/api/google-reviews?placeId=${placeId}`)
        const data = await res.json()
        return data
      }

      try {
        const germantown = await fetchPlace(placeIds.germantown)
        const manassas = await fetchPlace(placeIds.manassas)
        setGermantownReviews(germantown)
        setManassasReviews(manassas)
      } catch (err) {
        console.error('Error fetching Google Reviews:', err)
      }
    }

    fetchReviews()
  }, [])

  const achievementImages = [
    { src: '/achievements/award1.jpg', alt: '2017 Top Doctor Award' },
    { src: '/achievements/award2.jpg', alt: '2016 Top Doctor Award' },
    { src: '/achievements/award3.jpg', alt: 'NBPAS Sticker' },
    { src: '/achievements/award4.jpg', alt: 'Top Doctor Award' },
    { src: '/achievements/award5.jpg', alt: 'Washingtonian Top Doctor 2016 Award' },
    { src: '/achievements/award6.jpg', alt: '2016 Top Doctors' },
    { src: '/achievements/award7.jpg', alt: 'Washingtonian 2015 Top Doctor Award' }
  ]

  return (
    <section className={styles.section} aria-labelledby="ethos-title">
      <h2 id="ethos-title" className={styles.heading}>
        Trusted Allergy & Asthma Care with a Proven Track Record
      </h2>

      {/* Achievements */}
      <div className={styles.achievements} ref={achievementsRef}>
        {achievementImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ scale: 1 }}
            animate={isInView ? { scale: [1, 1.2, 1] } : {}}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
              ease: 'easeInOut'
            }}
          >
            <Image src={img.src} alt={img.alt} width={125} height={125} priority />
          </motion.div>
        ))}
      </div>

      {/* Paragraph */}
      <p className={styles.paragraph}>
        At Premier Allergy and Asthma Centers, we are dedicated to providing exceptional care with compassion and expertise. Our board-certified team offers cutting-edge treatments in a supportive environment, serving both pediatric and adult patients across Maryland and Virginia.
      </p>

      <h2 className={styles.locationHeader}>Our Locations</h2>

      {/* Location Cards */}
      <div className={styles.locationCards}>
        <div className={styles.card}>
          <Image
            src="/germantown.png"
            alt="Germantown Clinic Exterior"
            width={600}
            height={250}
            className={styles.cardImage}
            priority
          />
          <h3>Germantown, MD</h3>
          <p>20528 Boland Farm Rd, Suite 214<br />Germantown, MD 20876</p>
          {germantownReviews && (
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJk_JrOhUstokRsZ_yFXoEOfk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleRatingLink}
              aria-label={`Germantown Google rating: ${germantownReviews.rating} stars from ${germantownReviews.user_ratings_total} reviews`}
            >
              ⭐ {germantownReviews.rating} ({germantownReviews.user_ratings_total} reviews)
            </a>
          )}
        </div>

        <div className={styles.card}>
          <Image
            src="/manassas.png"
            alt="Manassas Clinic Building"
            width={600}
            height={250}
            className={styles.cardImage}
            priority
          />
          <h3>Manassas, VA</h3>
          <p>8100 Ashton Avenue, Suite 207B<br />Manassas, VA 20109</p>
          {manassasReviews && (
            <a
              href="https://www.google.com/maps/place/?q=place_id:ChIJ034G_AJdtokRKExjpkLlKC0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleRatingLink}
              aria-label={`Manassas Google rating: ${manassasReviews.rating} stars from ${manassasReviews.user_ratings_total} reviews`}
            >
              ⭐ {manassasReviews.rating} ({manassasReviews.user_ratings_total} reviews)
            </a>
          )}
        </div>
      </div>

      {/* Reviews */}
      <div className={styles.reviews}>
        <h3>What Our Patients Say</h3>
        <p>"Truly the best allergist I've ever been to. Dr. Bocek is incredibly thorough and kind."</p>
        <p>"Amazing staff and spotless facilities. I finally have relief from my asthma!"</p>
      </div>

      {/* CTA */}
      {/* <CTAComponent /> */}
    </section>
  )
}
