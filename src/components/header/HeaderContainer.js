import React from "react";
import * as ROUTES from "../../constants/routes";
import { Link as ReactRouterLink } from "react-router-dom";
import * as Header from "./headerStyles";

export default function HeaderContainer() {
  return (
    <Header.Container>
      <Header.Group>
        <Header.LogoLink to={ROUTES.HOME}>
          <Header.Logo src="/assets/logo.png" />
        </Header.LogoLink>
      </Header.Group>
      <Header.Group>
        <Header.TextLink>Premium</Header.TextLink>
        <Header.TextLink>Help</Header.TextLink>
        <Header.TextLink>Download</Header.TextLink>
        <Header.Line />
        <Header.TextLink to={ROUTES.SIGN_UP}>Sign Up</Header.TextLink>
        <Header.TextLink to={ROUTES.SIGN_IN}>Log In</Header.TextLink>
      </Header.Group>
    </Header.Container>
  );
}
