
import React, { useState } from 'react';
import '../style/login_register.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
    department: '',
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
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    
    e.preventDefault();

        try {
          const response = await axios.post('http://localhost:8000/api/register', formData);
          console.log('Success:', response.data);
          // alert("success");
          if(response.data.role==='email_exist'){
            alert("email olready exist");
          }else{
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));
            if(formData.role === 'patient'){
              navigate('/');  
            }else{
              navigate('/dash/doctor'); 
            }
          }
          
        } catch (error) {
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
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      </div>
      <div className='res_card ' >
        <label>Role:</label>
        <select name="role" value={formData.role} onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
      </div>
      {formData.role === 'doctor' && (
        <>
         <div className='res_card' >
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
        </>
      )}

      <button type="submit">Submit</button>
    </form>
    <Footer />
    </>
  );
};

export default RegistrationForm;
