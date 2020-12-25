import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import User from "./components/User";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/add" component={AddUser} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route exact path="/user/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
