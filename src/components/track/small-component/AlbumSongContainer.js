import React from "react";

import * as Album from "../trackStyles";
export default function TrackSongContainer({
  index,
  song,
  time,
  artist,
  image,
}) {
  
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
      <Album.TrackSongSubDetails>{time}</Album.TrackSongSubDetails>
    </>
  );
}
