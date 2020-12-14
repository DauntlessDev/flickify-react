import React from "react";

import * as Track from "../trackStyles";
export default function TrackSongContainer({
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
          <Track.TrackSongSubDetails>1</Track.TrackSongSubDetails>
          <Track.TrackSongImage src={image}/>
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
