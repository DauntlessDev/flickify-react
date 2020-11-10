import React from "react";
import * as Player from "./playerStyles";

export default function PlayerContainer() {
  return (
    <Player.Container>
      <Player.Group>
        <Player.CurrentSongContainer>
          <Player.CurrentSongAudioImage />
          <Player.CurrentSongPicture />
          <Player.CurrentSongTitle>Angel of Faith</Player.CurrentSongTitle>
          <Player.CurrentSongSinger>Hersy</Player.CurrentSongSinger>
        </Player.CurrentSongContainer>
      </Player.Group>
      <Player.Group>
        <Player.Button>Prev</Player.Button>
        <Player.Button>Play</Player.Button>
        <Player.Button>Next</Player.Button>
      </Player.Group>
      <Player.Group>
        <Player.DurationBarContainer>
          <Player.DurationBarPlayTime>1:20</Player.DurationBarPlayTime>
        </Player.DurationBarContainer>
        <Player.DurationBarEndTime>0:30</Player.DurationBarEndTime>
      </Player.Group>
      <Player.Group>
        <Player.Button>Suffle</Player.Button>
        <Player.SoundBar />
      </Player.Group>
    </Player.Container>
  );
}
