import React from 'react'
import FooterContainer from '../components/footer/FooterContainer'
import * as Form from '../components/auth/authStyles'
import HeaderContainer from '../components/header/HeaderContainer'
import SignInContainer from '../components/auth/SignInContainer';

export default function SignIn() {
    return (<>
        <HeaderContainer />
        <Form.Container>
            <Form.Base>
                <SignInContainer />
            </Form.Base>
            <Form.SideBackground src="assets/background/side-background.png" />
        </Form.Container>
        <FooterContainer />
    </>

    )
}
