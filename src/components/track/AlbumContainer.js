import React from "react";
import { useSelector } from "react-redux";
import * as Album from "./trackStyles";
import AlbumSongContainer from "./small-component/AlbumSongContainer";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export default function AlbumContainer() {
  const currentAlbum = useSelector((state) => state.api.currentAlbum);

  const styles = {
    largeIcon: {
      width: 40,
      height: 40,
      color: "white",
    },
  };

  return currentAlbum ? (
    <>
      <Album.Container>
        <Album.HeaderContainer>
          <Album.PlaylistRow>
            <Album.PlaylistPicturesContainer src={currentAlbum.images[0].url} />
            <Album.PlaylistDetailsContainer>
              <Album.PlaylistColumn>
                <Album.PlaylistText>{currentAlbum.type}</Album.PlaylistText>
                <Album.AlbumTitle>{currentAlbum.name}</Album.AlbumTitle>
                <Album.PlaylistRow>
                  <Album.PlaylistOwner>
                    {currentAlbum.label}
                  </Album.PlaylistOwner>
                  <Album.PlaylistDetails>
                    &middot; {currentAlbum.total_tracks} songs
                  </Album.PlaylistDetails>
                </Album.PlaylistRow>
              </Album.PlaylistColumn>
            </Album.PlaylistDetailsContainer>
          </Album.PlaylistRow>
        </Album.HeaderContainer>
        <Album.TrackPlaylistContainer>
          <Album.PlaylistButton>
            <PlayArrowIcon style={styles.largeIcon} />
          </Album.PlaylistButton>
          <Album.AlbumGrid>
            <Album.TrackTitle># Title</Album.TrackTitle>
            <Album.TrackTitle>Time</Album.TrackTitle>
            {currentAlbum.tracks.items[0].name &&
              currentAlbum.tracks.items.map((item, index) => (
                <AlbumSongContainer
                  key={item.name + index}
                  index={index}
                  artist={item.artists[0].name}
                  song={item.name}
                  time={item.duration_ms}
                />
              ))}
          </Album.AlbumGrid>
        </Album.TrackPlaylistContainer>
      </Album.Container>
    </>
  ) : null;
}
