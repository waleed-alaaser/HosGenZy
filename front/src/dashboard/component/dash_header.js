
export default function Dash_header(){
    return(
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
    );
}