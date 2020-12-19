import React from "react";
import { millisToMinutesAndSeconds } from "../../../utils/timeFormatter";

import * as Album from "../trackStyles";
export default function TrackSongContainer({
  index,
  song,
  time,
  artist,
  image,
}) {
  const timeFormatted = millisToMinutesAndSeconds(time);
  return (
    <>
      <Album.TrackSongContainer>
        <Album.PlaylistRow>
          <Album.SongIndexContainer>{index + 1}</Album.SongIndexContainer>
          <Album.AlbumDivider />
          <Album.PlaylistColumn>
            <Album.TrackSongTitle>{song}</Album.TrackSongTitle>
            <Album.TrackSongSubDetails>{artist}</Album.TrackSongSubDetails>
          </Album.PlaylistColumn>
        </Album.PlaylistRow>
      </Album.TrackSongContainer>
      <Album.TrackSongSubDetails>{timeFormatted}</Album.TrackSongSubDetails>
    </>
  );
}
