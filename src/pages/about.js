import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/about.css';

const About = () => {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in all aspects of healthcare delivery, from medical procedures to patient interactions."
    },
    {
      title: "Compassion",
      description: "We treat every patient with kindness, dignity, and respect, recognizing their individual needs and concerns."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to continuously improve patient outcomes and healthcare delivery."
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our actions and decisions, ensuring transparency and trust."
    },
    {
      title: "Collaboration",
      description: "We work together across disciplines to provide comprehensive, coordinated care for optimal patient outcomes."
    },
    {
      title: "Community",
      description: "We are committed to serving and improving the health of our community through outreach and education."
    }
  ];

  const timeline = [
    {
      year: "1995",
      title: "The Beginning",
      description: "MediCare was established as a small clinic with a team of 5 dedicated physicians. The initial focus was on providing primary care services to the local community with limited resources but unlimited compassion and determination.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
    },
    {
      year: "2005",
      title: "Major Expansion",
      description: "After a decade of growth, MediCare expanded into a full-service hospital with 100 beds. New departments were added including emergency care, surgery, pediatrics, and specialized diagnostic services to better serve the growing needs of our patients.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
    },
    {
      year: "2015",
      title: "Technological Advancement",
      description: "MediCare invested heavily in cutting-edge medical technology and digital health solutions. The introduction of electronic medical records, telemedicine services, and advanced imaging equipment marked a new era in our healthcare delivery.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      year: "Today",
      title: "Setting New Standards",
      description: "Now a 250-bed facility with over 500 healthcare professionals, MediCare continues to grow and evolve. Our focus on research, education, and patient-centered care has established us as a leader in healthcare excellence, serving over 50,000 patients annually.",
      image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1771&q=80"
    }
  ];

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      credentials: "MD, FACP",
      speciality: "Internal Medicine"
    },
    {
      name: "Dr. Robert Chen",
      role: "Head of Cardiology",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      credentials: "MD, FACC",
      speciality: "Cardiology"
    },
    {
      name: "Dr. Emily Martinez",
      role: "Head of Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      credentials: "MD, FAAP",
      speciality: "Pediatrics"
    },
    {
      name: "Dr. Michael Thompson",
      role: "Head of Surgery",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
      credentials: "MD, FACS",
      speciality: "General Surgery"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="about-header">
          <div className="container_header">
            <h1>About HosGenZy</h1>
            <p>A leading healthcare provider committed to excellence in patient care, medical innovation, and community service since 1995.</p>
          </div>
        </section>

        <section className="mission-vision">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="mission-icon">🎯</div>
                <h2>Our Mission</h2>
                <p>To provide exceptional healthcare that improves the quality of life for our patients and community through compassionate service, clinical excellence, and innovative technology.</p>
              </div>
              
              <div className="vision-card">
                <div className="vision-icon">👁️</div>
                <h2>Our Vision</h2>
                <p>To be the leading healthcare provider recognized for excellence in patient care, medical education, research, and community engagement, setting the standard for healthcare delivery.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="values">
          <div className="container">
            <div className="section-header">
              <h1>Our Core Values</h1>
              <p>These fundamental principles guide our decisions, actions, and interactions in delivering healthcare excellence.</p>
            </div>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div className="value-card" key={index}>
                  <div className="value-number">{index + 1}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="history">
          <div className="container">
            <div className="section-header">
              <h2>Our Journey</h2>
              <p>For over 25 years, MediCare has been serving the community with dedication and excellence.</p>
            </div>
            
            <div className="timeline">
              {timeline.map((item, index) => (
                <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                  <div className="timeline-content">
                    <div className="timeline-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="timeline-text">
                      <div className="timeline-year">{item.year}</div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section className="team">
          <div className="container">
            <div className="section-header">
              <h1>Our Leadership Team</h1>
              <p>Meet the dedicated medical professionals who lead our hospital with expertise and compassion.</p>
            </div>
            
            <div className="doctors-grid">
              {doctors.map((doctor, index) => (
                <div className="doctor-card" key={index}>
                  <div className="doctor-image">
                    <img src={doctor.image} alt={doctor.name} />
                  </div>
                  <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <div className="doctor-role">{doctor.role}</div>
                    <div className="doctor-credentials">{doctor.credentials}</div>
                    <div className="doctor-speciality">{doctor.speciality}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="team-note">
              <p>Our healthcare team includes over 200 physicians and specialists across multiple disciplines, all committed to providing exceptional care to our patients.</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <h1>Take the First Step Towards Better Health</h1>
            <p>Schedule an appointment with our healthcare professionals today and experience quality care tailored to your needs.</p>
            <a href="#" className="btn">Book an Appointment</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;