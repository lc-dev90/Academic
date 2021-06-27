import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MenuIcon from "./svg/bars-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import CloseIcon from "./svg/times-solid.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <HeaderContainer>
      <div className="menu" onClick={() => setToggle(!toggle)}>
        <img src={MenuIcon} alt="Menu Icon" width="20"></img>
      </div>
      <Logo>
        <Link to="/">
          <h1>Nike</h1>
        </Link>
      </Logo>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
          <li className="close" onClick={() => setToggle(!toggle)}>
            <img src={CloseIcon} alt="Close" width="20" />
          </li>
        </ul>
        <div className="nav-cart">
          <span>0</span>
          <Link to="/cart">
            <img src={CartIcon} alt="Cart" width="20" />
          </Link>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  min-height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  .menu,
  .close {
    cursor: pointer;
    display: none;
  }
  nav {
    display: flex;
    ul {
      li {
        list-style: none;
        display: inline-block;
        a {
          text-decoration: none;
          text-transform: uppercase;
          color: #555;
          padding: 0 15px;
          &:hover {
            color: lightseagreen;
          }
        }
      }
    }
    .nav-cart {
      cursor: pointer;
      position: relative;
      span {
        position: absolute;
        top: -12px;
        right: -7px;
        background: crimson;
        font-size: 10px;
        color: white;
        padding: 3px 5px;
        border-radius: 50%;
        z-index: -1;
      }
    }
  }
  @media (max-width: 650px) {
    ul {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      background: white;
      z-index: 99;
      opacity: 0.97;
      transition: 0.5s linear;
    }
    .menu,
    .close {
      display: block;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 20px;
    }
    ul.toggle {
      top: 0;
    }
  }
`;

const Logo = styled.div`
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
  }
`;
