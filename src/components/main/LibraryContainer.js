import React from "react";
import { useSelector } from "react-redux";
import * as Library from "./mainStyles";
import PlaylistContainer from "./small-components/PlaylistContainer";
export default function LibraryContainer() {
  const myPlaylist = useSelector((state) => state.api.myPlaylist);

  return myPlaylist ? (
    <>
      <Library.GrayMainContainer>
        <Library.Title>Playlist</Library.Title>
        <Library.LibraryContainer>
          {myPlaylist &&
            myPlaylist.map((item, index) => (
              <PlaylistContainer
                key={"recently-" + item.id}
                title={item.name}
                src={item.images[0].url}
                singer={"By " + item.owner.display_name}
                id={item.id}
              />
            ))}
        </Library.LibraryContainer>
      </Library.GrayMainContainer>
    </>
  ) : null;
}
