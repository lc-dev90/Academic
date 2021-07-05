import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideDrawer = ({ show, setSideToggle }) => {
  return (
    <Side show={show}>
      <ul onClick={setSideToggle((prevState) => !prevState)}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span>0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </Side>
  );
};

export default SideDrawer;

const Side = styled.div`
  width: 70%;
  background: #fff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  transform: ${(props) =>
    props.show ? "transform: translateX(0)" : "translateX(-100%)"};
  transition: all 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 960px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      display: flex;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        text-align: center;
        padding: 1rem;
        text-decoration: none;
        color: #171717;
        font-size: 1.6rem;

        &:hover {
          background: #171717;
          color: #f4f4f4;
          span {
            span {
              color: #171717;
              background: #f4f4f4;
            }
          }
        }

        span {
          display: flex;
          align-items: center;
          margin-left: 8px;
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #171717;
            color: #f4f4f4;
            font-size: 1.5rem;
            margin-left: 8px;
          }
        }
      }
    }
  }
`;
