import {Link }from "react-router-dom";
import React, { useState } from 'react';
import { useEffect} from 'react';
import axios from 'axios';

import '../../App.css';
import '../../style/normalize.css';
import '../style/doctor.css';
import '../../style/all.min.css';
import Sidebar from "../component/sidebar";

const Index = () => {
  // const [activeTab, setActiveTab] = useState('appointments');

  // Sample data - in a real app, this would come from an API
  // const appointments = [
  //   { id: 1, patient: "John Doe", date: "2025-05-15", time: "09:00 AM", reason: "Annual Checkup" },
  //   { id: 2, patient: "Mary Smith", date: "2025-05-15", time: "10:30 AM", reason: "Follow-up" },
  //   { id: 3, patient: "Robert Johnson", date: "2025-05-16", time: "02:00 PM", reason: "Consultation" },
  //   { id: 4, patient: "Emily Brown", date: "2025-05-17", time: "11:15 AM", reason: "Lab Results Review" }
  // ];
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getPrescriptions')
      .then(response => {
        alert('succ');
        console.log(response.data);
        setAppointments(response.data);
      })
      .catch(error => {
        alert('fail');
        console.error('Error fetching departments:', error);
      });
    }, []);

  const patients = [
    { id: 101, name: "John Doe", age: 45, lastVisit: "2025-04-10", condition: "Hypertension" },
    { id: 102, name: "Mary Smith", age: 32, lastVisit: "2025-05-01", condition: "Diabetes Type 2" },
    { id: 103, name: "Robert Johnson", age: 58, lastVisit: "2025-03-22", condition: "Arthritis" },
    { id: 104, name: "Emily Brown", age: 28, lastVisit: "2025-05-05", condition: "Migraine" }
  ];

  // Dashboard stats
  const dashboardStats = {
    totalAppointments: 4,
    todayAppointments: 2,
    totalPatients: 4,
    cancelledAppointments: 0
  };
  const completeAppointment = async (patientId) => {
    try {
      const res = await axios.post(`http://localhost:8000/api/appointments/${patientId}/completePharmacy`);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Failed to complete appointment ph.');
    }
  }; 
  return (
    <div className="containerDash">
      <Sidebar/> 
      <div className="main-content">
        <header className="dashboard-header">
          <h1>Doctor Dashboard</h1>
          <div className="doctor-profile">
            <div className="doctor-avatar"></div>
            <div className="doctor-info">
              <h2>Dr. Sarah Connor</h2>
              <p>Cardiologist</p>
            </div>
          </div>
        </header>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Appointments</h3>
            <p className="stat-number">{dashboardStats.totalAppointments}</p>
          </div>
          <div className="stat-card">
            <h3>Today's Appointments</h3>
            <p className="stat-number">{dashboardStats.todayAppointments}</p>
          </div>
          <div className="stat-card">
            <h3>Total Patients</h3>
            <p className="stat-number">{dashboardStats.totalPatients}</p>
          </div>
          <div className="stat-card">
            <h3>Cancelled</h3>
            <p className="stat-number">{dashboardStats.cancelledAppointments}</p>
          </div>
        </div>
        
        <div className="dashboard-tabs">
            <h1>Prescriptions</h1>
        </div>
        <div className="dashboard-content">
            <div className="appointments-section">
              <h2>Upcoming Prescriptions</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>doctor Name</th>
                    <th>Date</th>
                    <th>Reason</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map(appointment => (
                    <tr key={appointment.id}>
                      <td>{appointment.patient.name}</td>
                      <td>{appointment.doctor.name}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.medications}</td>
                      <td>
                      <button className="btn btn-success" onClick={() => completeAppointment(appointment.patient.id)}>
                        Complete
                      </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
            </div>
            </div>
  )
};

export default Index