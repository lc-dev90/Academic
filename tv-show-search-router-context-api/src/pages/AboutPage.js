import React from "react";
import styled from "styled-components";

const AboutPage = () => {
  return (
    <About>
      <h3 className="about__title">ABOUT PAGE</h3>
      <div className="about__info">
        <p>Tv Show Search App (v1.0)</p>
        <div>
          <p>Things learn from app build:</p>
          <ul>
            <li>React (create-react-app)</li>
            <li>Basic CSS & HTML</li>
            <li>Axios AJAX Request</li>
            <li>TVMAZE API (https://www.tvmaze.com/api)</li>
            <li>React Router</li>
            <li>React Context API</li>
            <li>Deploying to Netlify</li>
          </ul>
        </div>
      </div>
    </About>
  );
};

export default AboutPage;

const About = styled.div`
  margin: 40px 0;
  h3 {
    margin: 22px 0;
    font-size: 25px;
  }
  .about__info {
    p {
      font-size: 18px;
      margin-top: 20px;
      margin-bottom: 10px;
      text-decoration: uppercase;
    }
    ul {
      list-style: none;
      li {
        margin-bottom: 5px;
      }
    }
  }
`;
