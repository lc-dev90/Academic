import React from "react";
import styled from "styled-components";

const SearchInput = ({ value, onChange }) => {
  return (
    <Search
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;

const Search = styled.input`
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid black;
  width: 450px;
  max-width: 95%;
`;
