import React, { useState } from 'react';
import '../style/billing.css';
import Sidebar from '../component/sidebar';
import Dash_header from '../component/dash_header';

const BillingDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for invoices
  const invoices = [
    { id: "INV-001", patient: "John Doe", date: "2025-05-10", amount: 350.00, status: "Paid" },
    { id: "INV-002", patient: "Jane Smith", date: "2025-05-09", amount: 275.50, status: "Pending" },
    { id: "INV-003", patient: "Robert Johnson", date: "2025-05-08", amount: 150.00, status: "Paid" },
    { id: "INV-004", patient: "Emily Davis", date: "2025-05-07", amount: 520.75, status: "Overdue" },
    { id: "INV-005", patient: "Michael Wilson", date: "2025-05-06", amount: 95.00, status: "Pending" },
  ];

  // Sample data for payments
  const payments = [
    { id: "PAY-001", patient: "John Doe", date: "2025-05-10", amount: 350.00, method: "Credit Card" },
    { id: "PAY-002", patient: "Robert Johnson", date: "2025-05-08", amount: 150.00, method: "Cash" },
    { id: "PAY-003", patient: "Sarah Adams", date: "2025-05-05", amount: 210.25, method: "Insurance" },
    { id: "PAY-004", patient: "David Miller", date: "2025-05-03", amount: 180.50, method: "Bank Transfer" },
    { id: "PAY-005", patient: "Emma Wilson", date: "2025-05-01", amount: 95.00, method: "Credit Card" },
  ];

  // Sample data for statistics
  const stats = [
    { title: "Total Revenue (Month)", value: "$12,450", trend: "+8.2% vs last month" },
    { title: "Outstanding Balance", value: "$3,240", trend: "+12.5% vs last month" },
    { title: "Payments Received", value: "$9,210", trend: "+5.3% vs last month" },
    { title: "Invoices Generated", value: "32", trend: "-2.1% vs last month" },
  ];

  // Helper function to render status badge
  const renderStatusBadge = (status) => {
    return <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>;
  };

  // Render the stats section
  const renderStats = () => {
    return (
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <p className="stat-number">{stat.value}</p>
            <p className={`stat-trend ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
              {stat.trend}
            </p>
          </div>
        ))}
      </div>
    );
  };

  // Render the overview tab content
  const renderOverviewTab = () => {
    return (
      <div className="overview-tab">
        <div className="card revenue-chart-card">
          <div className="card-header">
            <h3 className="card-title">Revenue Overview</h3>
            <p className="card-description">Monthly revenue for the current year</p>
          </div>
          <div className="card-content">
            <div className="chart-placeholder">
              <div className="chart-bars">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                  <div key={i} className="chart-bar" style={{height: `${Math.floor(55 + Math.random() * 40)}%`}}>
                    <span>{month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="overview-cards">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recent Invoices</h3>
            </div>
            <div className="card-content">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Invoice ID</th>
                    <th>Patient</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.slice(0, 3).map((invoice) => (
                    <tr key={invoice.id}>
                      <td>{invoice.id}</td>
                      <td>{invoice.patient}</td>
                      <td>${invoice.amount.toFixed(2)}</td>
                      <td>{renderStatusBadge(invoice.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <button className="view-all-btn" onClick={() => setActiveTab('invoices')}>
                View All Invoices
              </button>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recent Payments</h3>
            </div>
            <div className="card-content">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Payment ID</th>
                    <th>Patient</th>
                    <th>Amount</th>
                    <th>Method</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.slice(0, 3).map((payment) => (
                    <tr key={payment.id}>
                      <td>{payment.id}</td>
                      <td>{payment.patient}</td>
                      <td>${payment.amount.toFixed(2)}</td>
                      <td>{payment.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <button className="view-all-btn" onClick={() => setActiveTab('payments')}>
                View All Payments
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the invoices tab content
  const renderInvoicesTab = () => {
    return (
      <div className="invoices-tab">
        <div className="tab-actions">
          <div className="search-filter">
            <input type="text" placeholder="Search invoices..." />
            <select>
              <option value="all">All Statuses</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
          <button className="export-btn">Export</button>
        </div>
        
        <table className="custom-table full-width">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Patient</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.patient}</td>
                <td>{invoice.date}</td>
                <td>${invoice.amount.toFixed(2)}</td>
                <td>{renderStatusBadge(invoice.status)}</td>
                <td>
                  <div className="table-actions">
                    <button className="action-btn view">View</button>
                    <button className="action-btn edit">Edit</button>
                    <button className="action-btn delete">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="pagination">
          <button>Previous</button>
          <div className="pagination-numbers">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <button>Next</button>
        </div>
      </div>
    );
  };

  // Render the payments tab content
  const renderPaymentsTab = () => {
    return (
      <div className="payments-tab">
        <div className="tab-actions">
          <div className="search-filter">
            <input type="text" placeholder="Search payments..." />
            <select>
              <option value="all">All Methods</option>
              <option value="credit">Credit Card</option>
              <option value="cash">Cash</option>
              <option value="insurance">Insurance</option>
              <option value="transfer">Bank Transfer</option>
            </select>
          </div>
          <button className="export-btn">Export</button>
        </div>
        
        <table className="custom-table full-width">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Patient</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.patient}</td>
                <td>{payment.date}</td>
                <td>${payment.amount.toFixed(2)}</td>
                <td>{payment.method}</td>
                <td>
                  <div className="table-actions">
                    <button className="action-btn view">View</button>
                    <button className="action-btn print">Print</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="pagination">
          <button>Previous</button>
          <div className="pagination-numbers">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <button>Next</button>
        </div>
      </div>
    );
  };

  // Render the reports tab content
  const renderReportsTab = () => {
    return (
      <div className="reports-tab">
        <div className="reports-filters">
          <div className="date-range">
            <label>Date Range:</label>
            <select>
              <option>Last 30 days</option>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Quarter</option>
              <option>Custom Range</option>
            </select>
          </div>
          <button className="generate-report-btn">Generate Report</button>
        </div>
        
        <div className="reports-grid">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Revenue by Service Type</h3>
            </div>
            <div className="card-content">
              <div className="chart-placeholder pie-chart">
                <div className="pie-segments">
                  <div className="segment one"></div>
                  <div className="segment two"></div>
                  <div className="segment three"></div>
                  <div className="segment four"></div>
                </div>
              </div>
              <div className="chart-legend">
                <div className="legend-item"><span className="legend-color one"></span> Consultations (45%)</div>
                <div className="legend-item"><span className="legend-color two"></span> Laboratory (25%)</div>
                <div className="legend-item"><span className="legend-color three"></span> Procedures (20%)</div>
                <div className="legend-item"><span className="legend-color four"></span> Medications (10%)</div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Payment Methods Distribution</h3>
            </div>
            <div className="card-content">
              <div className="chart-placeholder pie-chart">
                <div className="pie-segments payment">
                  <div className="segment one"></div>
                  <div className="segment two"></div>
                  <div className="segment three"></div>
                </div>
              </div>
              <div className="chart-legend">
                <div className="legend-item"><span className="legend-color one"></span> Credit Card (60%)</div>
                <div className="legend-item"><span className="legend-color two"></span> Insurance (30%)</div>
                <div className="legend-item"><span className="legend-color three"></span> Cash/Others (10%)</div>
              </div>
            </div>
          </div>
          
          <div className="card full-width">
            <div className="card-header">
              <h3 className="card-title">Monthly Outstanding Balance</h3>
            </div>
            <div className="card-content">
              <div className="chart-placeholder">
                <div className="chart-bars">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                    <div key={i} className="chart-bar negative" style={{height: `${Math.floor(25 + Math.random() * 35)}%`}}>
                      <span>{month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="report-actions">
            <button className="report-btn">Download as PDF</button>
            <button className="report-btn">Export to Excel</button>
            <button className="report-btn">Print Report</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="containerDash">
      <Sidebar/>
      <div className="main-content">
        <Dash_header/>
        <div className="dashboard-header">
            <div>
              <h1>Billing Dashboard</h1>
              <p>Manage invoices, payments, and financial reports</p>
            </div>
            <button className="generate-invoice-btn">+ Generate New Invoice</button>
          </div>
          
          {renderStats()}
          
          <div className="dashboard-tabs">
            <button 
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}>
              Overview
            </button>
            <button 
              className={`tab-button ${activeTab === 'invoices' ? 'active' : ''}`}
              onClick={() => setActiveTab('invoices')}>
              Invoices
            </button>
            <button 
              className={`tab-button ${activeTab === 'payments' ? 'active' : ''}`}
              onClick={() => setActiveTab('payments')}>
              Payments
            </button>
            <button 
              className={`tab-button ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveTab('reports')}>
              Reports
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'overview' && renderOverviewTab()}
            {activeTab === 'invoices' && renderInvoicesTab()}
            {activeTab === 'payments' && renderPaymentsTab()}
            {activeTab === 'reports' && renderReportsTab()}
          </div>
      </div>
    </div>
  );
};

export default BillingDashboard;