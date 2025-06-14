import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import '../../style/normalize.css';
import '../style/dash.css';
import '../../style/all.min.css';
export default function Patient(){
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/getAppointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching departments:', error);
      });
    }, []);
    return(
        <main className="main-content">
        <header className="header">
          <h2 className='patient_lst_title'>Patient List</h2>
          <button className="add-button">+ ADD PATIENTS</button>
        </header>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Num</th>
              <th>Name</th>
              <th>Age</th>
              <th>Date of Birth</th>
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
                    <span className="avatar"></span>
                    {patient.department}
                  </div>
                </td>
                <td>{patient.age}</td>
                <td>{patient.date}</td>
                <td>
                  <span className={`status ${patient.status}`}>
                    {patient.status}
                  </span>
                </td>
                <td>{patient.email}</td>
                <td>{patient.wallet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
}