import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const MainContainer = styled.div`
  background: #121212;
  margin-left: 235px;
  padding: 50px 0px;
  color: white;

  box-sizing: border-box;

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
  padding: 10px 0px;
`;

export const HeaderGroup = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const HeaderBurger = styled.div`
  margin-left: 30px;
  cursor: pointer;
`;

export const HeaderProfileContainer = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  background: #070707;
  cursor: pointer;
  margin: 3px 0;
  margin-right: 15px;

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
  border-radius: 5px;
  top: 56px;
  right: 20px;
  padding: 2px;
  position: fixed;
  background-color: #282828;
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
  background-color: #282828;

  &:hover {
    background-color: #3e3e3e;
  }
`;

export const HeaderSearchBarInput = styled.input`
  color: black;
  height: 25px;
  border-radius: 30px;
  width: 200px;
  margin: 0;
  padding: 7px;
  padding-left: 50px;

  @media (max-width: 800px) {
    width: 130px;
  }

  @media (max-width: 450px) {
    width: 60px;
    font-size: 10px;
  }
  @media (max-width: 400px) {
    width: 40px;
    font-size: 8px;
  }
`;

export const SidebarMobile = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: start;
  position: fixed;
  text-align: center;
  flex-direction: column;
  top: 0;
  right: 0;
`;

export const SidebarMobileInner = styled.div`
  width: 100%;
`;

export const HeaderSearchBarContainer = styled.div`
  color: black;
  font-size: 16px;
  padding: 0;
  margin: 0;
  position: relative;
  margin-right: 10px;
`;

export const HeaderSearchBarIcon = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  z-index: 1;
  color: black;
  margin: 0;
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
  border-radius: 5px;
  width: 150px;
  height: 220px;

  background-color: #1d1d1d;

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
  @media (max-width: 420px) {
    box-sizing: border-box;
  }

  @media (max-width: 400px) {
    width: 80px;
    height: 140px;
    box-sizing: content-box;
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
  width: 100%;
`;

export const SearchEmptyText = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-align: center;
`;
