import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/main'

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
            <Main />
            <Footer>
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
                            <Footer.IconContainer><Footer.Icon src="assets/icons/facebook.png"/></Footer.IconContainer>
                            <Footer.IconContainer><Footer.Icon  src="assets/icons/instagram.png"/></Footer.IconContainer>
                            <Footer.IconContainer><Footer.Icon  src="assets/icons/twitter.png"/></Footer.IconContainer>
                        </Footer.IconGroup>
                    </Footer.Column>
                </Footer.Row>
                <Footer.Row>
                    <Footer.BottomGroup>
                        <Footer.TextSmall>Legal</Footer.TextSmall>
                        <Footer.TextSmall>Privacy Center</Footer.TextSmall>
                        <Footer.TextSmall>Privacy Policy</Footer.TextSmall>
                        <Footer.TextSmall>Cookies</Footer.TextSmall>
                        <Footer.TextSmall>About Adds</Footer.TextSmall>
                    </Footer.BottomGroup>
                    <Footer.BottomGroup>
                        <Footer.IconGroup>
                            <Footer.TextSmall>Philippines</Footer.TextSmall>
                            <Footer.PhIcon />
                        </Footer.IconGroup>
                        <Footer.TextSmall>&copy; 2020 Flix By DauntlessDev</Footer.TextSmall>
                    </Footer.BottomGroup>
                </Footer.Row>
            </Footer>
        </>
    )
}
