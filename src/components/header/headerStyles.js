import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom';


export const Container = styled.div`
    /* background: #001839; */
    background: black;
    color: white;
    flex-flow: row nowrap;
    display: flex;
    justify-content: space-between;
    padding: 5px 140px;
`;


export const Group = styled.div`
  display: inline-flex;
`;

export const LogoLink = styled(ReactRouterLink)`
`;

export const Logo = styled.img`
    height: 35px;
    padding: 10px;
`;

export const TextLink = styled(ReactRouterLink)`
    color: white;
    text-decoration: none;
    margin: auto 16px;
    font-size: 17px;
    font-weight: ${({ active }) => (active === 'true' ? '500' : 'normal')};
    cursor: pointer;
    font-family: Calibri, 'Trebuchet MS', sans-serif;


    &:hover {
        font-weight: bold;
    }
`;

export const Line = styled.div`
    margin: 5px 17px;
    width:1px;
    height: 20px;
    align-self: center;
    border-right: solid white 1px;
`;
