import styled from 'styled-components/macro'


export const Container = styled.div`
    background: #001839;
    color: white;
    flex-flow: row nowrap;
    display: flex;
    justify-content: space-between;
    padding: 0px 100px;
`;


export const Group = styled.div`
  display: inline-flex;
`;

export const Logo = styled.img`
    height: 50px;
`;

export const Link = styled.p`
    text-decoration: none;
    margin: auto 17px;
    font-size: 16px;
    font-weight: ${({ active }) => (active === 'true' ? '500' : 'normal')};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }
`;

export const Line = styled.p`
    width:1px;
    border-right: solid white 1px;
`;
