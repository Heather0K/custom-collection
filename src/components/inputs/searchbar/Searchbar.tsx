import React from "react";
import { SearchIcon } from "../../../shared/icons/SearchIcon";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  border: 2px solid #c7c4c4;
  height: 35px;
  border-radius: 15px;
  width: 300px;
  position: relative;
`;
const Search = styled(SearchIcon)`
  width: 24px;
  color: black;
  margin: 8px;
  position: absolute;
  z-index: 9;
  left: 0;
`;

const Input = styled.input`
  border: none;
  border-radius: 15px;
  width: 100%;
  padding: 0 40px;
  margin-bottom: 10px;
  text-transform: capitalize;
  display: flex;
  height: 100%;

  :hover {
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.03);
  }
`;

export const Searchbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search />
        <Input
          onKeyDown={() => {
            console.log("keydown");
          }}
          aria-label="search"
          placeholder="search"
        />
      </Wrapper>
    </Container>
  );
};
