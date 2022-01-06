import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  SingleProduct,
  Checkout,
  About,
  PrivateRoute,
  Products,
  Cart,
  Error,
} from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" children={<SingleProduct />} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
