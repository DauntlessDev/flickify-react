import * as Footer from "./footerStyles";
import React from "react";

export default function FooterContainer() {
  return (
    <Footer.Container>
      <Footer.Row>
        <Footer.Column>
          <Footer.Title>Company</Footer.Title>
          <Footer.Text>About</Footer.Text>
          <Footer.Text>Jobs</Footer.Text>
          <Footer.Text>For the Record</Footer.Text>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Coomunities</Footer.Title>
          <Footer.Text>For Artists</Footer.Text>
          <Footer.Text>Developers</Footer.Text>
          <Footer.Text>Advertising</Footer.Text>
          <Footer.Text>Investors</Footer.Text>
          <Footer.Text>Vendors</Footer.Text>
        </Footer.Column>
        <Footer.Column>
          <Footer.Title>Useful Links</Footer.Title>
          <Footer.Text>Help</Footer.Text>
          <Footer.Text>Web Player</Footer.Text>
          <Footer.Text>Free Mobile App</Footer.Text>
          <Footer.Text>2020 Wrapped</Footer.Text>
        </Footer.Column>
        <Footer.Column>
          <Footer.IconGroup>
            <Footer.IconContainer>
              <Footer.Icon src="assets/icons/facebook.png" />
            </Footer.IconContainer>
            <Footer.IconContainer>
              <Footer.Icon src="assets/icons/instagram.png" />
            </Footer.IconContainer>
            <Footer.IconContainer>
              <Footer.Icon src="assets/icons/twitter.png" />
            </Footer.IconContainer>
          </Footer.IconGroup>
        </Footer.Column>
      </Footer.Row>
      <Footer.Row>
        <Footer.BottomGroup>
          <Footer.TextSmall>Legal</Footer.TextSmall>
          <Footer.TextSmall>Privacy Center</Footer.TextSmall>
          <Footer.TextSmall>Privacy Policy</Footer.TextSmall>
          <Footer.TextSmall>Cookies</Footer.TextSmall>
          <Footer.TextSmall>About Us</Footer.TextSmall>
        </Footer.BottomGroup>
        <Footer.BottomGroup>
          <Footer.IconGroup>
            <Footer.TextSmall>Philippines</Footer.TextSmall>
            {/* <Footer.PhIcon /> */}
          </Footer.IconGroup>
          <Footer.TextSmall>&copy; 2020 Flix By DauntlessDev</Footer.TextSmall>
        </Footer.BottomGroup>
      </Footer.Row>
    </Footer.Container>
  );
}
