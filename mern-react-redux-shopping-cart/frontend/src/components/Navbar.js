import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            Cart
            <span className="cartlogo__badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
      <div className="hamburguer__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav``;
