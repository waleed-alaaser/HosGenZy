import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/lab.css';
import Sidebar from '../component/sidebar';
import Dash_header from '../component/dash_header';


const LabTechnicianDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [labTests, setLabTests] = useState([]);
  const [pendingSamples, setPendingSamples] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [stats, setStats] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setLabTests([
        { id: 1, name: "Complete Blood Count", category: "Hematology", completionTime: "1 hour", priority: "Routine" },
        { id: 2, name: "Basic Metabolic Panel", category: "Chemistry", completionTime: "2 hours", priority: "Urgent" },
        { id: 3, name: "Lipid Panel", category: "Chemistry", completionTime: "3 hours", priority: "Routine" },
        { id: 4, name: "Urinalysis", category: "Microbiology", completionTime: "1 hour", priority: "STAT" },
        { id: 5, name: "Liver Function Test", category: "Chemistry", completionTime: "4 hours", priority: "Routine" },
        { id: 6, name: "Thyroid Function Test", category: "Endocrinology", completionTime: "24 hours", priority: "Routine" },
      ]);
      
      setPendingSamples([
        { id: 101, patient: "John Smith", test: "Complete Blood Count", collectedAt: "08:30 AM", status: "Processing" },
        { id: 102, patient: "Emma Johnson", test: "Basic Metabolic Panel", collectedAt: "09:15 AM", status: "Received" },
        { id: 103, patient: "Michael Brown", test: "Lipid Panel", collectedAt: "10:00 AM", status: "Pending" },
        { id: 104, patient: "Olivia Davis", test: "Urinalysis", collectedAt: "08:45 AM", status: "Processing" },
        { id: 105, patient: "William Wilson", test: "Liver Function Test", collectedAt: "11:30 AM", status: "Received" },
      ]);
      
      setTestResults([
        { id: 201, patient: "Sarah Miller", test: "Complete Blood Count", completedAt: "Yesterday, 4:30 PM", result: "Normal" },
        { id: 202, patient: "James Taylor", test: "Basic Metabolic Panel", completedAt: "Yesterday, 3:15 PM", result: "Abnormal" },
        { id: 203, patient: "Sophia Martinez", test: "Thyroid Function Test", completedAt: "Yesterday, 2:00 PM", result: "Normal" },
        { id: 204, patient: "Benjamin Garcia", test: "Urinalysis", completedAt: "Yesterday, 1:45 PM", result: "Normal" },
        { id: 205, patient: "Isabella Lopez", test: "Liver Function Test", completedAt: "Yesterday, 11:20 AM", result: "Critical" },
      ]);
      
      setStats({
        totalTests: 47,
        pendingTests: 12,
        completedTests: 35,
        criticalResults: 3,
        equipmentStatus: "Operational",
        averageProcessingTime: "2.3 hours"
      });
      
      setIsLoading(false);
    }, 1000);
  }, []);

  const renderOverviewStats = () => {
    return (
      <div className="stats-overview">
        <div className="stats-cards">
          <div className="stats-card">
            <span className="stats-value">{stats.totalTests}</span>
            <span className="stats-label">Total Tests Today</span>
          </div>
          <div className="stats-card">
            <span className="stats-value">{stats.pendingTests}</span>
            <span className="stats-label">Pending Tests</span>
          </div>
          <div className="stats-card">
            <span className="stats-value">{stats.completedTests}</span>
            <span className="stats-label">Completed Tests</span>
          </div>
          <div className="stats-card warning">
            <span className="stats-value">{stats.criticalResults}</span>
            <span className="stats-label">Critical Results</span>
          </div>
        </div>
        
        <div className="additional-stats">
          <div className="stats-item">
            <div className="stats-label">Equipment Status</div>
            <div className="stats-value">{stats.equipmentStatus}</div>
          </div>
          <div className="stats-item">
            <div className="stats-label">Avg. Processing Time</div>
            <div className="stats-value">{stats.averageProcessingTime}</div>
          </div>
        </div>
      </div>
    );
  };

  const renderPendingSamples = () => {
    return (
      <div className="pending-samples">
        <h3>Pending Samples</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Test</th>
              <th>Collected At</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingSamples.map(sample => (
              <tr key={sample.id}>
                <td>#{sample.id}</td>
                <td>{sample.patient}</td>
                <td>{sample.test}</td>
                <td>{sample.collectedAt}</td>
                <td>
                  <span className={`status-badge ${sample.status.toLowerCase()}`}>
                    {sample.status}
                  </span>
                </td>
                <td>
                  <button className="btn-action">Process</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderRecentResults = () => {
    return (
      <div className="recent-results">
        <h3>Recent Test Results</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Test</th>
              <th>Completed</th>
              <th>Result</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testResults.map(result => (
              <tr key={result.id}>
                <td>{result.patient}</td>
                <td>{result.test}</td>
                <td>{result.completedAt}</td>
                <td>
                  <span className={`result-badge ${result.result.toLowerCase()}`}>
                    {result.result}
                  </span>
                </td>
                <td>
                  <button className="btn-action">View</button>
                  <button className="btn-action secondary">Print</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tests':
        return (
          <div className="tab-content">
            <h2>Lab Tests Catalog</h2>
            <div className="action-bar">
              <button className="btn">Add New Test</button>
              <input type="text" placeholder="Search tests..." className="search-input" />
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Completion Time</th>
                  <th>Priority</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {labTests.map(test => (
                  <tr key={test.id}>
                    <td>{test.name}</td>
                    <td>{test.category}</td>
                    <td>{test.completionTime}</td>
                    <td>
                      <span className={`priority-badge ${test.priority.toLowerCase()}`}>
                        {test.priority}
                      </span>
                    </td>
                    <td>
                      <button className="btn-action">Edit</button>
                      <button className="btn-action secondary">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'samples':
        return (
          <div className="tab-content">
            <h2>Sample Management</h2>
            <div className="action-bar">
              <button className="btn">Register New Sample</button>
              <div className="filter-group">
                <select className="filter-select">
                  <option>All Status</option>
                  <option>Received</option>
                  <option>Processing</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>
            {renderPendingSamples()}
          </div>
        );
        
      case 'results':
        return (
          <div className="tab-content">
            <h2>Test Results</h2>
            <div className="action-bar">
              <div className="filter-group">
                <select className="filter-select">
                  <option>All Results</option>
                  <option>Normal</option>
                  <option>Abnormal</option>
                  <option>Critical</option>
                </select>
                <button className="btn">Generate Reports</button>
              </div>
            </div>
            {renderRecentResults()}
          </div>
        );
        
      case 'overview':
      default:
        return (
          <div className="tab-content">
            <h2>Lab Technician Dashboard</h2>
            <div className="dashboard-overview">
              {renderOverviewStats()}
              <div className="overview-grid">
                {renderPendingSamples()}
                {renderRecentResults()}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='containerDash'>
      <Sidebar/>
    <div className="main-content">
      <Dash_header/>
      <div className="dashboard-header">
        <h1>Lab Technician Dashboard</h1>
        <div className="quick-actions">
          <button className="btn">Register Sample</button>
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
          className={`nav-tab ${activeTab === 'tests' ? 'active' : ''}`}
          onClick={() => setActiveTab('tests')}
        >
          Lab Tests
        </button>
        <button
          className={`nav-tab ${activeTab === 'samples' ? 'active' : ''}`}
          onClick={() => setActiveTab('samples')}
        >
          Samples
        </button>
        <button
          className={`nav-tab ${activeTab === 'results' ? 'active' : ''}`}
          onClick={() => setActiveTab('results')}
        >
          Results
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

export default LabTechnicianDashboard;