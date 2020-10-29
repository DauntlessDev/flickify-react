import React from 'react'
import * as Form from '../components/form/formStyles'

export default function SignIn() {
    return (
        <>
            <Form.Container>
                <Form.Base>
                    <Form.Title>Log in</Form.Title>
                    <Form.Input type="text" placeholder="Username" />
                    <Form.Input type="email" placeholder="Email Address" />
                    <Form.Input type="password" placeholder="Password" />
                    <Form.Input type="password" placeholder="Confirm Password" />
                    <Form.Text>New to Flick? <Form.TextLink >
                        Sign Up now.</Form.TextLink>
                    </Form.Text>
                    <Form.SubText>This page is protected by Google reCAPTCHA to ensure you'are not a  bot. Learn More.
                    </Form.SubText>
                    <Form.SubmitButton>Submit</Form.SubmitButton>
                </Form.Base>
            </Form.Container>
        </>
    )
}
