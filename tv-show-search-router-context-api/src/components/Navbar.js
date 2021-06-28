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
  padding: 1.5rem;
  background-color: #171717;
  .container {
    max-width: 1170px;
    margin: 0 auto;
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        a {
          color: #f4f4f4;
          text-decoration: none;
          i {
            margin-right: 10px;
          }
          :hover {
            color: #d1d1d1;
          }
        }
      }
      ul {
        display: flex;
        list-style: none;
        li {
          margin-left: 30px;
          a {
            text-decoration: none;
            text-transform: uppercase;
            color: #f4f4f4;
            font-weight: bolder;
            :hover {
              color: #d1d1d1;
            }
          }
        }
      }
    }
  }
`;
