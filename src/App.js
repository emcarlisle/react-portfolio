import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Switch>
    </Router>

  )
}

export default App;