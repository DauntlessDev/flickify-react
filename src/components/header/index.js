import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Container, Group, Line, Link as TextLink, Logo, Picture } from './styles/header'

export default function Header({ children, restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.TextLinks = function HeaderTextLinks({ children, ...restProps }) {
    return <TextLink {...restProps}>{children}</TextLink>
}


Header.Logo = function HeaderLogo({ src, ...restProps }) {
    return <Logo src={`/assets/${src}.png`} {...restProps} />
}


Header.Line = function HeaderLine({ src, ...restProps }) {
    return <Line {...restProps} />
}
