import React, { useState } from "react";
import styled from "styled-components";

//Components
import Alert from "./Alert";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <Search>
      <form onSubmit={handleSubmitForm}>
        <Alert message="Please, enter something" type="alert-danger" />
        <input
          type="text"
          placeholder="Search for Tv Show"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input type="submit" value="SEARCH" />
      </form>
    </Search>
  );
};

export default Searchbar;

const Search = styled.div`
  margin: 50px 0;
  form {
    position: relative;
    input {
      width: 100%;
      padding: 10px 17px;
      font-size: 20px;
      :nth-of-type(1) {
        margin-bottom: 25px;
        background-color: #f0f0f0;
        border: 1px solid black;
      }
      :nth-of-type(2) {
        background-color: black;
        color: white;
        border: 1px solid black;
        cursor: pointer;
        box-shadow: 0 1px 3px black;
        :hover {
          background-color: #212121;
        }

        :active {
          transform: translateY(1px);
          box-shadow: 0 1px 1px black;
        }
      }
    }
  }
`;
