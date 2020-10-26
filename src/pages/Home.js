import React from 'react'
import Header from '../components/header'

export default function Home() {
    return (
        <>
            <Header>
                <Header.Group>
                    <Header.Logo src='logo' />
                </Header.Group>
                <Header.Group>
                    <Header.TextLinks>Premium</Header.TextLinks>
                    <Header.TextLinks>Help</Header.TextLinks>
                    <Header.TextLinks>Download</Header.TextLinks>
                    <Header.TextLinks>Sign Up</Header.TextLinks>
                    <Header.Line />
                    <Header.TextLinks>Log In</Header.TextLinks>
                </Header.Group>
            </Header>
        </>
    )
}
