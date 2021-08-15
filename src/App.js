import React from "react";
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import ScrollRestoration from "react-scroll-restoration";
import Navbar from "./components/Navbar.js"

function App() {
  return (
    <BrowserRouter>
    <ScrollRestoration/>
    <div className="App">
      <Navbar/>
        <Switch>


        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
