import React from "react";
import * as Main from "../mainStyles";

export default function ArtistContainer({ name, src }) {
  return (
    <Main.ArtistGroup>
      <Main.ArtistPhoto src={src} />
      <Main.ArtistName>{name}</Main.ArtistName>
      <Main.ArtistPosition>Artist</Main.ArtistPosition>
    </Main.ArtistGroup>
  );
}
