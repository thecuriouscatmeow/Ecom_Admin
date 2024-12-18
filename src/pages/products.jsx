import React, { useEffect, useState } from "react";
// import axios from "axios";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Products = ({type}) => {
  return (
    <Container> 
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container> 
  );
};

export default Products;