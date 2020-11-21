import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  background-color: gray;
  height: 655px;
  color: black;
`;
export const SideBackground = styled.div`
  height: 655px;
  width: 100%;
  background: url("assets/background/side-background.png") top left / cover
    no-repeat;

  @media (max-width: 800px) {
    display: none;
  }
`;
export const Error = styled.div`
  background: #0d7b55;
  color: white;
  padding: 10px;
`;
export const Base = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  background-color: white;
  padding: 50px 50px;
  max-width: 300px;

  @media (max-width: 800px) {
    max-width: 900px;
    padding: 50px 200px;
  }

  @media (max-width: 700px) {
    padding: 50px 150px;
  }
  @media (max-width: 600px) {
    padding: 50px 100px;
  }
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
