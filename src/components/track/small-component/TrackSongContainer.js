import React from "react";

import * as Track from "../trackStyles";
export default function TrackSongContainer({
  index,
  date,
  album,
  song,
  time,
  artist,
  image,
}) {
  return (
    <>
      <Track.TrackSongContainer>
        <Track.PlaylistRow>
          <Track.SongIndexContainer>{index + 1}</Track.SongIndexContainer>
          <Track.TrackSongImage src={image} />
          <Track.PlaylistColumn>
            <Track.TrackSongTitle>{song}</Track.TrackSongTitle>
            <Track.TrackSongSubDetails>{artist}</Track.TrackSongSubDetails>
          </Track.PlaylistColumn>
        </Track.PlaylistRow>
      </Track.TrackSongContainer>
      <Track.TrackSongSubDetails>{album}</Track.TrackSongSubDetails>
      <Track.TrackSongSubDetails>{date}</Track.TrackSongSubDetails>
      <Track.TrackSongSubDetails>{time}</Track.TrackSongSubDetails>
    </>
  );
}
