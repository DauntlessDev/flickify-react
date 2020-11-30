import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  /* height: 700px;  */
  color: white;
`;

export const MainBar = styled.div`
  width: 100%;
  background-color: #04bf7d;
  background: url(${({ src }) => src ? `${src}` : "assets/background/browse-feature1.png"})
    center / cover no-repeat;
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
  max-width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  position: relative-fixed;
  
`;
export const HeaderGroup = styled.div`
  justify-items: center;
  display: flex;
  align-items: center;
`;

export const HeaderProfileContainer = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 10px;
  margin-right: 15px;
  border-radius: 30px;
  background: black;
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
  top: 55px;
  right: 20px;
  padding: 2px;
  position: fixed;
`;

export const HeaderDropDownOptions = styled.button`
  padding: 8px 12px;
  margin: 1px;
  width: 150px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  color: lightgray;
  background-color: black;
  text-align: left;

  &:hover {
    background-color: #282828;
  }
`;

export const HeaderSearchBar = styled.input`
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  transition: width 0.5s;
  height: 25px;
  font-size: 14px;
  border-radius: 30px;
  margin-left: ${({ active }) => (active === true ? "25px" : "0")};
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

export const Feature = styled.div`
  padding: 10px 30px 25px;
  margin-bottom: 15px;
`;
export const FeatureLargeText = styled.p`
  margin: 0;
  font-size: 40px;
`;
export const FeatureSmallText = styled.p`
  max-width: 360px;
`;

export const FeatureButton = styled.button`
  width: 120px;
  background-color: transparent;
  color: #04bf7d;
  border: 1px solid #04bf7d;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;

  margin-right: 20px;
  border-radius: 15px;

  &:hover {
    background-color: #04bf7d;
    color: white;
    border: none;
  }
`;

export const AlbumContainer = styled.div`
  display: flex;
  padding-left: 30px;
  margin-bottom: 25px;
  cursor: pointer;
`;
export const AlbumGroup = styled.div`
  margin-right: 25px;
  padding: 15px;
  background-color: #0f0e0e;
  border-radius: 5px;
  width: 150px;
  height: 220px;

  &:hover {
    background-color: #282828;
  }

  &::first-child {
    background: red;
  }

  @media (max-width: 700px) {
    width: 100px;
    height: 170px;
  }
`;
export const AlbumPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 5px;

  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
  }
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

export const ArtistContainer = styled.div`
  display: flex;
  padding-left: 30px;
`;
export const ArtistGroup = styled.div`
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

  @media (max-width: 700px) {
    width: 100px;
    height: 170px;
  }
`;
export const ArtistPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 80px;
  object-fit: cover;

  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
  }
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

export const MainContainer = styled.div`
  padding-left: 10px;
`;
