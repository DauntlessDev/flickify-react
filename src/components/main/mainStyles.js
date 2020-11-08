import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  height: 680px;
  color: white;
`;

export const MainBar = styled.div`
  background-color: #278584;
  width: 100%;
  background-color: #0c1221;
`;

export const Title = styled.h1`
  padding-left: 30px;
  font-size: 19px;
`;

export const Header = styled.div`
  width: 100%;
  background-color: #258587;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderGroup = styled.div`
  display: inline;
`;
export const HeaderProfile = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  margin-right: 40px;
`;
export const HeaderSearchBar = styled.input`
  display: inline;
  width: 310px;
`;
export const HeaderTextLink = styled.p`
  padding: 15px 25px;
  font-weight: 600;
  display: inline;
  width: min-content;
`;

export const Feature = styled.div`
  background-color: #0c1221;
  padding: 30px;
  padding-top: 70px;
  margin-bottom: 50px;
`;
export const FeatureLargeText = styled.p`
  margin: 0;
  font-size: 40px;
`;
export const FeatureSmallText = styled.p`
  max-width: 360px;
`;
export const FeatureButtonPlay = styled.button`
  margin-right: 20px;
  width: 100px;
  background-color: #00b7d6;
  color: white;
  padding: 4px;
`;
export const FeatureButtonFollow = styled.button`
  width: 100px;
  background-color: transparent;
  color: #00cce6;
  border: 1px solid #00cce6;
  padding: 4px;
`;

export const AlbumContainer = styled.div`
  display: flex;
  padding-left: 15px;
`;
export const AlbumGroup = styled.div`
  padding-left: 15px;
`;
export const AlbumPhoto = styled.img`
  width: 120px;
  height: 120px;
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
  padding-left: 10px;
`;
export const ArtistGroup = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArtistPhoto = styled.img`
  width: 60px;
  height: 60px;
`;
export const ArtistName = styled.p`
  font-size: 11px;
`;
