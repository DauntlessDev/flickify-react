import React from "react";
import * as Main from "../mainStyles";

export default function CardContainer({ title, singer, src }) {
  return (
    <Main.CardGroup>
      <Main.AlbumPhoto src={src} />
      <Main.AlbumTitle>{title}</Main.AlbumTitle>
      <Main.AlbumSinger>{singer}</Main.AlbumSinger>
    </Main.CardGroup>
  );
}
