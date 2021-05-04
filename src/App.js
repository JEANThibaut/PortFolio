
import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Nav from "./components/layout/nav/Nav"
import Projects from "./components/projects/Projects"
import Biographie from "./components/biographie/Biographie"
import Contact from "./components/contact/Contact"


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){
  return(
    <div>
      <Header />
      <Router>
        <Nav />
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/biographie">
          <Biographie />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
      <Footer />
    </div>
  )
}


export default App;
