import '../App.css';
import '../style/normalize.css';
import '../style/home_style.css';
import '../style/all.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Home (){

  return(
    <>
      <Header/>
      <div className='content'>
        <div className='container'>
        <div>
      <h2>User List</h2>
      <ul>
        {/* {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> – {user.email}
          </li>
        ))} */}
        {/* {console.log(users)} */}
      </ul>
    </div>

        </div>
      </div>
      <Footer/>
    </>
  );
}