import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true
      });

      const res = await axios.post('http://localhost:8000/login', form, {
        withCredentials: true
      });

      localStorage.setItem('user', JSON.stringify(res.data));

      if (res.data.role === 'admin') navigate('/dash');
      else if (res.data.role === 'doctor') navigate('/dash/doctor');
      else if (res.data.role === 'patient') navigate('/');
    } catch (err) {
      alert('Login failed');
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
}
