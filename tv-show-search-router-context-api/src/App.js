import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          {/* Homepage Route */}
          {/* About page Route */}
          {/* Single show details page Route */}
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
