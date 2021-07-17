import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";

import Home from "./pages/Home";
import UseState from "./pages/UseState";
import UseContext from "./pages/UseContext";
import UseRef from "./pages/UseRef";
import UseCallBack from "./pages/UseCallBack";
import UseMemo from "./pages/UseMemo";
import UseReducer from "./pages/UseReducer";
import UseCustom from "./pages/UseCustom";
import UseEffect from "./pages/UseEffect";

function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/usestate" component={UseState} />
        <Route exact path="/useref" component={UseRef} />
        <Route exact path="/usereducer" component={UseReducer} />
        <Route exact path="/usememo" component={UseMemo} />
        <Route exact path="/useeffect" component={UseEffect} />
        <Route exact path="/usecustom" component={UseCustom} />
        <Route exact path="/usecontext" component={UseContext} />
        <Route exact path="/usecallback" component={UseCallBack} />
      </Switch>
    </Router>
  );
}

export default App;
