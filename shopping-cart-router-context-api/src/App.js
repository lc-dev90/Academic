import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <Container>
      <Router>
        <Header />
        <Section />
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
