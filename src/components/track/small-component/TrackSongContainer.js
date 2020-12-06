import React from "react";

import * as Track from "../trackStyles";
export default function TrackSongContainer() {
  return (
    <>
      <Track.TrackSongContainer>
        <Track.PlaylistRow>
          <Track.TrackSongSubDetails>1</Track.TrackSongSubDetails>
          <Track.TrackSongImage></Track.TrackSongImage>
          <Track.PlaylistColumn>
            <Track.TrackSongTitle>Tadhana</Track.TrackSongTitle>
            <Track.TrackSongSubDetails>
              Up Dharma Down
            </Track.TrackSongSubDetails>
          </Track.PlaylistColumn>
        </Track.PlaylistRow>
      </Track.TrackSongContainer>
      <Track.TrackSongSubDetails>Capacities</Track.TrackSongSubDetails>
      <Track.TrackSongSubDetails>April 11, 2018</Track.TrackSongSubDetails>
      <Track.TrackSongSubDetails>1:50</Track.TrackSongSubDetails>
    </>
  );
}
