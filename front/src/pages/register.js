
import React, { useState } from 'react';
import '../style/login_register.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
    role: '',
    heartRate: '',
    bloodPressure: '',
    temperature: '',
    oxygenSaturation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

        try {
          if(formData.role === 'patient'){
            const response = await axios.post('http://localhost:8000/api/patient', formData);
            console.log('Success:', response.data);
            alert("success");
          }else{
            const response = await axios.post('http://localhost:8000/api/doctor', formData);
            console.log('Success:', response.data);
            alert("success");
          }
          
            //console.log('Success:', response.data);
            // Optionally, update UI based on success
        } catch (error) {
            //console.error('Error:', error.response ? error.response.data : error.message);
            // Optionally, display error messages
            console.error('rror:', error);
            alert('eror');
        }
  };

  return (
    <>
    <Header/>
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className='temp'>Register</h2>
      <div className='res_card' >
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className='res_card' >
      <label>Date of Birth:</label>
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>
      <div className='res_card' >
      <label>Phone Number:</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className='res_card' >
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className='res_card' >
      <label>Address:</label>
      <textarea name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div className='res_card' >
      <label>Gender:</label>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">--Select--</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      </div>
      <div className='res_card res_card_full' >
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
      </div>
      {formData.role === 'patient' && (
        <>
          <div className='res_card' >
          <label>Heart Rate (bpm):</label>
          <input type="number" name="heartRate" value={formData.heartRate} onChange={handleChange} />
          </div>
          <div className='res_card' >
          <label>Blood Pressure (systolic/diastolic):</label>
          <input type="text" name="bloodPressure" placeholder="e.g., 120/80" value={formData.bloodPressure} onChange={handleChange} />
          </div>
          <div className='res_card' >
          <label>Temperature (°C):</label>
          <input type="number" step="0.1" name="temperature" value={formData.temperature} onChange={handleChange} />
          </div>
          <div className='res_card' >
          <label>Oxygen Saturation (%):</label>
          <input type="number" step="0.1" name="oxygenSaturation" value={formData.oxygenSaturation} onChange={handleChange} />
          </div>
        </>
      )}

      <button type="submit">Submit</button>
    </form>
    <Footer />
    </>
  );
};

export default RegistrationForm;
