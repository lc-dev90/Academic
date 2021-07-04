import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      {/* logo */}
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart"></Link>
        </li>
      </ul>
      {/* hamburguer menu */}
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav``;
