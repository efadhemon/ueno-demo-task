
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home/Home/Home';
import { useEffect } from 'react';
import About from './components/About/About';
import Service from './components/Service/Service';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/service">
          <Service/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
