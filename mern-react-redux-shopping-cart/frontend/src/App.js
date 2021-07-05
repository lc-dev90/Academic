import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

/* Components */
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar setSideToggle={setSideToggle} />
        <SideDrawer show={sideToggle} setSideToggle={setSideToggle} />
        <Backdrop show={sideToggle} setSideToggle={setSideToggle} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
