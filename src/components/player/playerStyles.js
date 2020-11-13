import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  height: 15px;
  background-color: #0e131f;
  padding-bottom: 30px;
`;

export const Group = styled.div``;
export const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
`;

export const CurrentSongContainer = styled.div`
  display: inline-flex;
`;
export const CurrentSongAudioImage = styled.img``;
export const CurrentSongPicture = styled.img`
  width: 35px;
  height: 35px;
  padding-right: 10px;
`;

export const CurrentSongDetailsContainer = styled.div`
  flex-flow: column;
`;
export const CurrentSongTitle = styled.p``;
export const CurrentSongSinger = styled.p``;

export const DurationBarContainer = styled.div`
  background: transparent;
  border: none;
  color: gray;
`;
export const DurationBarPlayTime = styled.p``;
export const DurationBarEndTime = styled.p`
  background: transparent;
  border: none;
  color: gray;
`;

export const SoundBar = styled.div``;
