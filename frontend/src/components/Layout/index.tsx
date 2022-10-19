import * as React from "react";

import Nav from "../Nav";

import { Container, Content } from "./styles";

interface PropsI {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsI) => {
  return (
    <Container>
      <Nav heading="Recent Moans" />

      <Content>{children}</Content>
    </Container>
  );
};
export default Layout;
