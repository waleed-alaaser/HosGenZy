import { Link } from 'react-router-dom';
import '../style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MediCare</h3>
            <p>Providing quality healthcare services with compassion and excellence since 1995.</p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <i className="facebook-icon">f</i>
              </a>
              <a href="#" className="social-icon">
                <i className="twitter-icon">t</i>
              </a>
              <a href="#" className="social-icon">
                <i className="instagram-icon">i</i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="#">Contact</Link></li>
              <li><Link to="#">Book Appointment</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Emergency Care</Link></li>
              <li><Link to="/services">Cardiology</Link></li>
              <li><Link to="/services">Neurology</Link></li>
              <li><Link to="/services">Pediatrics</Link></li>
              <li><Link to="/services">Orthopedics</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <p>123 Healthcare Avenue</p>
            <p>Medical District, MD 12345</p>
            <p>Email: info@medicare.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 MediCare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;