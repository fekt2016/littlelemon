import "./App.css";
import React from "react";

import Header from "./components/Header";
import Nav from "./components/Nav/Nav";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";

import About from "./pages/About";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Switch>
        <Route path="/home" exact>
        <Main />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/reservations">
          <Reservations />
        </Route>
        <Route path="/orderonline">
          <OrderOnline />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
