import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { GlobalProvider } from "./components/GlobalContext";

import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <GlobalProvider>
      <Container>
        <Router>
          <Header />
          <Section />
        </Router>
      </Container>
    </GlobalProvider>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
