import React from "react";
import styled from "styled-components";

const Try = styled.div`
  color: red;
  &:hover {
    cursor: pointer;
  }
`;

const Navbars = () => {
  return (
    <>
      <p style={{ "&:hover": { cursor: "pointer" } }}>hello</p>
      <Try>hello2</Try>
    </>
  );
};

export default Navbars;
