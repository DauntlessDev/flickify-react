import styled from "styled-components/macro";

export const Container = styled.div`
  width: 220px;
  background-color: black;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 1.3em;
  color: #fff;
  padding: 5px;
  padding-left: 45px;
  font-weight: 900;
`;
export const Break = styled.div`
  height: 20px;
`;

export const Group = styled.div``;

export const SectionTitle = styled.p`
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  pointer-events: none;
`;

export const SectionContainer = styled.div`
  padding: 10px 40px;
  margin: 0;
  width: 200px;
  display: inline-flex;
  cursor: pointer;
  color: white;

  &:hover {
    color: #04bf7d;
    transition: 250ms;

    ${SectionTitle} {
      color: #04bf7d;
      transition: 250ms;
    }
  }
`;

export const Logo = styled.img`
  padding: 20px;
  padding-left: 30px;
  height: 45px;
  display: block;
`;
export const SectionLogo = styled.div`
  width: 10px;
  margin: 0;
  padding: 0;
  pointer-events: none;
`;

export const SongContainer = styled.div`
  padding: 15px 30px;
  margin: 0;
  display: inline-flex;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: #131f1b;
  }
`;

export const SongNumber = styled.div`
  padding: 10px;
  margin-right: 10px;
  font-size: 13px;
  color: lightgray;
`;
export const SongStateLogo = styled.img`
  width: 10px;
`;

export const SongPicture = styled.img`
  width: 35px;
  height: 35px;
  padding-right: 10px;
`;

export const SongTitle = styled.p`
  font-size: 0.9em;
  color: white;
  font-weight: bold;
  margin: 0;
`;

export const SongSubTitle = styled.p`
  font-size: 0.7em;
  color: darkgray;
  margin: 0;
`;
