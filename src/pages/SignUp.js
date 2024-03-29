import React, { useEffect, useState } from "react";
import FooterContainer from "../components/footer/FooterContainer";
import * as Form from "../components/auth/authStyles";
import HeaderContainer from "../components/header/HeaderContainer";
import SignUpContainer from "../components/auth/SignUpContainer";

export default function SignUp() {
  return (
    <>
      <HeaderContainer />
      <Form.Container>
        <Form.Base>
          <SignUpContainer />
        </Form.Base>
        <Form.SideBackground />
      </Form.Container>
      <FooterContainer />
    </>
  );
}
