import React from "react";
import { useSelector } from "react-redux";
import * as Album from "./trackStyles";
export default function AlbumContainer() {
  const currentAlbum = useSelector((state) => state.api.currentAlbum);
  const currentAlbumTracks = useSelector(
    (state) => state.api.currentAlbumTracks
  );

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
      </Album.Container>
    </>
  ) : null;
}
