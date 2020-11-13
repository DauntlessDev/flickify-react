import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  background-color: #0e131f;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.div``;
export const InLineGroup = styled.div`
  display: inline-flex;
  align-items: center;
`;
export const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
`;

export const CurrentSongContainer = styled.div`
  padding: 15px;
  margin: 0;
  display: inline-flex;
  width: 100%;
  cursor: pointer;
`;
export const CurrentSongAudioImage = styled.div`
  padding-left: 10px;
`;
export const CurrentSongPicture = styled.img`
  width: 35px;
  height: 35px;
  padding: 0 10px;
`;

export const CurrentSongTitle = styled.p`
  font-size: 0.9em;
  color: white;
  font-weight: bold;
  margin: 0;
`;
export const CurrentSongSinger = styled.p`
  font-size: 0.7em;
  color: darkgray;
  margin: 0;
`;

export const DurationBarContainer = styled.div`
  background: transparent;
  border: none;
  color: gray;
  padding: 10px;
`;
export const DurationBarPlayTime = styled.p``;
export const DurationBarEndTime = styled.p``;

export const SoundBar = styled.div`
  padding-right: 15px;
`;
