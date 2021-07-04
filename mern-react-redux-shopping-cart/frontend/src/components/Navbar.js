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
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo__badge">0</span>
            </span>
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

const Nav = styled.nav`
  width: 100%;
  background: #171717;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
  z-index: 50;
  height: 110px;

  .navbar__logo {
    color: #f4f4f4;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .hamburguer__menu {
    width: 30px;
    height: 30px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    div {
      width: 100%;
      height: 4px;
      background: #f3f3f3;
    }

    &:hover {
      div {
        background: #dd219e;
      }
    }
  }

  .navbar__links {
    display: flex;
    align-items: center;

    li {
      padding-left: 1.5rem;
      .cart__link {
        background: #333;
        border-radius: 8px;
        padding: 10px;
        &:hover {
          background: #dd219e;
          color: #f4f4f4;
        }
      }

      a {
        color: #f4f4f4;
        font-size: 1.2rem;
        display: flex;
        align-items: center;

        span {
          display: flex;
          align-items: center;
          margin-left: 8px;
          .cartlogo__badge {
            width: 30px;
            height: 30px;
            margin-left: 8px;
            background: #f4f4f4;
            border-radius: 50%;
            color: #171717;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .navbar__links {
      display: none;
    }

    .hamburguer__menu {
      display: flex;
    }
  }
  @media (max-width: 500px) {
    .navbar__logo {
      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
