import React from "react";
import * as Player from "./playerStyles";
import SearchIcon from "@material-ui/icons/Search";
import SkipNext from "@material-ui/icons/SkipNext";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export default function PlayerContainer() {
  return (
    <Player.Container>
      <Player.Group>
        <Player.CurrentSongContainer>
          <Player.CurrentSongAudioImage />
          <Player.CurrentSongPicture src="assets/images/sample_small_pic.JPG" />
          <Player.CurrentSongDetailsContainer>
            <Player.CurrentSongTitle>Angel of Faith</Player.CurrentSongTitle>
            <Player.CurrentSongSinger>Hersy</Player.CurrentSongSinger>
          </Player.CurrentSongDetailsContainer>
        </Player.CurrentSongContainer>
      </Player.Group>
      <Player.Group>
        <Player.Button>
          <SkipPrevious />
        </Player.Button>
        <Player.Button>
          <PlayCircleOutlineIcon />
        </Player.Button>
        <Player.Button>
          <SkipNext />
        </Player.Button>
      </Player.Group>
      <Player.Group>
        <Player.DurationBarContainer>
          <Player.DurationBarPlayTime>1:20</Player.DurationBarPlayTime>
        </Player.DurationBarContainer>
        <Player.DurationBarEndTime>0:30</Player.DurationBarEndTime>
      </Player.Group>
      <Player.Group>
        <Player.Button>
          <SearchIcon />
        </Player.Button>
        <Player.SoundBar />
      </Player.Group>
    </Player.Container>
  );
}
