
export default function Sidebar(){

  function con( par){
    if(par==="doc"){
      alert(par);
    }else if(par==="phar"){
      alert(par);
    }
  }
    return(
        <nav className="sidebar">
          <h1 className="logo">HosGenZy</h1>
        <ui className="nav-links">
          <li className="nav-item">🏥 Hospital Management</li>
          <li  className="nav-item">👥 Patient Appointment</li>
          <li onClick={ () =>con("doc")} className="doctor nav-item">💊 Doctor</li>
          <li  className="nav-item">📊 EHR System</li>
          <li onClick={ () =>con("phar")} className="nav-item">💊 Pharmacy</li>
          <li  className="nav-item">🚗 Smart Garage</li>
          <li  className="nav-item">🔥 Fire Detection</li>
          <li  className="nav-item">⛓️ Blockchain Unit</li>
          <li  className="nav-item">⚙️ Admin Panel</li>
          <li  className="nav-item">ℹ️ About Us</li>
          <li  className="nav-item">📞 Contact</li>
          <li  className="nav-item">🔒 Privacy</li>
        </ui>
      </nav>
    );
}