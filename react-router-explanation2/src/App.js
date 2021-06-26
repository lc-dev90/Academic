import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import { GlobalProvider } from "./providers/GlobalContext";
import "./App.css";

import Header from "./components/Header";
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter basename="tutorial">
        <div className="App">
          <Header />
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
