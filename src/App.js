import './App.css';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import Footer from './Components/Footer/Footer';
import About from './Components/Home/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import Upcoming from './Components/Home/Upcoming/Upcoming';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Upcoming/>
      <AboutUsPage/>
      <Footer/>
    </div>
  );
}

export default App;
