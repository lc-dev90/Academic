import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a>
          <img src="images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="images/original-icon.svg" alt="original" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="images/movie-icon.svg" alt="movies" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="images/series-icon.svg" alt="serie" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://pbs.twimg.com/profile_images/1393509631197163524/6UqNQddM_400x400.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  min-height: 70px;
  background: #090b13;
  display: flex;

  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  flex-wrap: wrap;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        width: 0px;
        opacity: 0;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span{

      &::after {
        opacity: 1;
        width: 98%;
        position: absolute;
      }
    }
  }
`;

const UserImg = styled.img`
  max-width: 100%;
  height: 48px;
  width: 48px;
  border-radius: 50%;
`;
