import '../App.css';
import '../style/normalize.css';
import '../style/home_style.css';
import '../style/all.min.css';
import {Link }from "react-router-dom";
import Logo from "../images/WhatsApp Image 2025-04-02 at 12.07.52 PM.jpeg";

export default function Header(){
  const user = JSON.parse(localStorage.getItem('user'));
    return(
        <div className='header'>
        <div className='container'>
          <img className='logo' src={Logo} alt='logo' />
          <div className='links'>
            <ui>
              <li>
                <Link  to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link className='lst' to="/contact">Contact</Link>
              </li>
            </ui>
          </div>
          <div className='search'>
            <input className='search_in' type='text'/>
            <div className='search_icon'>
             <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className='notifications'>
            <i class="fa-solid fa-bell"></i>
          </div>
          <div className='status'>
            <div className='login'>
              {/* <Link to="/login">Login</Link> */}
              {user ? (
                <Link to="/profile">{user.name}</Link>
                ) : (
                <Link to="/login">Login</Link>
                )}
            </div>
            <div className='line'>|</div>
            <div className='register'>
              
              {user ? (
                <Link to="/logout">Logout</Link>
                ) : (
                  <Link to="/register">Register</Link>
                )}
            </div>
          </div>
        </div>
      </div>
    );
}