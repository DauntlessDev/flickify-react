import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  height: 660px;
  color: white;
  padding-bottom: 30px;
`;

export const MainBar = styled.div`
  width: 100%;
  background-color: #11254f;
  background: url(${({ src }) =>
      src ? `${src}` : "assets/background/browse-feature2.jpg"})
    top left / cover no-repeat;
`;

export const Title = styled.h1`
  padding-left: 30px;
  font-size: 19px;
`;

export const Header = styled.div`
  width: 100%;
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
  margin-right: 10px;
  border-radius: 30px;
  cursor: pointer;
`;

export const HeaderSearchBar = styled.input`
  width: 310px;
  height: 25px;
  background-color: rgba(255, 250, 250, 0.2);
  border-radius: 30px;
  color: white;
  margin-right: 20px;
`;
export const HeaderTextLink = styled.p`
  padding: 15px 25px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: #00cce6;
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
  color: #00cce6;
  border: 1px solid #00cce6;
  padding: 5px;
  font-size: 15px;
  cursor: pointer;

  margin-right: 20px;
  border-radius: 15px;

  &:hover {
    background-color: #00b7d6;
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
  padding-right: 25px;
`;
export const AlbumPhoto = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 6px;
`;
export const AlbumTitle = styled.p`
  margin: 0;
  margin-top: 5px;
  font-weight: 600;
  font-size: 13px;
`;
export const AlbumSinger = styled.p`
  margin: 0;
  color: gray;
  font-size: 11px;
`;

export const ArtistContainer = styled.div`
  display: flex;
  padding-left: 30px;
`;
export const ArtistGroup = styled.div`
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &::last-child {
    padding-right: 0;
  }
`;
export const ArtistPhoto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
export const ArtistName = styled.p`
  font-size: 11px;
`;
