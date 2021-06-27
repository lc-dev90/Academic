import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MenuIcon from "./svg/bars-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import CloseIcon from "./svg/times-solid.svg";

const Header = () => {
  return (
    <header>
      <Menu>
        <img src={MenuIcon} alt="Menu Icon" width="20"></img>
      </Menu>
      <Logo>
        <Link to="/">
          <h1>Nike</h1>
        </Link>
      </Logo>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Login/Register</Link>
          </li>
          <li className="close">
            <img src={CloseIcon} alt="Close" width="20" />
          </li>
        </ul>
        <div className="nav-cart">
          <span>0</span>
          <img src={CartIcon} alt="Cart" width="20" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

const Menu = styled.div``;
const Logo = styled.div``;
