import styled from 'styled-components/macro'

export const Container = styled.div`
    background: #000000;
    color: white;
    flex-flow: column nowrap;
    display: flex;
    justify-content: space-between;
    padding: 0px 100px;

    @media (min-width: 900px){
        padding: 0px 300px 0;
        margin-bottom: 0px;
    }

`;

export const Row = styled.div`
    flex-flow: row;
    @media (min-width: 900px){
        flex-flow: row nowrap;
        justify-content: space-between;
        display: flex;
        margin-bottom: 0px;
    }

    &:first-child{
        margin-bottom: 100px;
    }

`;
export const Column = styled.div`
    flex-flow: column;
        padding-top: 50px;
    @media (min-width: 900px){
        padding-right: 20px;
        margin-right:20px;
    }

`;

export const Title = styled.h1`
    font-size: 15px;
    color: gray;
    text-transform: uppercase;
    letter-spacing: 1.4px;
`;

export const Text = styled.p`
    margin-right: 10px;
    font-size: 16px;
    color:white;
    font-family: Calibri, 'Trebuchet MS', sans-serif;

    &:hover{
        color: lightskyblue;
        cursor: pointer;
    }
`;

export const BottomGroup = styled.div`
display: flex;
flex-flow: row;
`;

export const IconGroup = styled.div`
    display: flex;
    flex-flow: row;
`;

export const Icon = styled.img`  width: 30px;
/* height: 30px; */
`;

export const IconContainer = styled.div`
    padding: 5px 7px;
  
background:white;
    margin: 5px;
    border-radius: 30px;
`;

export const TextSmall = styled.p`
padding: 10px;
font-size: 12px;
color: gray;
    &:hover{
        color: lightskyblue;
        cursor: pointer;
    }
`;

export const FixedBottomInfo = styled.div`
`;
export const PhIcon = styled.img``;
