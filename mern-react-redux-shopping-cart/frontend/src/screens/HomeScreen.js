import React from "react";
import styled from "styled-components";

//components
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <Home>
      <h2>Latest product</h2>
      <div className="products">
        <Product />
      </div>
    </Home>
  );
};

export default HomeScreen;

const Home = styled.div`
  max-width: 1300px;
  margin: 1rem auto;
  h2 {
    font-size: 1.5rem;
    color: #171717;
    margin-bottom: 1rem;
    margin-left: 8px;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1232px) {
    .products {
      grid-template-columns: repeat(3, auto);
    }
  }

  @media (max-width: 950px) {
    .products {
      grid-template-columns: repeat(2, auto);
    }
  }

  @media (max-width: 630px) {
    .products {
      grid-template-columns: 1fr;
    }
  }
`;
