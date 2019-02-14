import React, { Component } from "react";
import "./App.css";
import "./style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/catalog" component={Catalog} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
