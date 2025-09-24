/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // Homepage variations
      
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },

      // Services (map old structure -> new structure)
      {
        source: '/nasal_allergies_clinic_MD_VA.html',
        destination: '/services/nasal-allergies',
        permanent: true,
      },
      {
        source: '/ocular_allergies.html',
        destination: '/services/ocular-allergies',
        permanent: true,
      },
      {
        source: '/sinusitis_sinus_disease.html',
        destination: '/services/sinus-disease',
        permanent: true,
      },
      {
        source: '/asthma_clicnic_MD_VA.html',
        destination: '/services/asthma',
        permanent: true,
      },
      {
        source: '/eczema_skin_allergies_clinic_MD_VA.html',
        destination: '/services/eczema-skin-allergies',
        permanent: true,
      },
      {
        source: '/implant_allergy_clinic_germantown_md.html',
        destination: '/services/contact-implant-allergies',
        permanent: true,
      },
      {
        source: '/hives_angioedema.html',
        destination: '/services/hives-angioedema',
        permanent: true,
      },
      {
        source: '/food_allergy_clinic_MD_VA.html',
        destination: '/services/food-allergies',
        permanent: true,
      },
      {
        source: '/drug_medication_allergies_clinic_MD_VA.html',
        destination: '/services/drug-medication-allergies',
        permanent: true,
      },
      {
        source: '/novel_biologic_treatments_Manassas_Germantown_MD.html',
        destination: '/services/novel-biologic-therapies',
        permanent: true,
      },
      {
        source: '/eosinophilic_esophagitis_clinic_MD_VA.html',
        destination: '/services/eosinophilic-esophagitis',
        permanent: true,
      },
      {
        source: '/consent-form',
        destination: '/immunotherapy#consent',
        permanent: true,
      },

      // Doctor / Team
      {
        source: '/allergy-asthma-doctor-MD-VA.html',
        destination: '/meet-our-doctor',
        permanent: true,
      },
      {
        source: '/allergy-asthma-team-MD-VA.html',
        destination: '/meet-our-doctor',
        permanent: true,
      },
      {
        source: '/testimonials.html',
        destination: '/meet-our-doctor#testimonials',
        permanent: true,
      },

      // Before Visit
      {
        source: '/allergy_asthma_doctor_first_visit.html',
        destination: '/before-you-visit',
        permanent: true,
      },

      {
        source: '/insurance_participation.html',
        destination: '/insurance',
        permanent: true,
      },
      {
        source: '/allergy_patient_forms_MD_VA.html',
        destination: '/forms',
        permanent: true,
      },
      {
        source: '/locations.html',
        destination: '/#ethos-section',
        permanent: true,
      },
      {
        source: '/treatment-program',
        destination: '/',
        permanent: true,
      },
      {
        source: '/prescription-medication',
        destination: '/',
        permanent: true,
      },

      // Patient Education
      {
        source: '/statistics',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/epipen',
        destination: '/',
        permanent: true,
      },
      {
        source: '/links-resource',
        destination: '/',
        permanent: true,
      },
      {
        source: '/videos',
        destination: '/',
        permanent: true,
      },
      {
        source: '/updates-announcements',
        destination: '/',
        permanent: true,
      },

      // Locations
      {
        source: '/office-hours-locations',
        destination: '/#ethos-section',
        permanent: true,
      },

      // Online payment / portal
      {
        source: '/online-payment',
        destination: 'https://portal.allergyandasthmaclinicalcenters.com/general/index.php',
        permanent: true,
      },
      {
        source: '/pay-your-bill',
        destination: 'https://portal.allergyandasthmaclinicalcenters.com/general/index.php',
        permanent: true,
      },
      {
        source: '/portal',
        destination: 'https://allergyandasthmaclinicalcenters.imscare.com/abs/login',
        permanent: true,
      },
      {
        source: '/my-care-account-portal',
        destination: 'https://allergyandasthmaclinicalcenters.imscare.com/abs/login',
        permanent: true,
      },

      // Standard pages
      {
        source: '/contact',
        destination: '/#ethos-section',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#ethos-section',
        permanent: true,
      },
      {
        source: '/reviews',
        destination: '/#ethos-section',
        permanent: true,
      },
    ];
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
