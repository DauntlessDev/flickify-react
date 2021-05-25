
import * as ROUTES from "../../constants/routes";
import * as Header from "./headerStyles";
import { loginUrl } from "../../constants/spotify";

export default function HeaderContainer() {

  return (
    <Header.Container>
      <Header.Group>
        <Header.LogoLink to={ROUTES.HOME}>
          <Header.Logo src="/assets/logo.png" />
        </Header.LogoLink>
      </Header.Group>
      <Header.Group>
        {/* <Header.RedirectLink>Premium</Header.RedirectLink>
        <Header.RedirectLink>Help</Header.RedirectLink>
        <Header.RedirectLink>Download</Header.RedirectLink>
        <Header.Line /> */}
        <Header.TextLink to={ROUTES.SIGN_UP}>Sign Up</Header.TextLink>
        <Header.RedirectLink href={loginUrl}>Log In</Header.RedirectLink>
      </Header.Group>
    </Header.Container>
  );
}
