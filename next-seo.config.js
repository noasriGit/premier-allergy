// next-seo.config.js
const config = {
    title: 'Premier Allergy and Asthma Centers | Expert Care in Maryland & Virginia',
    description: 'Expert allergy and asthma care from board-certified specialists in Maryland and Virginia. Comprehensive testing, treatment, and immunotherapy services for all ages.',
    canonical: 'https://www.allergyandasthmaclinicalcenters.com/',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.allergyandasthmaclinicalcenters.com',
      site_name: 'Premier Allergy and Asthma Centers',
      title: 'Premier Allergy and Asthma Centers | Expert Care in Maryland & Virginia',
      description: 'Expert allergy and asthma care from board-certified specialists in Maryland and Virginia. Comprehensive testing, treatment, and immunotherapy services for all ages.',
      images: [
        {
          url: 'https://www.allergyandasthmaclinicalcenters.com/logo.png',
          width: 260,
          height: 60,
          alt: 'Premier Allergy and Asthma Centers Logo',
        },
      ],
    },
    twitter: {
      handle: '@premierallergy',
      site: '@premierallergy',
      cardType: 'summary_large_image',
    },
    additionalMetaTags: [
      {
        name: 'keywords',
        content: 'allergy testing, asthma management, immunotherapy, allergist, Maryland, Virginia, allergy treatment, asthma care, skin testing, allergy shots, Dr. Petr Bocek, board certified allergist'
      },
      {
        name: 'author',
        content: 'Premier Allergy and Asthma Centers'
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
      },
      {
        name: 'geo.region',
        content: 'US-MD, US-VA'
      },
      {
        name: 'geo.placename',
        content: 'Germantown, Manassas'
      },
      {
        name: 'geo.position',
        content: '39.1732;-77.2716'
      },
      {
        name: 'ICBM',
        content: '39.1732, -77.2716'
      }
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
    ],
  }
  
  export default config
  