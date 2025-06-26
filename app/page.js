// app/page.js

export const metadata = {
  title: 'Premier Allergy and Asthma Centers | Maryland Allergy Specialists',
  description:
    'Compassionate, personalized allergy and asthma care for adults and children in Maryland. Book an appointment today.',
  openGraph: {
    title: 'Premier Allergy and Asthma Centers | Maryland Allergy Specialists',
    description:
      'Compassionate, personalized allergy and asthma care for adults and children in Maryland. Book an appointment today.',
    url: 'https://www.allergyandasthmaclinicalcenters.com/',
    siteName: 'Premier Allergy and Asthma Centers',
    images: [
      {
        url: '/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Premier Allergy and Asthma Center',
      },
    ],
  },
}

import HeroSection from '@/components/HeroSection/HeroSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import InfoSection from '@/components/InfoSection/InfoSection'
import PatientResourcesSection from '@/components/PatientResourcesSection/PatientResourcesSection'
import MissionSection from '@/components/MissionSection/MissionSection'
import EthosSection from '@/components/EthosSection/EthosSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <InfoSection />
      <PatientResourcesSection />
      <MissionSection />
      <EthosSection />
    </>
  )
}
