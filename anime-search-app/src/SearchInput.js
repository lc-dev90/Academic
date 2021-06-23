import React, { useState } from "react";
import styled from "styled-components";
import useDebounce from "./useDebounce";

const SearchInput = ({ value, onChange }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  const handleChange = (e) => {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  };

  return <Search type="text" value={displayValue} onChange={handleChange} />;
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
