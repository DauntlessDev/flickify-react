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
  background-color: #04BF7D;
  background: url(${({ src }) => src ? `${src}` : "assets/background/browse-feature1.png"})
    top left / cover no-repeat;

`;

export const Title = styled.h1`
  padding-left: 30px;
  font-size: 19px;
  
`;


export const Header = styled.div`
  max-width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderGroup = styled.div`
  justify-items: center;
  display: flex;
  align-items: center;
`;
export const HeaderProfile = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px;
  margin-right: 15px;
  border-radius: 30px;
  cursor: pointer;
`;

export const HeaderSearchBar = styled.input`
  background-color: rgba(255, 250, 250, 0.2);
  color: white;
  transition: width 0.5s;
  height: 25px;
  font-size: 14px;
  border-radius: 30px;
  margin-left: ${({ active }) => (active === true ? '25px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  /* @media (max-width: 1000px) {
    max-width: 200px;
  } */
`;
export const HeaderTextLink = styled.p`
  padding: 15px 25px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: #04BF7D;
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
  color: #04BF7D;
  border: 1px solid #04BF7D;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;

  margin-right: 20px;
  border-radius: 15px;

  &:hover {
    background-color: #04BF7D;
    color: white;
    border: none;
  }
`;

export const AlbumContainer = styled.div`
  display: flex;
  padding-left: 30px;
  margin-bottom: 25px;
  cursor: pointer;
  max-width: 100%;
`;
export const AlbumGroup = styled.div`
  margin-right: 25px;
  padding: 15px;
  background-color: #0f0e0e;
  border-radius: 5px;

  &:hover{
    background-color: #282828;
  }
`;
export const AlbumPhoto = styled.img`
  max-width: 150px;
  max-height: 150px;
  border-radius: 5px;

  
  @media (max-width: 700px) {
    width: 90px;
    height: 90px;
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
  color: gray;
  font-size: 15px;
  font-weight: 500;
`;

export const ArtistContainer = styled.div`
  display: flex;
  padding-left: 30px;
`;
export const ArtistGroup = styled.div`
  padding-right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &::last-child {
    padding-right: 0;
  }
`;
export const ArtistPhoto = styled.img`
  max-width: 60px;
  max-height: 60px;
  border-radius: 30px;

  
  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
`;
export const ArtistName = styled.p`
  font-size: 11px;
`;


export const MainContainer = styled.div`
  padding-left: 10px;
`;