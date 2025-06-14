import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
import '../style/services.css';

const Services = () => {
  const services = [
    {
      icon: "❤️",
      title: "Cardiology",
      description: "Comprehensive care for heart conditions with advanced diagnostic and treatment options.",
      features: [
        "Heart disease diagnosis and treatment",
        "Cardiac rehabilitation",
        "Pacemaker implantation",
        "Echocardiography",
        "Stress testing"
      ]
    },
    {
      icon: "🔬",
      title: "Laboratory Services",
      description: "State-of-the-art diagnostic testing with quick and accurate results.",
      features: [
        "Blood work analysis",
        "Urinalysis",
        "Tissue sampling",
        "Genetic testing",
        "Microbiology cultures"
      ]
    },
    {
      icon: "🦴",
      title: "Orthopedics",
      description: "Expert care for bone, joint, and muscle conditions to improve mobility and quality of life.",
      features: [
        "Joint replacement surgery",
        "Fracture care",
        "Sports medicine",
        "Physical therapy",
        "Arthroscopic procedures"
      ]
    },
    {
      icon: "🧠",
      title: "Neurology",
      description: "Specialized care for disorders of the brain, spine, and nervous system.",
      features: [
        "Neurological disorder diagnosis",
        "Stroke care and prevention",
        "Epilepsy management",
        "Migraine treatment",
        "Neurodegenerative disease management"
      ]
    },
    {
      icon: "👶",
      title: "Pediatrics",
      description: "Comprehensive healthcare for infants, children, and adolescents in a child-friendly environment.",
      features: [
        "Well-child check-ups",
        "Immunizations",
        "Growth monitoring",
        "Behavioral health",
        "Pediatric chronic disease management"
      ]
    },
    {
      icon: "🚑",
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response for critical conditions.",
      features: [
        "Trauma care",
        "Cardiac emergencies",
        "Stroke response",
        "Critical care",
        "Emergency surgery"
      ]
    }
  ];

  const facilities = [
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
      title: "Modern Operating Theaters",
      description: "Equipped with the latest surgical technology for various procedures."
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      title: "Advanced Imaging Center",
      description: "MRI, CT scans, X-rays, and ultrasound with rapid results."
    },
    {
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Rehabilitation Center",
      description: "Physical, occupational, and speech therapy for recovery."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="services-header">
          <div className="container">
            <h1>Our Medical Services</h1>
            <p>Comprehensive healthcare solutions delivered by experienced professionals using state-of-the-art technology.</p>
          </div>
        </section>

        <section className="services-list">
          <div className="container">
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{service.icon}</div>
                  <h2>{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <span className="service-check">✓</span> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className="service-btn">Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="facilities">
          <div className="container">
            <div className="section-header">
              <h2>Our Medical Facilities</h2>
              <p>MediCare is equipped with state-of-the-art facilities designed to provide the highest standard of care.</p>
            </div>
            
            <div className="facilities-grid">
              {facilities.map((facility, index) => (
                <div className="facility-card" key={index}>
                  <div className="facility-image">
                    <img src={facility.image} alt={facility.title} />
                  </div>
                  <div className="facility-content">
                    <h3>{facility.title}</h3>
                    <p>{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h2>Take the First Step Towards Better Health</h2>
            <p>Schedule an appointment with our healthcare professionals today and experience quality care tailored to your needs.</p>
              <Link to="/appointment" className="btn">Book an Appointment</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;