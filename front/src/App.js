import './App.css';
import './style/normalize.css';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Logout from './pages/logout';
import Dash from './dashboard/pages/dash';
import Home from './pages/home';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';
import Add from './pages/add';
// start sash
import Charts from './dashboard/pages/charts';
import Pateint from './dashboard/pages/dash';
import Doctor from './dashboard/pages/doctors';
import Pharmacy from './dashboard/pages/pharmacy';
import Department from './dashboard/pages/department';
import Lap from './dashboard/pages/lap';
import Billing from './dashboard/pages/billing';
import Admin from './dashboard/pages/admin';
import Blockchain from './dashboard/pages/blockchain';
import Smart from './dashboard/pages/smart';
import Fire from './dashboard/pages/fire';
//end dash

function App() {
  return (
    <div className="App">
        {/* <h1>waleed</h1> */}
        {/*routes */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dash" element={<Dash/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/dash/" element={<Charts/>} />
          <Route path="/dash/pateint" element={<Pateint/>} />
          <Route path="/dash/doctor" element={<Doctor/>} />
          <Route path="/dash/pharmacy" element={<Pharmacy/>} />
          <Route path="/dash/lap" element={<Lap/>} />
          <Route path="/dash/billing" element={<Billing/>} />
          <Route path="/dash/department" element={<Department/>} />
          <Route path="/dash/admin" element={<Admin/>} />
          <Route path="/dash/blockchain" element={<Blockchain/>} />
          <Route path="/dash/smart" element={<Smart/>} />
          <Route path="/dash/fire" element={<Fire/>} />
        </Routes>
    </div>
  );
}

export default App;
