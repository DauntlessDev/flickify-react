import styled from 'styled-components/macro'

export const Container = styled.div`
    height: 700px;
    background: url(${({ src }) => (src ? `../assets/background/${src}.png` : '../assets/background/homeheader.png')}) top left / cover
    no-repeat;


    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }

    `;


export const Button = styled.button`
    position: relative;
    top: 457px;
    left: 210px;
    padding: 12px 25px;
    font-size: 18px;
    border-radius: 20px;
    border-style: none;

    &:hover {
        font-weight: bold;
        background-color: black;
        color: white;
        transition: 0.3;
    }

    @media (min-width: 1640px) {
        display: none;
    }
    `;