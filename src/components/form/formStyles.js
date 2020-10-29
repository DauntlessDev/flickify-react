import styled from 'styled-components/macro'

export const Container = styled.div`
    width: 100%;
    display: inline-flex;
    background-color: gray;
    height: 700px;
`;

export const Error = styled.div`

`;
export const Base = styled.div`
    width: 50%;
    background-color: rgb(4, 7, 68);
    padding: 50px 100px;
    margin: ${({ side }) => (side === 'left' ? '0 auto 0 0' : '0 0 0 auto')};
`;

export const Title = styled.h1`
    font-size: 25px;
`;



export const Input = styled.input`
    display: block;
    padding: 10px;
    margin: 30px 0;
    background-color: gray;
    color: white;
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
    `;