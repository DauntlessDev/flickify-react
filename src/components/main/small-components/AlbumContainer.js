import React from "react";
import * as Main from "../mainStyles";
import { useDispatch } from "react-redux";
import { navigateToCurrentAlbum } from "../../../redux/api/apiActions";

export default function AlbumContainer({ title, singer, src, id }) {
  const dispatch = useDispatch();

  return (
    <Main.CardLink
      to={`/browse/album/${id}`}
      onClick={() => dispatch(navigateToCurrentAlbum(id))}
    >
      <Main.CardGroup>
        <Main.AlbumPhoto src={src} />
        <Main.AlbumTitle>{title}</Main.AlbumTitle>
        <Main.AlbumSinger>{singer}</Main.AlbumSinger>
      </Main.CardGroup>
    </Main.CardLink>
  );
}
