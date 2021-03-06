import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollRestoration from "react-scroll-restoration";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Cart from "./components/Cart.jsx";
import Thanking from "./components/Thanking.js";

function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <div className="text-center shipping-text">
        Free shipping on over &#8377;500
      </div>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/thanking" component={Thanking} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
