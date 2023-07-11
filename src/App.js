import React from "react";
import "./App.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page2 from "./components/Page2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="mainbody">
      {/* <Navbar/>
        <Header/>
        <center><h1 className='contact'>For any business or promotion contact me <span><MDBIcon fas icon="envelope" /></span> ajatinpatel@gmail.com</h1></center>
        <Footer/> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
