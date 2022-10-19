import React from "react";
import { NavContainer, Main, Heading } from "./styles";

interface PropsI {
  heading: string;
}

const Nav = ({ heading }: PropsI) => {
  return (
    <NavContainer>
      <Main>
        <Heading>{heading}</Heading>
      </Main>
    </NavContainer>
  );
};

export default Nav;
