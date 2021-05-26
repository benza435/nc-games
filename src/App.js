import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import ReviewById from "./components/ReviewById";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/reviews" exact>
            <Reviews />
          </Route>
          <Route path="/reviews/:category" exact>
            <Reviews />
          </Route>
          <Route path="/reviews/id/:review_id" exact>
            <ReviewById />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
