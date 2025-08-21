// components/Footer.js
import Link from 'next/link'

export default function Footer() {
    return (
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <div>
            <h4>Premier Allergy & Asthma Centers</h4>
            <p>Providing expert care in Maryland for allergy and asthma patients.</p>
          </div>
  
          <div>
            <h5>Quick Links</h5>
            <ul style={linkListStyle}>
              <li><a href="/about">About Us</a></li>
              <li><Link href="/services">Services</Link></li>
              <li><a href="/locations">Locations</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
  
          <div>
            <h5>Contact</h5>
            <p>Email: info@premierallergy.com</p>
            <p>Phone: (123) 456-7890</p>
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
    maxWidth: '1000px',
    margin: '0 auto',
  };
  
  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };
  
  const bottomBarStyle = {
    textAlign: 'center',
    marginTop: '1.5rem',
    borderTop: '1px solid #ddd',
    paddingTop: '1rem',
  };
  
