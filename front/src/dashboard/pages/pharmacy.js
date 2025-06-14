import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/pharmacy.css';
import Sidebar from '../component/sidebar';
import Dash_header from '../component/dash_header';

const PharmacyDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [inventory, setInventory] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [sales, setSales] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setInventory([
        { id: 1, name: "Amoxicillin", category: "Antibiotics", stock: 128, alertLevel: 20 },
        { id: 2, name: "Lisinopril", category: "Blood Pressure", stock: 85, alertLevel: 30 },
        { id: 3, name: "Metformin", category: "Diabetes", stock: 42, alertLevel: 50 },
        { id: 4, name: "Atorvastatin", category: "Cholesterol", stock: 56, alertLevel: 25 },
        { id: 5, name: "Albuterol", category: "Respiratory", stock: 19, alertLevel: 20 },
        { id: 6, name: "Omeprazole", category: "Gastrointestinal", stock: 73, alertLevel: 30 },
      ]);
      
      setPrescriptions([
        { id: 101, patient: "John Smith", medication: "Amoxicillin", status: "Ready", date: "2023-05-14" },
        { id: 102, patient: "Emma Johnson", medication: "Lisinopril", status: "Processing", date: "2023-05-14" },
        { id: 103, patient: "Michael Brown", medication: "Metformin", status: "Ready", date: "2023-05-13" },
        { id: 104, patient: "Olivia Davis", medication: "Atorvastatin", status: "Ready", date: "2023-05-13" },
        { id: 105, patient: "William Wilson", medication: "Albuterol", status: "Pending", date: "2023-05-15" },
      ]);
      
      setSales({
        daily: 2450,
        weekly: 16780,
        monthly: 68540,
        topSelling: ["Amoxicillin", "Lisinopril", "Metformin"]
      });
      
      setIsLoading(false);
    }, 1000);
  }, []);

  const renderInventoryStatus = () => {
    const lowStock = inventory.filter(item => item.stock <= item.alertLevel);
    return (
      <div className="inventory-status">
        <h3>Inventory Status</h3>
        <div className="status-cards">
          <div className="status-card">
            <span className="status-value">{inventory.length}</span>
            <span className="status-label">Total Products</span>
          </div>
          <div className="status-card warning">
            <span className="status-value">{lowStock.length}</span>
            <span className="status-label">Low Stock Items</span>
          </div>
        </div>
        <h4>Low Stock Alert</h4>
        {lowStock.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Current Stock</th>
                <th>Alert Level</th>
              </tr>
            </thead>
            <tbody>
              {lowStock.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td className="stock-level low">{item.stock}</td>
                  <td>{item.alertLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="no-data">No low stock items</p>
        )}
      </div>
    );
  };

  const renderPrescriptions = () => {
    return (
      <div className="prescriptions">
        <h3>Recent Prescriptions</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Medication</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map(prescription => (
              <tr key={prescription.id}>
                <td>#{prescription.id}</td>
                <td>{prescription.patient}</td>
                <td>{prescription.medication}</td>
                <td>
                  <span className={`status-badge ${prescription.status.toLowerCase()}`}>
                    {prescription.status}
                  </span>
                </td>
                <td>{prescription.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderSalesOverview = () => {
    return (
      <div className="sales-overview">
        <h3>Sales Overview</h3>
        <div className="status-cards">
          <div className="status-card">
            <span className="status-value">${sales.daily}</span>
            <span className="status-label">Today</span>
          </div>
          <div className="status-card">
            <span className="status-value">${sales.weekly}</span>
            <span className="status-label">This Week</span>
          </div>
          <div className="status-card">
            <span className="status-value">${sales.monthly}</span>
            <span className="status-label">This Month</span>
          </div>
        </div>
        
        <div className="top-selling">
          <h4>Top Selling Medications</h4>
          <ol className="top-list">
            {sales.topSelling && sales.topSelling.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'inventory':
        return (
          <div className="tab-content">
            <h2>Inventory Management</h2>
            <div className="action-bar">
              <button className="btn">Add New Item</button>
              <input type="text" placeholder="Search inventory..." className="search-input" />
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Alert Level</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td className={item.stock <= item.alertLevel ? "stock-level low" : "stock-level"}>
                      {item.stock}
                    </td>
                    <td>{item.alertLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'prescriptions':
        return (
          <div className="tab-content">
            <h2>Prescription Management</h2>
            <div className="action-bar">
              <button className="btn">New Prescription</button>
              <div className="filter-group">
                <select className="filter-select">
                  <option>All Status</option>
                  <option>Ready</option>
                  <option>Processing</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
            {renderPrescriptions()}
          </div>
        );
        
      case 'sales':
        return (
          <div className="tab-content">
            <h2>Sales Reports</h2>
            <div className="action-bar">
              <div className="filter-group">
                <select className="filter-select">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Annual</option>
                </select>
                <button className="btn">Export Report</button>
              </div>
            </div>
            <div className="chart-placeholder">
              <div className="bar-chart">
                <div className="bar" style={{height: '60%'}}><span>Mon</span></div>
                <div className="bar" style={{height: '75%'}}><span>Tue</span></div>
                <div className="bar" style={{height: '45%'}}><span>Wed</span></div>
                <div className="bar" style={{height: '90%'}}><span>Thu</span></div>
                <div className="bar" style={{height: '70%'}}><span>Fri</span></div>
                <div className="bar" style={{height: '60%'}}><span>Sat</span></div>
                <div className="bar" style={{height: '40%'}}><span>Sun</span></div>
              </div>
            </div>
          </div>
        );
        
      case 'overview':
      default:
        return (
          <div className="tab-content">
            <h2>Pharmacy Dashboard Overview</h2>
            <div className="dashboard-overview">
              {renderSalesOverview()}
              {renderInventoryStatus()}
              {renderPrescriptions()}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="containerDash">
      <Sidebar/>
      <div className='main-content'>
        <Dash_header/>
      <div className="dashboard_header">
        <h1>Pharmacy Dashboard</h1>
        <div className="quick-actions">
          <button className="btn">New Order</button>
          <Link to="/" className="btn btn-outline">Back to Home</Link>
        </div>
      </div>
      
      <div className="dashboard-nav">
        <button
          className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`nav-tab ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => setActiveTab('inventory')}
        >
          Inventory
        </button>
        <button
          className={`nav-tab ${activeTab === 'prescriptions' ? 'active' : ''}`}
          onClick={() => setActiveTab('prescriptions')}
        >
          Prescriptions
        </button>
        <button
          className={`nav-tab ${activeTab === 'sales' ? 'active' : ''}`}
          onClick={() => setActiveTab('sales')}
        >
          Sales
        </button>
      </div>
      
      <div className="dashboard-main">
        {isLoading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading data...</p>
          </div>
        ) : (
          renderTabContent()
        )}
      </div>
    </div>
    </div>
  );
};

export default PharmacyDashboard;