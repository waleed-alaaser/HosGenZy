import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
import '../style/admin.css';
import Sidebar from '../component/sidebar';
import Dash_header from '../component/dash_header';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showDoctorModal, setShowDoctorModal] = useState(false);
  const [showPharmacistModal, setShowPharmacistModal] = useState(false);
  const [showDepartmentModal, setShowDepartmentModal] = useState(false);
  
  // Form States
  const [doctorForm, setDoctorForm] = useState({
    name: '',
    email: '',
    specialization: '',
    department: '',
    phone: ''
  });
  
  const [pharmacistForm, setPharmacistForm] = useState({
    name: '',
    email: '',
    license: '',
    phone: ''
  });
  
  const [departmentForm, setDepartmentForm] = useState({
    name: '',
    description: '',
    location: ''
  });
  
  // Sample data for dashboard
  const stats = {
    users: 1250,
    doctors: 48,
    patients: 842,
    appointments: 167
  };
  
  const recentUsers = [
    { id: 1, name: 'Jane Cooper', role: 'Doctor', department: 'Cardiology', status: 'active' },
    { id: 2, name: 'Robert Fox', role: 'Admin', department: 'Management', status: 'active' },
    { id: 3, name: 'Emily Wilson', role: 'Nurse', department: 'Pediatrics', status: 'inactive' },
    { id: 4, name: 'Michael Brown', role: 'Lab Technician', department: 'Laboratory', status: 'active' }
  ];
  
  const systemLogs = [
    { id: 1, event: 'System Update', timestamp: '2025-05-16 09:45:22', status: 'completed' },
    { id: 2, event: 'Database Backup', timestamp: '2025-05-16 01:00:00', status: 'completed' },
    { id: 3, event: 'Security Scan', timestamp: '2025-05-15 18:30:15', status: 'in-progress' },
    { id: 4, event: 'User Import', timestamp: '2025-05-15 14:22:37', status: 'failed' }
  ];
  
  const pendingApprovals = [
    { id: 1, type: 'User Registration', requestedBy: 'Dr. Alex Johnson', timestamp: '2025-05-16 08:15:43' },
    { id: 2, type: 'Data Access Request', requestedBy: 'Nurse Martha Stewart', timestamp: '2025-05-15 16:22:10' },
    { id: 3, type: 'Role Change Request', requestedBy: 'Lab Tech Tim Burton', timestamp: '2025-05-15 11:05:55' }
  ];
  
  const departments = [
    'Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Oncology', 'Dermatology'
  ];

  // Handler functions
  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctorForm({
      ...doctorForm,
      [name]: value
    });
  };

  const handlePharmacistChange = (e) => {
    const { name, value } = e.target;
    setPharmacistForm({
      ...pharmacistForm,
      [name]: value
    });
  };

  const handleDepartmentChange = (e) => {
    const { name, value } = e.target;
    setDepartmentForm({
      ...departmentForm,
      [name]: value
    });
  };

  const handleDoctorSubmit = (e) => {
    e.preventDefault();
    console.log('Doctor form submitted:', doctorForm);
    alert('Doctor added successfully!');
    setDoctorForm({ name: '', email: '', specialization: '', department: '', phone: '' });
    setShowDoctorModal(false);
  };

  const handlePharmacistSubmit = (e) => {
    e.preventDefault();
    console.log('Pharmacist form submitted:', pharmacistForm);
    alert('Pharmacist added successfully!');
    setPharmacistForm({ name: '', email: '', license: '', phone: '' });
    setShowPharmacistModal(false);
  };

  const handleDepartmentSubmit = (e) => {
    e.preventDefault();
    console.log('Department form submitted:', departmentForm);
    alert('Department added successfully!');
    setDepartmentForm({ name: '', description: '', location: '' });
    setShowDepartmentModal(false);
  };

  return (
    <div className="containerDash">
      <Sidebar/>
      
      <div className="main-content">
        <Dash_header/>
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
          <div className="quick-actions">
            <button className="btn" onClick={() => setShowDoctorModal(true)}>Add Doctor</button>
            <button className="btn" onClick={() => setShowPharmacistModal(true)}>Add Pharmacist</button>
            <button className="btn" onClick={() => setShowDepartmentModal(true)}>Add Department</button>
            <button className="btn btn-outline">System Settings</button>
          </div>
        </header>
        
        <nav className="dashboard-nav">
          <button 
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-tab ${activeTab === 'users' ? 'active' : ''}`} 
            onClick={() => setActiveTab('users')}
          >
            User Management
          </button>
          <button 
            className={`nav-tab ${activeTab === 'system' ? 'active' : ''}`} 
            onClick={() => setActiveTab('system')}
          >
            System Logs
          </button>
          <button 
            className={`nav-tab ${activeTab === 'approvals' ? 'active' : ''}`} 
            onClick={() => setActiveTab('approvals')}
          >
            Pending Approvals
          </button>
        </nav>
        
        <main className="dashboard-main">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <h2>Dashboard Overview</h2>
              
              <div className="stats-cards">
                <div className="stats-card">
                  <span className="stats-value">{stats.users}</span>
                  <span className="stats-label">Total Users</span>
                </div>
                <div className="stats-card">
                  <span className="stats-value">{stats.doctors}</span>
                  <span className="stats-label">Doctors</span>
                </div>
                <div className="stats-card">
                  <span className="stats-value">{stats.patients}</span>
                  <span className="stats-label">Patients</span>
                </div>
                <div className="stats-card">
                  <span className="stats-value">{stats.appointments}</span>
                  <span className="stats-label">Appointments Today</span>
                </div>
              </div>
              
              <div className="dashboard-overview">
                <div className="overview-grid">
                  <div className="recent-activity">
                    <h3>Recent Users</h3>
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Role</th>
                          <th>Department</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentUsers.map(user => (
                          <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.department}</td>
                            <td>
                              <span className={`status-badge ${user.status}`}>
                                {user.status === 'active' ? 'Active' : 'Inactive'}
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
                  
                  <div className="system-status">
                    <h3>System Logs</h3>
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Event</th>
                          <th>Timestamp</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {systemLogs.map(log => (
                          <tr key={log.id}>
                            <td>{log.event}</td>
                            <td>{log.timestamp}</td>
                            <td>
                              <span className={`status-badge ${log.status}`}>
                                {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'users' && (
            <div className="tab-content">
              <h2>User Management</h2>
              <div className="action-bar">
                <div className="filter-group">
                  <input type="text" className="search-input" placeholder="Search users..." />
                  <select className="filter-select">
                    <option value="">All Roles</option>
                    <option value="doctor">Doctors</option>
                    <option value="nurse">Nurses</option>
                    <option value="admin">Admins</option>
                    <option value="labtech">Lab Technicians</option>
                  </select>
                </div>
                <button className="btn">Add New User</button>
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.role}</td>
                      <td>{user.department}</td>
                      <td>
                        <span className={`status-badge ${user.status}`}>
                          {user.status === 'active' ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td>
                        <button className="btn-action">Edit</button>
                        <button className="btn-action">Reset Password</button>
                        <button className="btn-action secondary">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'system' && (
            <div className="tab-content">
              <h2>System Logs</h2>
              <div className="action-bar">
                <div className="filter-group">
                  <input type="text" className="search-input" placeholder="Search logs..." />
                  <select className="filter-select">
                    <option value="">All Events</option>
                    <option value="update">System Updates</option>
                    <option value="backup">Backups</option>
                    <option value="security">Security</option>
                  </select>
                </div>
                <button className="btn btn-outline">Export Logs</button>
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>Timestamp</th>
                    <th>Status</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {systemLogs.map(log => (
                    <tr key={log.id}>
                      <td>{log.event}</td>
                      <td>{log.timestamp}</td>
                      <td>
                        <span className={`status-badge ${log.status}`}>
                          {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <button className="btn-action secondary">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'approvals' && (
            <div className="tab-content">
              <h2>Pending Approvals</h2>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Request Type</th>
                    <th>Requested By</th>
                    <th>Timestamp</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingApprovals.map(approval => (
                    <tr key={approval.id}>
                      <td>{approval.type}</td>
                      <td>{approval.requestedBy}</td>
                      <td>{approval.timestamp}</td>
                      <td>
                        <button className="btn-action">Approve</button>
                        <button className="btn-action secondary">Deny</button>
                        <button className="btn-action secondary">View Details</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>

      {/* Add Doctor Modal */}
      {showDoctorModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add New Doctor</h2>
              <button className="modal-close" onClick={() => setShowDoctorModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleDoctorSubmit}>
              <div className="form-group">
                <label htmlFor="doctorName">Full Name</label>
                <input 
                  type="text" 
                  id="doctorName" 
                  name="name" 
                  value={doctorForm.name} 
                  onChange={handleDoctorChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="doctorEmail">Email</label>
                <input 
                  type="email" 
                  id="doctorEmail" 
                  name="email" 
                  value={doctorForm.email} 
                  onChange={handleDoctorChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="doctorSpecialization">Specialization</label>
                <input 
                  type="text" 
                  id="doctorSpecialization" 
                  name="specialization" 
                  value={doctorForm.specialization} 
                  onChange={handleDoctorChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="doctorDepartment">Department</label>
                <select 
                  id="doctorDepartment" 
                  name="department" 
                  value={doctorForm.department} 
                  onChange={handleDoctorChange} 
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="doctorPhone">Phone</label>
                <input 
                  type="tel" 
                  id="doctorPhone" 
                  name="phone" 
                  value={doctorForm.phone} 
                  onChange={handleDoctorChange} 
                  required 
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowDoctorModal(false)}>Cancel</button>
                <button type="submit" className="btn">Add Doctor</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Pharmacist Modal */}
      {showPharmacistModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add New Pharmacist</h2>
              <button className="modal-close" onClick={() => setShowPharmacistModal(false)}>&times;</button>
            </div>
            <form onSubmit={handlePharmacistSubmit}>
              <div className="form-group">
                <label htmlFor="pharmName">Full Name</label>
                <input 
                  type="text" 
                  id="pharmName" 
                  name="name" 
                  value={pharmacistForm.name} 
                  onChange={handlePharmacistChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="pharmEmail">Email</label>
                <input 
                  type="email" 
                  id="pharmEmail" 
                  name="email" 
                  value={pharmacistForm.email} 
                  onChange={handlePharmacistChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="pharmLicense">License Number</label>
                <input 
                  type="text" 
                  id="pharmLicense" 
                  name="license" 
                  value={pharmacistForm.license} 
                  onChange={handlePharmacistChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="pharmPhone">Phone</label>
                <input 
                  type="tel" 
                  id="pharmPhone" 
                  name="phone" 
                  value={pharmacistForm.phone} 
                  onChange={handlePharmacistChange} 
                  required 
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowPharmacistModal(false)}>Cancel</button>
                <button type="submit" className="btn">Add Pharmacist</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Department Modal */}
      {showDepartmentModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add New Department</h2>
              <button className="modal-close" onClick={() => setShowDepartmentModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleDepartmentSubmit}>
              <div className="form-group">
                <label htmlFor="deptName">Department Name</label>
                <input 
                  type="text" 
                  id="deptName" 
                  name="name" 
                  value={departmentForm.name} 
                  onChange={handleDepartmentChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="deptDescription">Description</label>
                <textarea 
                  id="deptDescription" 
                  name="description" 
                  value={departmentForm.description} 
                  onChange={handleDepartmentChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="deptLocation">Location</label>
                <input 
                  type="text" 
                  id="deptLocation" 
                  name="location" 
                  value={departmentForm.location} 
                  onChange={handleDepartmentChange} 
                  required 
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowDepartmentModal(false)}>Cancel</button>
                <button type="submit" className="btn">Add Department</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;