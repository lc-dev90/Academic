import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DetailsPage from "./pages/DetailsPage";

//Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/details/:id" component={DetailsPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;
