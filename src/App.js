import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import { Footer, Navbar, PreFooter, } from "./components";
import {
  HomePage,
  Earphones,
  ProductDetail,
  Headphones,
  Speakers,
  Error,
  hr,
  Checkout,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <hr />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/earphones">
          <Earphones />
        </Route>
        <Route exact path="/headphones">
          <Headphones />
        </Route>
        <Route exact path="/speakers">
          <Speakers />
        </Route>
        <Route exact path="/ProductDetail/:id" children={<ProductDetail />} />
        <Route exact path="*">
          <Error />
  </Route>
      </Switch>
      <PreFooter />
      <Footer />
    </Router>
  );
}

export default App;
