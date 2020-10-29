import React from 'react'
import FooterContainer from '../components/footer/FooterContainer'
import * as Form from '../components/form/formStyles'
import HeaderContainer from '../components/header/HeaderContainer'

export default function SignIn() {
    return (<>

        <HeaderContainer />
        <Form.Container>
            <Form.Base side='left'>
                yo
        </Form.Base>
            <Form.Base side='right'>
                <Form.Title>Log in</Form.Title>
                <Form.Input type="email" placeholder="Email Address" />
                <Form.Input type="password" placeholder="Password" />
                <Form.Text>New to Flick? <Form.TextLink >
                    Sign Up now.</Form.TextLink>
                </Form.Text>
                <Form.SubText>This page is protected by Google reCAPTCHA to ensure you'are not a  bot. Learn More.
                    </Form.SubText>
                <Form.SubmitButton>Submit</Form.SubmitButton>
            </Form.Base>
        </Form.Container>
        <FooterContainer />
    </>

    )
}
