import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const token = localStorage.getItem('token');
        // alert(token);
        // Optional backend logout call (adjust endpoint and headers as needed)
        // alert(token);
        await axios.post('http://localhost:8000/api/logout', {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }  
        }).then(res => {
          console.log("Logout response:", res.data);});

      } catch (error) {
        console.error('Logout error:', error); // Log error but continue logout
      }

      // Clear client-side storage and redirect
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('token');

      navigate('/login');
    };

    logout();
  }, [navigate]);

  return null;
}
