import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//ICONS
import arrow from '../assets/navbar/arrow.svg'; 
import search from '../assets/navbar/search.svg'; 

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <img src={arrow} />
        <Search>
          <Input placeholder="Search" />
          <img src={search} />
        </Search>
      </Wrapper>
    </Container>
  );
};

export default Navbar;