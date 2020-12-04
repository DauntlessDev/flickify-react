import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  color: white;
  background: green;
  margin-left: 235px;
  padding: 50px 0px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  padding-left: 30px;
  font-size: 25px;
  padding-bottom: 0;
  margin-bottom: 0;
`;
