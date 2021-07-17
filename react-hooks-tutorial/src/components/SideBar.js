import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBar = () => {
  return (
    <SideContainer>
      <NavLink exact to="/">
        <h3>React Hooks</h3>
      </NavLink>
      <ul>
        <NavLink exact to="/usestate">
          <li>UseState</li>
        </NavLink>
        <NavLink exact to="/useeffect">
          <li>UseEffect</li>
        </NavLink>
        <NavLink exact to="/usememo">
          <li>UseMemo</li>
        </NavLink>
        <NavLink exact to="/useref">
          <li>UseRef</li>
        </NavLink>
        <NavLink exact to="/usecontext">
          <li>UseContext</li>
        </NavLink>
        <NavLink exact to="/usereducer">
          <li>UseReducer</li>
        </NavLink>
        <NavLink exact to="/usecallback">
          <li>UseCallback</li>
        </NavLink>
        <NavLink exact to="/usecustom">
          <li>Custom Hooks</li>
        </NavLink>
      </ul>
    </SideContainer>
  );
};

export default SideBar;

const SideContainer = styled.div`
  width: 200px;
  text-align: center;
  background-color: black;
  color: white;
  height: 100%;
  padding: 20px;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 30;
  a {
    margin-bottom: 34px;
    display: inline-block;
    text-decoration: none;
    color: white;
  }
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 85vh;
    width: 100%;
    a {
      text-decoration: none;
      color: white;
      margin-bottom: 0px;
    }
  }
`;
