import {Link }from "react-router-dom";
import React, { useState } from 'react';
import '../../App.css';
import '../../style/normalize.css';
//import '../style/charts.css';
import '../../style/all.min.css';

const Index = () => {
  return (
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
        <h1>Pharmacy</h1>
    </div>
  );
};

export default Index