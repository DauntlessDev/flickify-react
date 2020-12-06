import React from "react";
import * as Track from "./trackStyles";
import MainHeaderContainer from "../main/small-components/MainHeaderContainer";
import TrackSongContainer from "./small-component/TrackSongContainer";
export default function TrackContainer() {
  return (
    <>
      <MainHeaderContainer />
      <Track.Container>
        <Track.HeaderContainer>
          <Track.PlaylistRow>
            <Track.PlaylistPicturesContainer />
            <Track.PlaylistDetailsContainer>
              <Track.PlaylistColumn>
                <Track.PlaylistText>Playlist</Track.PlaylistText>
                <Track.PlaylistTitle>grl$</Track.PlaylistTitle>
                <Track.PlaylistRow>
                  <Track.PlaylistOwner>Brave Leuterio</Track.PlaylistOwner>
                  <Track.PlaylistDetails>
                    &middot; 30 songs, 2 hr 12 min
                  </Track.PlaylistDetails>
                </Track.PlaylistRow>
              </Track.PlaylistColumn>
            </Track.PlaylistDetailsContainer>
          </Track.PlaylistRow>
        </Track.HeaderContainer>
        <Track.TrackPlaylistContainer>
          <Track.PlaylistButton />
          <Track.Grid>
            {/* <Track.TrackRow> */}
            {/* <Track.TrackColumn> */}
            <Track.TrackTitle># Title</Track.TrackTitle>
            <Track.TrackTitle>Album</Track.TrackTitle>
            <Track.TrackTitle>Date Added</Track.TrackTitle>
            <Track.TrackTitle>Time</Track.TrackTitle>

            <TrackSongContainer />
            <TrackSongContainer />
            <TrackSongContainer />
            <TrackSongContainer />
            <TrackSongContainer />
            <TrackSongContainer />
            <TrackSongContainer />
          </Track.Grid>
        </Track.TrackPlaylistContainer>
      </Track.Container>
    </>
  );
}
