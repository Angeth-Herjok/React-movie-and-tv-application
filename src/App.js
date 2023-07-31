// import logo from './logo.svg';
import GetMovies from './Components/GetMovies';
import './App.css';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
// import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div>
      <Navigation/>
      <GetMovies/>
      <Footer/>

    </div>
  );
}

export default App;
