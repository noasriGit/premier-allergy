// app/layout.js
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { EB_Garamond } from 'next/font/google'

const ebGaramond = EB_Garamond({ subsets:['latin'], display:'swap', weight:['400','500','700'] })

export const metadata = {
  title: 'Premier Allergy and Asthma Centers',
  description: 'Expert allergy and asthma care in Maryland.',
  // Dynamically set robots based on Vercel environment:
  robots: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? { index: true, follow: true }
    : { index: false, follow: false },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ebGaramond.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
