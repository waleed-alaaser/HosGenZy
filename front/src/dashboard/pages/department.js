import {Link }from "react-router-dom";
import React, { useState } from 'react';
import '../../App.css';
import '../../style/normalize.css';
import '../style/department.css';
import '../../style/all.min.css';
import Sidebar from "../component/sidebar";
import Dash_header from '../component/dash_header';


const Index = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data - in a real app, this would come from an API
  const departments = [
    { 
      id: 1, 
      name: "Cardiology", 
      head: "Dr. John Smith", 
      staff: 12, 
      patients: 48,
      description: "Specializes in diagnosing and treating heart conditions and cardiovascular diseases."
    },
    { 
      id: 2, 
      name: "Neurology", 
      head: "Dr. Sarah Johnson", 
      staff: 8, 
      patients: 32,
      description: "Focuses on disorders of the nervous system, including the brain, spinal cord, and peripheral nerves."
    },
    { 
      id: 3, 
      name: "Pediatrics", 
      head: "Dr. Michael Brown", 
      staff: 15, 
      patients: 65,
      description: "Provides medical care for infants, children, and adolescents."
    },
    { 
      id: 4, 
      name: "Orthopedics", 
      head: "Dr. Emily Davis", 
      staff: 10, 
      patients: 40,
      description: "Deals with conditions involving the musculoskeletal system."
    }
  ];

  const staffMembers = [
    { id: 1, name: "Dr. John Smith", role: "Cardiologist", department: "Cardiology", experience: "15 years" },
    { id: 2, name: "Dr. Sarah Johnson", role: "Neurologist", department: "Neurology", experience: "12 years" },
    { id: 3, name: "Dr. Michael Brown", role: "Pediatrician", department: "Pediatrics", experience: "10 years" },
    { id: 4, name: "Dr. Emily Davis", role: "Orthopedic Surgeon", department: "Orthopedics", experience: "14 years" },
    { id: 5, name: "Dr. Robert Wilson", role: "Cardiologist", department: "Cardiology", experience: "8 years" },
    { id: 6, name: "Dr. Jennifer Lee", role: "Neurologist", department: "Neurology", experience: "9 years" },
    { id: 7, name: "Dr. David Clark", role: "Pediatrician", department: "Pediatrics", experience: "11 years" },
    { id: 8, name: "Dr. Lisa Martinez", role: "Orthopedic Surgeon", department: "Orthopedics", experience: "7 years" }
  ];
  return (
    <div className="containerDash">
      <Sidebar/>
      <div className="main-content">
        <Dash_header/>
        <header className="dashboard-header">
          <h1>Department Dashboard</h1>
          <p>Medical Departments Management</p>
        </header>
        
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total Departments</h3>
            <p className="stat-number">{departments.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Staff</h3>
            <p className="stat-number">{staffMembers.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Patients</h3>
            <p className="stat-number">{departments.reduce((total, dept) => total + dept.patients, 0)}</p>
          </div>
          <div className="stat-card">
            <h3>Avg. Staff Per Dept</h3>
            <p className="stat-number">
              {(departments.reduce((total, dept) => total + dept.staff, 0) / departments.length).toFixed(1)}
            </p>
          </div>
        </div>
        
        <div className="dashboard-tabs">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Department Overview
          </button>
          <button 
            className={`tab-button ${activeTab === 'staff' ? 'active' : ''}`}
            onClick={() => setActiveTab('staff')}
          >
            Staff Directory
          </button>
        </div>
        
        <div className="dashboard-content">
          {activeTab === 'overview' ? (
            <div className="departments-section">
              <h2>Department Overview</h2>
              <div className="department-cards">
                {departments.map(department => (
                  <div key={department.id} className="department-card">
                    <h3>{department.name}</h3>
                    <p className="department-head">Head: {department.head}</p>
                    <p className="department-description">{department.description}</p>
                    <div className="department-stats">
                      <div className="dept-stat">
                        <span className="label">Staff</span>
                        <span className="value">{department.staff}</span>
                      </div>
                      <div className="dept-stat">
                        <span className="label">Patients</span>
                        <span className="value">{department.patients}</span>
                      </div>
                    </div>
                    <button className="btn dept-btn">View Details</button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="staff-section">
              <h2>Staff Directory</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Experience</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {staffMembers.map(staff => (
                    <tr key={staff.id}>
                      <td>{staff.name}</td>
                      <td>{staff.role}</td>
                      <td>{staff.department}</td>
                      <td>{staff.experience}</td>
                      <td>
                        <button className="btn btn-outline">View Profile</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index