import React from "react";
import * as component from "./components/All";
import NotFound from "./components/NotFound";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <component.Header />
        <component.Nav />
        <Switch>
          <Route path="/" exact>
            <component.Home />
          </Route>
          <Route path="/reviews" exact>
            <component.Reviews />
          </Route>
          <Route path="/reviews/:category" exact>
            <component.Reviews />
          </Route>
          <Route path="/reviews/id/:review_id" exact>
            <component.ReviewById />
            <component.Comments />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <component.Footer />
      </Router>
    </div>
  );
}

export default App;
