// app/layout.js
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ 
  subsets: ['latin'], 
  display: 'swap', 
  weight: ['400', '500', '600', '700'],
  variable: '--font-eb-garamond'
})

export const metadata = {
  title: {
    default: 'Premier Allergy and Asthma Centers | Expert Care in Maryland & Virginia',
    template: '%s | Premier Allergy and Asthma Centers'
  },
  description: 'Expert allergy and asthma care from board-certified specialists in Maryland and Virginia. Comprehensive testing, treatment, and immunotherapy services for all ages.',
  keywords: [
    'allergy testing',
    'asthma management',
    'immunotherapy',
    'allergist',
    'Maryland',
    'Virginia',
    'allergy treatment',
    'asthma care',
    'skin testing',
    'allergy shots',
    'Dr. Petr Bocek',
    'board certified allergist',
    'Germantown',
    'Manassas',
    'allergy clinic',
    'asthma specialist'
  ],
  authors: [{ name: 'Premier Allergy and Asthma Centers' }],
  creator: 'Premier Allergy and Asthma Centers',
  publisher: 'Premier Allergy and Asthma Centers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.allergyandasthmaclinicalcenters.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.allergyandasthmaclinicalcenters.com',
    siteName: 'Premier Allergy and Asthma Centers',
    title: 'Premier Allergy and Asthma Centers | Expert Care in Maryland & Virginia',
    description: 'Expert allergy and asthma care from board-certified specialists in Maryland and Virginia. Comprehensive testing, treatment, and immunotherapy services for all ages.',
    images: [
      {
        url: '/logo.png',
        width: 260,
        height: 60,
        alt: 'Premier Allergy and Asthma Centers Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Allergy and Asthma Centers | Expert Care in Maryland & Virginia',
    description: 'Expert allergy and asthma care from board-certified specialists in Maryland and Virginia.',
    images: ['/logo.png'],
    creator: '@premierallergy',
    site: '@premierallergy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

// Structured data for the organization
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalOrganization',
  name: 'Premier Allergy and Asthma Centers',
  description: 'Expert allergy and asthma care from board-certified specialists in Maryland and Virginia',
  url: 'https://www.allergyandasthmaclinicalcenters.com',
  logo: 'https://www.allergyandasthmaclinicalcenters.com/logo.png',
  image: 'https://www.allergyandasthmaclinicalcenters.com/logo.png',
  telephone: '+1-855-528-7348',
  email: 'info@allergyandasthmaclinicalcenters.com',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: '8100 Ashton Avenue, Suite 207B',
      addressLocality: 'Manassas',
      addressRegion: 'VA',
      postalCode: '20109',
      addressCountry: 'US',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '20528 Boland Farm Rd, Suite 214',
      addressLocality: 'Germantown',
      addressRegion: 'MD',
      postalCode: '20876',
      addressCountry: 'US',
    }
  ],
  sameAs: [
    'https://facebook.com/allergyandasthmaclinicalcenters',
    'https://twitter.com/premierallergy',
    'https://linkedin.com/company/premier-allergy-asthma-centers'
  ],
  medicalSpecialty: ['Allergy and Immunology', 'Asthma Management'],
  availableService: [
    {
      '@type': 'MedicalService',
      name: 'Allergy Testing',
      description: 'Comprehensive allergy testing including skin tests and blood tests'
    },
    {
      '@type': 'MedicalService', 
      name: 'Asthma Management',
      description: 'Expert asthma care and treatment plans'
    },
    {
      '@type': 'MedicalService',
      name: 'Immunotherapy',
      description: 'Long-term allergy treatment through immunotherapy'
    },
    {
      '@type': 'MedicalService',
      name: 'Nasal Allergies',
      description: 'Treatment for allergic rhinitis and seasonal allergies'
    },
    {
      '@type': 'MedicalService',
      name: 'Food Allergies',
      description: 'Diagnosis and management of food allergies'
    }
  ],
  areaServed: [
    {
      '@type': 'State',
      name: 'Maryland'
    },
    {
      '@type': 'State', 
      name: 'Virginia'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Allergy and Asthma Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalService',
          name: 'Allergy Testing'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalService',
          name: 'Asthma Management'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalService',
          name: 'Immunotherapy'
        }
      }
    ]
  },
  openingHours: [
    'Mo-Fr 08:00-17:00',
    'Sa 09:00-12:00'
  ],
  paymentAccepted: [
    'Cash',
    'Credit Card',
    'Insurance'
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ebGaramond.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#095ea3" />
        <meta name="msapplication-TileColor" content="#095ea3" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Premier Allergy" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header />
        <main id="main-content" tabIndex="-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
