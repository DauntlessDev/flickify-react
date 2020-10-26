
import React from 'react'
import { BottomGroup, Container, Icon, IconContainer, IconGroup, Text, TextSmall, FixedBottomInfo, PhIcon, Column, Row, Title, Group } from './styles/footer'

export default function Footer({ children, restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}
Footer.Row = function FooterGroup({ children, ...restProps }) {
    return <Row {...restProps}>
        {children}
    </Row>
}
Footer.Text = function FooterRow({ children, ...restProps }) {
    return <Text {...restProps}>
        {children}
    </Text>
}
Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Column {...restProps}>
        {children}
    </Column>
}
Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>
        {children}
    </Title>
}

Footer.BottomGroup = function FooterBottomGroup({ children, ...restProps }) {
    return <BottomGroup {...restProps}>
        {children}
    </BottomGroup>
}
Footer.IconGroup = function FooterIconGroup({ children, ...restProps }) {
    return <IconGroup {...restProps}>
        {children}
    </IconGroup>
}


Footer.Icon = function FooterIcon({ src, ...restProps }) {
    return <Icon src={src} {...restProps} />
}

Footer.IconContainer = function FooterIconContainer({ children, ...restProps }) {
    return <IconContainer {...restProps}>
        {children}
    </IconContainer>
}

Footer.TextSmall = function FooterTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>
        {children}
    </TextSmall>
}

Footer.FixedBottomInfo = function FooterFixedBottomInfo({ children, ...restProps }) {
    return <FixedBottomInfo {...restProps}>
        {children}
    </FixedBottomInfo>
}

Footer.PhIcon = function FooterPhIcon({ src, ...restProps }) {
    return <PhIcon src={src}  {...restProps} />
}