import React from "react";
import {
  Header,
  Nav,
  Home,
  Reviews,
  ReviewById,
  Comments,
  Footer,
} from "./components/All";

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
            <Comments />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
