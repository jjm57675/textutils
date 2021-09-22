
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
