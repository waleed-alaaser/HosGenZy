import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link }from "react-router-dom";
import '../../App.css';
import '../../style/normalize.css';
import '../style/dash.css';
import '../../style/all.min.css';
import Sidebar from '../component/sidebar'; 
import Dash_header from '../component/dash_header';
const Index = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getAppointments')
      .then(response => {
        console.log(response.data);
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
    }, []);

  return (
    <>
    <div className="containerDash">
      
    <Sidebar/>
      <main className="main-content">
        <Dash_header/>
        <div className="title_appointment">
          <h2 className='patient_lst_title'>Appointments of Patients List</h2>
          <button className="add-button">+ ADD APPOINTMENT</button>
        </div>
        
        <table className="patient-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
              <th>Status</th>
              <th>Email Address</th>
              <th>Wallet Address</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((patient, index) => (
              <tr key={index}>
                <td>{patient.id}</td>
                <td>
                  <div className="table-row">
                    {/* <span className="avatar"></span> */}
                    {patient.patient.name}
                  </div>
                </td>
                <td>{patient.date_time}</td>
                <td>{patient.department}</td>
                <td>
                  <span className={`status ${patient.status}`}>
                    {patient.status}
                  </span>
                </td>
                <td>{patient.patient.email}</td>
                <td>{patient.wallet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      
    </div>
    </>
  );
};

export default Index;