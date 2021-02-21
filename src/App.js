import logo from './logo.svg';
import './App.css';
import './components/CssStyling.css';
import HomePage from './components/HomePage';
import NavigationBar from './components/NavigationBar';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
  <div style={{height:"100%"}}>
   <div style={{fontSize:"20px", fontWeight:"bold", paddingTop: "5px", paddingLeft: "10px"}}>Aakriti</div>
    <Router>
      <div className="NavMenu">
        <nav className="NavBarStyling">
          <ul>
            <li>
		<i className = "fa fa-home FontAwesomeStyling"> </i><Link to="/">Home</Link>
            </li>
            <li>
              <i className = "far fa-user FontAwesomeStyling"></i> <Link to="/aboutme">About Me</Link>
            </li>
	    <li>
              <i class="fas fa-briefcase FontAwesomeStyling"></i><Link to="/services">Services</Link>
            </li>
	    <li>
		<i class="fas fa-graduation-cap FontAwesomeStyling"></i><Link to="/experience">Experience</Link>
	    </li>
	    <li>
		<i class="fas fa-layer-group FontAwesomeStyling"></i><Link to="/work">Work</Link>
	    </li>
	    <li>
	    	<i class="far fa-address-book FontAwesomeStyling"></i><Link to="/contact">Contact</Link>
	    </li>
          </ul>
        </nav>
	</div>
	<div className="MainScreen">

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
	  <Route path="/services">
            <Services />
          </Route>
	  <Route path="/experience">
            <Experience />
          </Route>
	  <Route path="/work">
            <Work />
          </Route>
	  <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
   </div>
  );
}

