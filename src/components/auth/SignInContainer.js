import React from 'react'
import * as Form from './authStyles'

export default function SignInContainer() {
    return (
        <>
            <Form.Title>Log in</Form.Title>
            <Form.Input type="email" placeholder="Email Address" />
            <Form.Input type="password" placeholder="Password" />
            <Form.Text>New to Flick? <Form.TextLink >
                Sign Up now.</Form.TextLink>
            </Form.Text>
            <Form.SubText>
                This page is protected by Google reCAPTCHA to ensure you'are not a  bot. Learn More.
            </Form.SubText>
            <Form.SubmitButton>Submit</Form.SubmitButton>
        </>
    )
}
