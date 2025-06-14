import {Link }from "react-router-dom";
import React, { useState } from 'react';
import '../../App.css';
import '../../style/normalize.css';
import '../style/charts.css';
import '../../style/all.min.css';
import Sidebar from '../component/sidebar'; 
import Dash_header from '../component/dash_header';


const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { title: 'Doctors', value: '115', change: '41.5%', color: 'purple' },
    { title: 'Appointments', value: '210', change: '21.3%', color: 'teal' },
    { title: 'Patients', value: '320', change: '33.7%', color: 'gold' },
    { title: 'Earnings', value: '$56,640', change: '67.5%', color: 'green' },
  ];

  const appointments = [
    {
      doctor: 'Dr. Rekha Peter',
      specialty: 'Psychiatrist',
      time: '09:00 - 10:20 Am',
      status: 'online'
    },
    {
      doctor: 'Mr. Jon assai',
      specialty: 'Psychiatrist',
      time: '02:00 - 3:10 Am',
      status: 'offline'
    }
  ];

  return (
    <div className="containerDash">
      
      <Sidebar/>
    <div className="main-content">
      <Dash_header/>
      <div className="dashboard-grid">
        {stats.map((stat, index) => (
          <div key={index} className={`stat-card ${stat.color}`}>
            <p>{stat.title}</p>
            <h3>{stat.value}</h3>
            <div className="stat-change">
              <span>Since last month</span>
              <span>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="charts-container">
        <div className="chart-card">
          <h2>Statistics</h2>
          <div className="chart-placeholder">
            Bar Chart Placeholder
          </div>
        </div>

        <div className="appointments-section">
          <h2>Appointments</h2>
          {appointments.map((appointment, index) => (
            <div key={index} className="appointment-card">
              <div className="appointment-info">
                <h3>{appointment.doctor}</h3>
                <p>{appointment.specialty}</p>
                <p className="appointment-time">{appointment.time}</p>
              </div>
              <span className={`status ${appointment.status}`}>
                {appointment.status}
              </span>
            </div>
          ))}
          <button style={{ width: '100%', padding: '10px', marginTop: '10px', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
            see all appointments
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Index