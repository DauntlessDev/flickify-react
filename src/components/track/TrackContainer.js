import React from "react";
import * as Track from "./trackStyles";
import MainHeaderContainer from "../main/small-components/MainHeaderContainer";
export default function TrackContainer() {
  return (
    <>
      <MainHeaderContainer />
      <Track.Container>
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
      </Track.Container>
    </>
  );
}
