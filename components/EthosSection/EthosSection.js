'use client'

import { useEffect, useState } from 'react'
import styles from './EthosSection.module.css'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Star Rating Component
const StarRating = ({ rating, reviewCount, isLoading, error, className }) => {
  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className={styles.starFull} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
    
    // Half star
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className={styles.starHalf} viewBox="0 0 24 24" fill="currentColor">
          <defs>
            <linearGradient id="halfStar">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="#e0e0e0"/>
            </linearGradient>
          </defs>
          <path fill="url(#halfStar)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
    
    // Empty stars
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className={styles.starEmpty} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
    
    return stars
  }

  if (isLoading) {
    return (
      <div className={`${styles.ratingContainer} ${className}`}>
        <div className={styles.starsContainer}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={styles.starSkeleton} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <span className={styles.loadingText}>Loading...</span>
      </div>
    )
  }

  if (error || !rating) {
    return (
      <div className={`${styles.ratingContainer} ${className}`}>
        <div className={styles.starsContainer}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={styles.starEmpty} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <span className={styles.errorText}>Rating unavailable</span>
      </div>
    )
  }

  return (
    <div className={`${styles.ratingContainer} ${className}`}>
      <div className={styles.starsContainer}>
        {renderStars(rating)}
      </div>
      <div className={styles.ratingText}>
        <span className={styles.ratingValue}>{rating}</span>
        <span className={styles.reviewCount}>({reviewCount} reviews)</span>
      </div>
    </div>
  )
}

// Move locations array outside component to prevent infinite re-renders
const locations = [
  {
    id: 'germantown',
    name: 'Germantown, MD',
    address: '20528 Boland Farm Rd, Suite 214',
    city: 'Germantown, MD 20876',
    phone: '(1-855-528-7348)',
    hours: 'Tuesday: <strong>12:00 pm to 6:00 pm</strong> | Thursday: <strong>10:00 am to 6:00 pm</strong>',
    immunotherapyHours: 'Tuesday: <strong>12:00 pm to 5:45 pm</strong> | Thursday: <strong>10:00 am to 5:45 pm</strong>',
    description: 'Our Germantown office is conveniently located in the Germantown Medical Center on Boland Farm Road. From Rt. 118 Germantown Road take Observation Drive towards Boland Farm Road where you make a left. The Medical Center will be on your right. ',
    image: '/germantown2.png',
    alt: 'Germantown Clinic Exterior',
    placeId: 'ChIJk_JrOhUstokRsZ_yFXoEOfk',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJk_JrOhUstokRsZ_yFXoEOfk',
    directionsUrl: 'https://maps.google.com/?q=20528+Boland+Farm+Rd+Suite+214+Germantown+MD+20876'
  },
  {
    id: 'manassas',
    name: 'Manassas, VA',
    address: '8100 Ashton Avenue, Suite 207B',
    city: 'Manassas, VA 20109',
    phone: '(1-855-528-7348)',
    hours: 'Monday: <strong>12:00 pm to 6:00 pm</strong> | Friday: <strong>10:00 am to 6:00 pm</strong>',
    immunotherapyHours: 'Monday: <strong>12:00 pm to 5:45 pm</strong> | Friday: <strong>10:00 am to 5:45 pm</strong>',
    description: 'Our Manassas office is conveniently located in a new medical office building right off Rt. 234 Sudley Rd. on the intersection of Sudley Manor Dr. and Ashton Ave., about 1.5 miles south of I-66 EXIT 47A. Plenty of free surface parking.',
    image: '/manassas.png',
    alt: 'Manassas Clinic Building',
    placeId: 'ChIJ034G_AJdtokRKExjpkLlKC0',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJ034G_AJdtokRKExjpkLlKC0',
    directionsUrl: 'https://maps.google.com/?q=8100+Ashton+Avenue+Suite+207B+Manassas+VA+20109'
  }
]

