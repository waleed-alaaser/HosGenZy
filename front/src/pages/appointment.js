import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style/appointment.css';
import axios from 'axios';

const Appointment = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    department: 'General Medicine',
    dis: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

        try {
          const token = localStorage.getItem('token');
          const response = await axios.post('http://localhost:8000/api/appointment', formData,{
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          console.log('Success:', response.data);
          alert("success");
        } catch (error) {
            console.error('rror:', error);
            alert('eror');
        }
    
    
    // // In a real application, you would send this data to a server
    // setTimeout(() => {
    //   setIsSubmitted(false);
    //   setFormData({
    //     date: '',
    //     time: '',
    //     department: 'General Medicine',
    //     message: ''
    //   });
    // }, 3000);
  };

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
      const amPm = hour < 12 ? 'AM' : 'PM';
      slots.push(`${hourFormatted}:00 ${amPm}`);
      slots.push(`${hourFormatted}:30 ${amPm}`);
    }
    return slots;
  };

  return (
    <div className="appointment-page">
      <Header />
      
      <div className="appointment-hero">
        <div className="container">
          <h1>Book an Appointment</h1>
          <p>Schedule your visit with our healthcare professionals</p>
        </div>
      </div>

      <div className="appointment-content container">
        <div className="appointment-info">
          <h2>How to Schedule Your Visit</h2>
          <div className="appointment-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Fill the Form</h3>
                <p>Complete the appointment request form with your details</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Confirmation</h3>
                <p>Receive a confirmation email with your appointment details</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Visit Us</h3>
                <p>Arrive 15 minutes before your scheduled appointment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="appointment-form-container">
          <h2>Request an Appointment</h2>
          {isSubmitted ? (
            <div className="form-success">
              <h3>Thank you for your request!</h3>
              <p>We have received your appointment request and will contact you shortly to confirm.</p>
            </div>
          ) : (
            <form className="appointment-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date*</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    min={new Date().toISOString().split('T')[0]} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="time">Preferred Time*</label>
                  <select 
                    id="time" 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select a time</option>
                    {generateTimeSlots().map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="department">Department*</label>
                <select 
                  id="department" 
                  name="department" 
                  value={formData.department} 
                  onChange={handleChange} 
                  required
                >
                  <option value="General Medicine">General Medicine</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea 
                  id="message" 
                  name="dis" 
                  value={formData.dis} 
                  onChange={handleChange} 
                  rows="4"
                />
              </div>
              
              <button type="submit" className="btn">Request Appointment</button>
            </form>
          )}
        </div>
      </div>
      
      <div className="appointment-contact container">
        <div className="contact-info">
          <h2>Need Immediate Assistance?</h2>
          <p>For urgent matters, please contact us directly:</p>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>Emergency: 123-456-7890</p>
                <p>Reception: 123-456-7891</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">💬</div>
              <div>
                <h3>Chat with Us</h3>
                <p>Online chat available</p>
                <p>Mon-Fri, 8AM - 8PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Appointment;