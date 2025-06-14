
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission
    alert("Thank you for your message. We'll get back to you soon!");
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <Header />
      
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help you with any questions or concerns</p>
        </div>
      </div>
      
      <div className="contact-content container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="info-item">
            <div className="info-icon">📍</div>
            <div className="info-text">
              <h3>Our Location</h3>
              <p>123 Healthcare Avenue</p>
              <p>Medical District, MD 12345</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">📞</div>
            <div className="info-text">
              <h3>Phone</h3>
              <p>Main: (123) 456-7890</p>
              <p>Emergency: (123) 456-9999</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">✉️</div>
            <div className="info-text">
              <h3>Email</h3>
              <p>info@medicare.com</p>
              <p>appointments@medicare.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">🕒</div>
            <div className="info-text">
              <h3>Hours</h3>
              <p>Monday - Friday: 8am - 8pm</p>
              <p>Saturday - Sunday: 10am - 4pm</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Your email" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="Your phone number" 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" required>
                <option value="">Select a subject</option>
                <option value="appointment">Book Appointment</option>
                <option value="inquiry">General Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="billing">Billing Question</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="How can we help you?" 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="map-container">
        <h2 className="container">Find Us</h2>
        <div className="map">
          {/* This would typically be replaced with an actual map integration */}
          <div className="map-placeholder">
            <p>Map location of MediCare Hospital</p>
            <p className="map-address">123 Healthcare Avenue, Medical District, MD 12345</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;