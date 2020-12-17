import styled from "styled-components/macro";

export const Wrapper = styled.div``;

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  color: white;
  background: #1d1d1d;
  margin-left: 235px;
  padding: 0px 0px 50px;
  flex-flow: column;

  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  color: white;
  background: green;
  padding-top: 50px;
  background: linear-gradient(180deg, #535353 0%, #2a2a2a 80%);
`;
export const PlaylistPicturesContainer = styled.img`
  margin: 25px 32px;
  height: 220px;
  width: 220px;
  background: red;
`;
export const PlaylistDetailsContainer = styled.div`
  height: 220px;
  max-width: 100%;
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
  padding-right: 3px;
`;

export const PlaylistDetails = styled.p`
  color: gray;
  font-weight: bold;
  font-size: 15px;
`;

export const PlaylistButton = styled.button`
  width: 55px;
  height: 55px;
  border-radius: 60px;
  background-color: #1db954;
  border: none;
`;

export const Grid = styled.div`
  padding: 5px 20px;
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr);
  grid-column-gap: 220px;
  grid-row-gap: 20px;
  margin: 0;
`;

export const TrackPlaylistContainer = styled.div`
  padding: 25px 32px 0px;
  background: #1d1d1d;
`;

export const TrackTitle = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.2px;
`;

export const TrackSongContainer = styled.div`
  display: inline-flex;
  align-items: center;
`;
export const TrackSongNumber = styled.p``;
export const TrackSongImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 20px;
  background: blue;
`;
export const TrackSongTitle = styled.p`
  margin: 0;
  font-weight: bolder;
  font-size: 17px;
`;
export const TrackSongSubDetails = styled.p`
  margin: 0;
  color: lightgray;
  font-size: 15px;
  padding: 0;
  margin: 0;
`;

export const SongIndexContainer = styled.div`
  width: 25px;
  box-sizing: border-box;
  margin: auto 0;
  color: lightgray;
  font-size: 20px;
  text-align: right;
`;

export const AlbumTitle = styled.h1`
  font-size: 90px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 1300px) {
    font-size: 55px;
  }

  @media (max-width: 1100px) {
    font-size: 40px;
  }
`;
