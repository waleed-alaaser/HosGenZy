import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import './LoginForm.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    name: '',
    email: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', loginData);
      console.log('Success:', response.data);
      //alert("success");
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
        if(response.data.role === 'patient'){
          navigate('/');
        }else if(response.data.role === 'doctor'){
          navigate('/dash/doctor');
        }else if(response.data.role === 'admin'){
          navigate('/dash');
        }
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
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={loginData.name}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        required
      />

      <button type="submit">Login</button>
    </form>
    <Footer/>
    </>
  );
};

export default LoginForm;