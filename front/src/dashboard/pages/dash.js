import React from 'react';
import {Link }from "react-router-dom";
import '../../App.css';
import '../../style/normalize.css';
import '../style/dash.css';
import '../../style/all.min.css';
//import '../style/charts.css';
const Index = () => {
 

  return (
    <>
    <div className="containerDash">
      <nav className="sidebar">
          <h1 className="logo">HosGenZy</h1>
        <div className="nav-links">
          <Link to="/dash/" className="nav-item">📊 Dashboard</Link>
          <Link to="/dash/pateint" className="nav-item">👥 Patient Appointment</Link>
          <Link to="/dash/doctor" className="doctor nav-item">💊 Doctor</Link>
          <Link to="/dash/pharmacy"  className="nav-item">💊 Pharmacy</Link>
          <Link to="/dash/lap"  className="nav-item">💊 lap tech</Link>
          <Link to="/dash/billing"   className="nav-item">⚙️ Billing</Link>
          <Link to="/dash/department"   className="nav-item">⚙️ Department</Link>
          <Link to="/dash/admin"   className="nav-item">⚙️ Admin Panel</Link>
          <Link to="/dash/blockchain"   className="nav-item">⛓️ Blockchain Unit</Link>
          <Link to="/dash/smart"   className="nav-item">🚗 Smart Garage</Link>
          <Link to="/dash/fire"   className="nav-item">🔥 Fire Detection</Link>
        </div>
      </nav>
      
      <main className="main-content">
        <header className="header">
          <h2 className='patient_lst_title'>Patient List</h2>
          <button className="add-button">+ ADD PATIENTS</button>
        </header>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Nu</th>
              <th>Name</th>
              <th>Age</th>
              <th>Date of Birth</th>
              <th>Status</th>
              <th>Email Address</th>
              <th>Wallet Address</th>
            </tr>
          </thead>
          <tbody>
            {[
              { nu: "01", name: "Ahmed Maher", age: "21", date: "May 30, 2003", status: "accepted", email: "olea@gmail.com", wallet: "0x71C7656EC7AB88b098defB751..." },
              { nu: "02", name: "Sara Samir", age: "22", date: "May 30, 2003", status: "accepted", email: "olea@gmail.com", wallet: "0xA05801a7D398351b0bE11C439..." },
              { nu: "03", name: "Mariam Mohamed", age: "23", date: "May 30, 2003", status: "pending", email: "olea@gmail.com", wallet: "0x480897b0513fdC7C54186d907..." },
              { nu: "04", name: "Ali Ahmed", age: "21", date: "May 30, 2003", status: "completed", email: "olea@gmail.com", wallet: "0x1aE0EA34A72D944a8C7683FF8..." },
              { nu: "05", name: "Omar Ahmed", age: "21", date: "May 30, 2003", status: "pending", email: "olea@gmail.com", wallet: "0x0A098Eda01Ce92Ff4A4CCb7A4..." },
              { nu: "06", name: "Gana Ahmed", age: "21", date: "May 30, 2003", status: "pending", email: "olea@gmail.com", wallet: "0x617b2b925a5877b3d1E6Ff02a..." },
              { nu: "07", name: "Sara Mohamed", age: "21", date: "May 30, 2003", status: "accepted", email: "olea@gmail.com", wallet: "0x742d35Cc6634C852929253b84..." },
              { nu: "08", name: "Donai Mohamed", age: "21", date: "May 30, 2003", status: "pending", email: "olea@gmail.com", wallet: "0x876EabF441B2EE585b0554f49..." }
            ].map((patient, index) => (
              <tr key={index}>
                <td>{patient.nu}</td>
                <td>
                  <div className="table-row">
                    <span className="avatar"></span>
                    {patient.name}
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
      
    </div>
    </>
  );
};

export default Index;