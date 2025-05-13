import '../style/home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Quality Healthcare for a <span>Better Life</span></h1>
                <p>Your health is our priority. HosGenZy provides exceptional medical care with compassion and cutting-edge technology to serve our community.</p>
                <a href="#" className="btn">Book an Appointment</a>
              </div>
              <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80" alt="Medical professionals" />
              </div>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose HosGenZy?</h2>
              <p>We are committed to excellence in healthcare delivery, offering a wide range of services to meet all your medical needs.</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🏥</div>
                <h3>State-of-the-Art Facilities</h3>
                <p>Our hospital is equipped with the latest medical technology and modern amenities for patient comfort.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">👨‍⚕️</div>
                <h3>Expert Medical Professionals</h3>
                <p>Our team consists of experienced doctors, nurses and support staff dedicated to providing the best care.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📅</div>
                <h3>Easy Appointment Scheduling</h3>
                <p>Book appointments online or via phone with our simple and convenient scheduling system.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚑</div>
                <h3>24/7 Emergency Services</h3>
                <p>Our emergency department is always open and ready to provide immediate medical attention.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Medical Specialists</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Patients Annually</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Care</div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container">
            <div className="section-header">
              <h2>What Our Patients Say</h2>
              <p>We prioritize patient satisfaction and value the feedback we receive from those we've had the privilege to care for.</p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p>The care I received at MediCare was exceptional. The doctors were attentive, the facilities were clean, and the staff made me feel comfortable throughout my stay.</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">J</div>
                  <div>
                    <h4>John Davis</h4>
                    <p>Patient</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p>I've been bringing my family to MediCare for years. Their pediatric care is outstanding, and the doctors always take time to address all our concerns.</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">S</div>
                  <div>
                    <h4>Sarah Williams</h4>
                    <p>Parent</p>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p>After my surgery, the follow-up care was amazing. The nurses were compassionate, and my recovery went smoother than expected. I'm grateful for their expertise.</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">M</div>
                  <div>
                    <h4>Michael Chen</h4>
                    <p>Patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Take the First Step Towards Better Health</h2>
            <p>Schedule an appointment with our healthcare professionals today and experience quality care tailored to your needs.</p>
            <div className="cta-buttons">
              <a href="#" className="btn">Book an Appointment</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;