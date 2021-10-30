import './App.css';
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import Footer from './Components/Footer/Footer';
import About from './Components/Home/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import Upcoming from './Components/Home/Upcoming/Upcoming';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Components/Home/HomePage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/aboutus' component={AboutUsPage} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
