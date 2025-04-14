import '../App.css';
import '../style/normalize.css';
import '../style/home_style.css';
import '../style/all.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home (){
  return(
    <div>
      <Header/>
      <div className='content'>
        <div className='container'>
          <h1>content</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}