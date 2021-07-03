import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route>404 not Found!</Route>
      </Router>
    </div>
  );
};

export default App;
