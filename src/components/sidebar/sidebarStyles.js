import styled from "styled-components/macro";

export const Container = styled.div`
  width: 235px;
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

export const PlaylistTitle = styled.h1`
  text-transform: uppercase;
  color: gray;
  font-weight: 600;
  font-size:14px;
  letter-spacing: 1.2px;
  padding: 10px 40px 0;
`;

export const PlaylistDivider = styled.div`
  border-bottom: 1px solid gray;
  margin: 0 40px;
`;

export const PlaylistItem = styled.p`
  color: gray;
  font-weight: 500;
  font-size:14px;
  padding: 0 40px;
`;