export default function EthosSection() {
  const [germantownReviews, setGermantownReviews] = useState(null)
  const [manassasReviews, setManassasReviews] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const achievementsRef = useRef(null)
  const isInView = useInView(achievementsRef, { once: true, margin: '0px 0px -100px 0px' })

  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true)
      setError(null)

      const fetchPlace = async (placeId, retries = 2) => {
        for (let attempt = 0; attempt <= retries; attempt++) {
          try {
            const res = await fetch(`/api/google-reviews?placeId=${placeId}`)
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`)
            }
            const data = await res.json()
            
            // Validate the response data
            if (data.error) {
              throw new Error(data.error)
            }
            
            // Check if we have valid rating data
            if (data.rating && data.user_ratings_total) {
              return data
            } else {
              console.warn(`No rating data available for ${placeId}`)
              return null
            }
          } catch (err) {
            console.error(`Error fetching reviews for ${placeId} (attempt ${attempt + 1}):`, err)
            if (attempt === retries) {
              return null
            }
            // Wait before retrying (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)))
          }
        }
        return null
      }

      try {
        const [germantown, manassas] = await Promise.all([
          fetchPlace(locations[0].placeId),
          fetchPlace(locations[1].placeId)
        ])
        
        setGermantownReviews(germantown)
        setManassasReviews(manassas)
        
        // Set error if both locations failed
        if (!germantown && !manassas) {
          setError('Unable to load reviews at this time')
        }
      } catch (err) {
        console.error('Error fetching Google Reviews:', err)
        setError('Unable to load reviews at this time')
      } finally {
        setIsLoading(false)
      }
    }

    fetchReviews()
  }, []) // Empty dependency array since locations is now stable

  const achievementImages = [
    { src: '/achievements/award1.jpg', alt: '2017 Top Doctor Award' },
    { src: '/achievements/award2.jpg', alt: '2016 Top Doctor Award' },
    { src: '/achievements/award3.jpg', alt: 'NBPAS Sticker' },
    { src: '/achievements/award4.jpg', alt: 'Top Doctor Award' },
    { src: '/achievements/award5.jpg', alt: 'Washingtonian Top Doctor 2016 Award' },
    { src: '/achievements/award6.jpg', alt: '2016 Top Doctors' },
    { src: '/achievements/award7.jpg', alt: 'Washingtonian 2015 Top Doctor Award' }
  ]

  const getReviewsForLocation = (locationId) => {
    if (locationId === 'germantown') return germantownReviews
    if (locationId === 'manassas') return manassasReviews
    return null
  }

  return (
    <section id="ethos-section" className={styles.section} aria-labelledby="ethos-title">
      <div className={styles.container}>
        <h2 id="ethos-title" className={styles.heading}>
          Trusted Allergy &amp; Asthma Care with a Proven Track Record
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
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={125} 
                height={125} 
                priority 
                className={styles.achievementImage}
              />
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
          {locations.map((location) => {
            const reviews = getReviewsForLocation(location.id)
            
            return (
              <motion.article 
                key={location.id}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={styles.cardImageContainer}>
                  <Image
                    src={location.image}
                    alt={location.alt}
                    width={600}
                    height={250}
                    className={styles.cardImage}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={styles.cardOverlay}>
                    <span className={styles.locationBadge}>{location.name}</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.locationName}>{location.name}</h3>
                  
                  <address className={styles.address}>
                    <p className={styles.streetAddress}>{location.address}</p>
                    <p className={styles.cityState}>{location.city}</p>
                  </address>

                  {/* Location Description */}
                  {location.description && (
                    <div className={styles.locationDescription}>
                      <p>{location.description}</p>
                    </div>
                  )}

                  <div className={styles.contactInfo}>
                    <a 
                      href={`tel:${location.phone.replace(/\D/g, '')}`}
                      className={styles.phoneLink}
                      aria-label={`Call ${location.name} at ${location.phone}`}
                    >
                      <span aria-hidden="true">📞</span>
                      {location.phone}
                    </a>
                    
                    <p className={styles.hours}>
                      <strong>Clinic hours:</strong><br />
                      <span dangerouslySetInnerHTML={{ __html: location.hours }} />
                    </p>
                    
                    {location.immunotherapyHours && (
                      <p className={styles.immunotherapyHours}>
                        <strong>Immunotherapy walk-in hours (allergy shots):</strong><br />
                        <span dangerouslySetInnerHTML={{ __html: location.immunotherapyHours }} />
                      </p>
                    )}
                  </div>

                  {/* Google Rating */}
                  <div className={styles.ratingSection}>
                    <a
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.googleRatingLink}
                      aria-label={`View ${location.name} on Google Maps`}
                    >
                      <StarRating
                        rating={reviews?.rating}
                        reviewCount={reviews?.user_ratings_total}
                        isLoading={isLoading}
                        error={error}
                        className={styles.starRating}
                      />
                    </a>
                  </div>

                  {/* Action Buttons */}
                  <div className={styles.cardActions}>
                    <a
                      href={location.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.actionButton}
                      aria-label={`Get directions to ${location.name}`}
                    >
                      <span aria-hidden="true">📍</span>
                      Get Directions
                    </a>
                    
                    <a
                      href="https://portal.allergyandasthmaclinicalcenters.com/abs"
                      className={`${styles.actionButton} ${styles.primaryButton}`}
                      aria-label={`Schedule appointment at ${location.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => gtag_report_conversion('https://portal.allergyandasthmaclinicalcenters.com/abs')}
                    >
                      <span aria-hidden="true">📅</span>
                      Schedule Visit
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Reviews */}
        <div className={styles.reviews}>
          <h3 className={styles.reviewsTitle}>What Our Patients Say</h3>
          <div className={styles.testimonials}>
            <blockquote className={styles.testimonial}>
              <p>&quot;First of all, the reception area was comfortable and relaxing. Office staff was friendly and answered numerous questions. Dr. Bocek was very thorough and I felt he really care about finding out what was causing my condition. I never felt rushed to end appointment. Would definitely recommend this practice.&quot;</p>
              <cite>- Debra Jenkins</cite>
            </blockquote>
            <blockquote className={styles.testimonial}>
              <p>&quot;Dr. Bocek is the most knowledgeable doctor for treating pediatric asthma and allergies my daughter has seen since being diagnosed. He took his time, while creating and explaining a new treatment plan to tackle her needs. I&apos;m grateful we found him when we did!&quot;</p>
              <cite>- Carla Smith</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}