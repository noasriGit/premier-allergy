// components/Footer.js
import Link from 'next/link'

export default function Footer() {
    return (
        <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <div style={companySectionStyle}>
            <h4>Premier Allergy & Asthma Centers</h4>
            <p>Providing expert care in Maryland and Virginia for allergy and asthma patients.</p>
            <div style={contactInfoStyle}>
              <p>Email: info@allergycurecenters.com</p>
              <p>Phone: (1-855-528-7348)</p>
            </div>
          </div>
  
          <div style={linksGridStyle}>
            <div>
              <h5>Services</h5>
              <ul style={linkListStyle}>
                <li><Link href="/services">All Services</Link></li>
                <li><Link href="/services/asthma">Asthma Management</Link></li>
                <li><Link href="/services/nasal-allergies">Nasal Allergies</Link></li>
                <li><Link href="/services/ocular-allergies">Ocular Allergies</Link></li>
                <li><Link href="/services/sinus-disease">Sinus Disease</Link></li>
                <li><Link href="/services/eczema-skin-allergies">Eczema & Skin Allergies</Link></li>
                <li><Link href="/services/contact-implant-allergies">Contact & Implant Allergies</Link></li>
                <li><Link href="/services/hives-angioedema">Hives & Angioedema</Link></li>
              </ul>
            </div>

            <div>
              <h5>More Services</h5>
              <ul style={linkListStyle}>
                <li><Link href="/services/food-allergies">Food Allergies</Link></li>
                <li><Link href="/services/drug-medication-allergies">Drug & Medication Allergies</Link></li>
                <li><Link href="/services/novel-biologic-therapies">Novel Biologic Therapies</Link></li>
                <li><Link href="/services/eosinophilic-esophagitis">Eosinophilic Esophagitis</Link></li>
                <li><Link href="/services/immunotherapy">Immunotherapy</Link></li>
              </ul>
            </div>

            <div>
              <h5>Patient Resources</h5>
              <ul style={linkListStyle}>
                <li><Link href="/forms">Patient Forms</Link></li>
                <li><Link href="/before-you-visit">Before You Visit</Link></li>
                <li><Link href="/allergy-skin-testing">Allergy Skin Testing</Link></li>
                <li><Link href="/epinephrine-administration">Epinephrine Administration</Link></li>
                <li><Link href="/for-moms">For Moms</Link></li>
                <li><Link href="/links-resources">Links & Resources</Link></li>
                <li><Link href="/reviews">Patient Reviews</Link></li>
              </ul>
            </div>

            <div>
              <h5>Information</h5>
              <ul style={linkListStyle}>
                <li><Link href="/meet-our-doctor">Meet Our Team</Link></li>
                <li><Link href="/common-allergens">Common Allergens</Link></li>
                <li><Link href="/common-symptoms">Common Symptoms</Link></li>
                <li><Link href="/insurance">Insurance</Link></li>
                <li><Link href="/locations">Locations</Link></li>
                <li><Link href="/portal">Patient Portal</Link></li>
              </ul>
            </div>
          </div>
        </div>
  
        <div style={bottomBarStyle}>
          <p>&copy; {new Date().getFullYear()} Premier Allergy and Asthma Centers</p>
        </div>
      </footer>
    );
  }

  // Styles
  const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '2rem 1rem 1rem',
    marginTop: '3rem',
    fontSize: '0.9rem',
    color: '#000000',
  };
  
  const footerContentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const companySectionStyle = {
    flex: '0 0 300px',
    minWidth: '280px',
  };

  const linksGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    flex: '1',
    minWidth: '0',
  };

  const contactInfoStyle = {
    marginTop: '1rem',
    fontSize: '0.9rem',
    lineHeight: '1.6',
  };
  
  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '0.9rem',
    lineHeight: '1.8',
  };
  
  const bottomBarStyle = {
    textAlign: 'center',
    marginTop: '1.5rem',
    borderTop: '1px solid #ddd',
    paddingTop: '1rem',
  };

  
