import './App.css';
import './style/normalize.css';
import { Route, Routes, Link } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Dash from './pages/dash';
import Home from './pages/home';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
        {/* <Mytton /> */}
        {/*routes */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dash" element={<Dash/>} />
        </Routes>
    </div>
  );
}

export default App;
