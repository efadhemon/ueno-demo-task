
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Shared/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Home from './components/Home/Home/Home';
import { useEffect } from 'react';

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
      </Switch>
    </Router>
  );
}

export default App;
