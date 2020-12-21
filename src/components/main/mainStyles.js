import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const MainContainer = styled.div`
  background: #121212;
  background: url(${({ src }) => src ? `${src}` : "assets/background/browse-feature1.png"})
    left / cover no-repeat;
  margin-left: 235px;
  padding: 50px 0px;
  color: white;

  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Title = styled.h1`
  padding-left: 30px;
  font-size: 25px;
  padding-bottom: 0;
  margin-bottom: 0;
`;

export const SubTitle = styled.p`
  padding-left: 30px;
  font-size: 16px;
  color: #aeaeae;
  padding-top: 3px;
  margin-top: 0;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  top: 0;
  right: 0;
  position: fixed;
  background: ${({ show }) => (show ? "#070707" : "none")};
  transition: background-color 0.3s ease;
  padding: 3px 0px;
`;

export const HeaderGroup = styled.div``;

export const HeaderProfileContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 10px;
  margin-right: 15px;
  border-radius: 30px;
  background: #070707;
  cursor: pointer;

  &:hover {
    background-color: #282828;
  }
`;

export const HeaderProfile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 30px;
`;

export const HeaderProfileName = styled.p`
  padding: 0 0px 0 8px;
  margin: 0;
  font-weight: bold;
  font-size: 15px;
`;

export const HeaderProfileSymbol = styled.div`
  padding-right: 8px;
`;

export const HeaderDropDown = styled.div`
  background-color: black;
  border-radius: 5px;
  top: 56px;
  right: 20px;
  padding: 2px;
  position: fixed;
`;

export const HeaderDropDownOptions = styled.p`
  cursor: pointer;
  padding: 8px 12px;
  margin: 1px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  color: lightgray;
  background-color: black;
  text-align: left;
  width: 100px;

  &:hover {
    background-color: #282828;
  }
`;

export const HeaderSearchBar = styled.input`
  background-color: rgba(150, 150, 150, 0.3);
  color: white;
  transition: width 0.5s;
  height: 25px;
  font-size: 14px;
  border-radius: 30px;
  margin-left: ${({ active }) => (active === true ? "275px" : "0")};
  margin-right: ${({ active }) => (active === true ? "25px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0px")};

  /* @media (max-width: 1000px) {
    max-width: 200px;
  } */
`;
export const HeaderTextLink = styled.p`
  padding: 15px 25px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: #04bf7d;
  }
`;

export const AlbumContainer = styled.div`
  display: flex;
  padding-left: 30px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const AlbumPhoto = styled.img`
  width: 150px;
  max-width: 100%;
  max-height: 80%;
  border-radius: 5px;
`;
export const AlbumTitle = styled.p`
  margin: 0;
  margin-top: 5px;
  font-weight: 600;
  font-size: 17px;
`;
export const AlbumSinger = styled.p`
  margin: 0;
  color: #aeaeae;
  font-size: 15px;
  font-weight: 500;
`;

export const CardGroup = styled.div`
  margin-top: 15px;
  margin-right: 25px;
  padding: 15px;
  background-color: #0f0e0e;
  border-radius: 5px;
  width: 150px;
  height: 220px;

  &:hover {
    background-color: #282828;
  }
  align-items: center;
  cursor: pointer;

  &::last-child {
    padding-right: 0;
  }
  @media (max-width: 1280px) {
    width: 130px;
    height: 190px;
  }

  @media (max-width: 1000px) {
    width: 100px;
    height: 170px;
  }

  @media (max-width: 750px) {
    width: 90px;
    height: 155px;
  }
  @media (max-width: 700px) {
    width: 150px;
    height: 220px;
  }
  @media (max-width: 400px) {
    width: 80px;
    height: 140px;
  }
`;

export const ArtistContainer = styled.div`
  display: flex;
  padding-left: 30px;
`;
export const ArtistPhoto = styled.img`
  width: 100%;
  border-radius: 80px;
  object-fit: cover;
`;
export const ArtistName = styled.p`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 0;
  padding-bottom: 0;
`;

export const ArtistPosition = styled.p`
  margin: 0;
  padding: 0;
  color: #aeaeae;
  font-size: 15px;
  font-weight: 500;
`;

export const CardLink = styled(ReactRouterLink)`
  text-decoration: none;
  color: white;
`;

export const LibraryContainer = styled.div`
  display: inline-flex;
  padding-left: 30px;
  margin-bottom: 25px;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const GrayMainContainer = styled.div`
  background: #121212;
  margin-left: 235px;
  padding: 50px 0px;
  color: white;
  min-height: 700px;

  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const SearchEmptyContainer = styled.div`
  margin: auto auto;
  max-width: 500px;
`;

export const SearchEmptyImage = styled.img`
  margin-top: 20px;
  width:100%;
`;

export const SearchEmptyText = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-align: center;
`;