import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    background-color: gray;
    height: 680px;
    color: black;
`;
export const SideBackground = styled.img`
    height: 100%;
`;
export const Error = styled.div`

`;
export const Base = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
    background-color: white;
    padding: 50px 150px;
`;

export const Title = styled.h1`
    font-size: 25px;
`;



export const Input = styled.input`
    display: block;
    padding: 10px;
    margin: 15px 0;
`;



export const Text = styled.p`
    font-size: 15px;
`;

export const SubText = styled.p`
    font-size: 12px;
`;

export const TextLink = styled.a`
    font-weight: bold;
`;


export const SubmitButton = styled.button`
padding: 10px;
    `;