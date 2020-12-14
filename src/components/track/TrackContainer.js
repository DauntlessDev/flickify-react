import React from "react";
import { useSelector } from "react-redux";
import * as Track from "./trackStyles";
import MainHeaderContainer from "../main/small-components/MainHeaderContainer";
import TrackSongContainer from "./small-component/TrackSongContainer";
export default function TrackContainer() {
  const currentPlaylist = useSelector((state) => state.api.currentPlaylist);

  return (
    <>
      <MainHeaderContainer />
      <Track.Container>
        <Track.HeaderContainer>
          <Track.PlaylistRow>
            <Track.PlaylistPicturesContainer
              src={currentPlaylist.images[0].url}
            />
            <Track.PlaylistDetailsContainer>
              <Track.PlaylistColumn>
                <Track.PlaylistText>{currentPlaylist.type}</Track.PlaylistText>
                <Track.PlaylistTitle>
                  {currentPlaylist.name}
                </Track.PlaylistTitle>
                <Track.PlaylistRow>
                  <Track.PlaylistOwner>
                    {currentPlaylist.owner.display_name}
                  </Track.PlaylistOwner>
                  <Track.PlaylistDetails>
                    &middot; {currentPlaylist.tracks.total} songs
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
            {currentPlaylist.tracks.items[0].track.name &&
              currentPlaylist.tracks.items.map((item, index) => (
                <TrackSongContainer
                  index={index}
                  image={item.track.album.images[0].url}
                  date={item.added_at}
                  album={item.track.album.name}
                  artist={item.track.artists[0].name}
                  song={item.track.name}
                  time={item.track.duration_ms}
                />
              ))}
          </Track.Grid>
        </Track.TrackPlaylistContainer>
      </Track.Container>
    </>
  );
}
