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

export const PlaylistPicturesContainer = styled.div`
  margin: 22px 30px;
  height: 220px;
  width: 220px;
  background: red;
`;
export const PlaylistDetailsContainer = styled.div`
  height: 220px;
  width: 202px;
`;
export const PlaylistRow = styled.div`
  flex-flow: row;
  display: inline-flex;
  margin: 0;
`;
export const PlaylistColumn = styled.div`
  flex-flow: column;
  margin: 0;
`;
export const PlaylistTitle = styled.h1`
  font-size: 90px;
  font-weight: bold;
  margin: 0;
`;

export const PlaylistText = styled.p`
  padding-top: 25px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 15px;
`;

export const PlaylistOwner = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

export const PlaylistDetails = styled.p`
  color: gray;
  font-weight: bold;
  font-size: 15px;
`;
