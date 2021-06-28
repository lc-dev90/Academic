import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <nav>
          <h3>
            <Link to="/">
              <i className="fas fa-video"></i> TV SHOW SEARCH
            </Link>
          </h3>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  height: 80px;
  background-color: black;
  .container {
    max-width: 1170px;
    margin: 0 auto;
    height: 100%;
    nav {
      display: flex;
      align-items: center;
      height: 100%;
      justify-content: space-between;
      h3 {
        a {
          color: white;
          text-decoration: none;
          i {
            margin-right: 10px;
          }
        }
      }
      ul {
        display: flex;
        li {
          margin-left: 30px;
          a {
            text-decoration: none;
            text-transform: uppercase;
            color: white;
            font-weight: bolder;
          }
        }
      }
    }
  }
`;
