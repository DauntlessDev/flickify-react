import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import * as Header from './headerStyles'

export default function HeaderContainer() {
    return (
        <Header.Container>
            <Header.Group>
                <Header.Logo src='/assets/logo.png' />
            </Header.Group>
            <Header.Group>
                <Header.TextLink>Premium</Header.TextLink>
                <Header.TextLink>Help</Header.TextLink>
                <Header.TextLink>Download</Header.TextLink>
                <Header.TextLink>Sign Up</Header.TextLink>
                <Header.Line />
                <Header.TextLink>Log In</Header.TextLink>
            </Header.Group>
        </Header.Container>
    )
}
