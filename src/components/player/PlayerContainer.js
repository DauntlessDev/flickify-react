import React from "react";
import * as Player from "./playerStyles";
import SkipNext from "@material-ui/icons/SkipNext";
import SkipPrevious from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";

export default function PlayerContainer() {
  return (
    <Player.Container>
      <Player.Group>
        <Player.CurrentSongContainer>
          <Player.CurrentSongAudioImage>
            <GraphicEqIcon />
          </Player.CurrentSongAudioImage>
          <Player.CurrentSongAudioImage />
          <Player.CurrentSongPicture src="assets/images/sample_small_pic.JPG" />
          <Player.Group>
            <Player.CurrentSongTitle>Angel of Faith</Player.CurrentSongTitle>
            <Player.CurrentSongSinger>Hersy</Player.CurrentSongSinger>
          </Player.Group>
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
      <Player.InLineGroup>
        <Player.DurationBarPlayTime>1:20</Player.DurationBarPlayTime>
        <Player.DurationBarContainer>
          {" "}
          --------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Player.DurationBarContainer>
        <Player.DurationBarEndTime>0:30</Player.DurationBarEndTime>
      </Player.InLineGroup>
      <Player.InLineGroup>
        <Player.Button>
          <ShuffleIcon />
        </Player.Button>
        <Player.Button>
          <VolumeUpIcon />
        </Player.Button>
        <Player.SoundBar>--------------</Player.SoundBar>
      </Player.InLineGroup>
    </Player.Container>
  );
}
