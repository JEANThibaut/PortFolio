
import './App.css';
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Nav from "./components/layout/nav/Nav"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App(){
  return(
    <div>
      <Header />
      <Nav />
      <Footer />
    </div>
  )
}


export default App;
