
import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Nav from "./components/layout/nav/Nav";
import DropNav from "./components/layout/dropnav/DropNav";
import ProjectsCards from "./components/projects/projectscards/ProjectsCards";
import Biographie from "./components/biographie/Biographie";
import Contact from "./components/contact/Contact";


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
        <Switch>
          <Route path="/projects">
            <Nav />
            <ProjectsCards />
          </Route>
          <Route path="/biographie">
              <Nav />
            <Biographie />
          </Route>
          <Route path="/contact">
            <Nav />
            <Contact />
          </Route>
          <Route path="/">
            <DropNav />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}


export default App;
