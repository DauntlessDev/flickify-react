import React from "react";
import * as Form from "./authStyles";

export default function SignUpContainer() {
  return (
    <>
      <Form.Title>Create Account</Form.Title>
      <Form.Error>
        Dev-note: due to usage of spotify api signing-up does not work.
      </Form.Error>
      <Form.Input type="text" placeholder="Username" />
      <Form.Input type="email" placeholder="Email Address" />
      <Form.Input type="password" placeholder="Password" />
      <Form.Input type="password" placeholder="Confirm Password" />
      <Form.Text>
        Has an account? <Form.TextLink>Sign In now.</Form.TextLink>
      </Form.Text>
      <Form.SubText>
        This page is protected by Google reCAPTCHA to ensure you'are not a bot.
        Learn More.
      </Form.SubText>
      <Form.SubmitButton>Submit</Form.SubmitButton>
    </>
  );
}
