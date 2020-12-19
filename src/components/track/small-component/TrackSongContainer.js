import React from "react";
import { millisToMinutesAndSeconds } from "../../../utils/timeFormatter";

import * as Track from "../trackStyles";
export default function TrackSongContainer({
  index,
  date,
  album,
  song,
  time,
  artist,
  image,
  showDate,
}) {
  const dateTyped = new Date(date).toDateString();
  const dateTypedString = dateTyped.substring(3);
  const timeFormatted = millisToMinutesAndSeconds(time);
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
      <Track.TrackSongDate>{dateTypedString}</Track.TrackSongDate>
      <Track.TrackSongSubDetails>{timeFormatted}</Track.TrackSongSubDetails>
    </>
  );
}
