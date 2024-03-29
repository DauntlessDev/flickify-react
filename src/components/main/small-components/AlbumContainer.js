import React from "react";
import * as Main from "../mainStyles";
import { useDispatch } from "react-redux";
import { navigateToCurrentAlbum } from "../../../redux/api/apiActions";
import CardContainer from "./CardContainer";

export default function AlbumContainer({ title, singer, src, id }) {
  const dispatch = useDispatch();

  return (
    <Main.CardLink
      to={`/browse/album/${id}`}
      onClick={() => dispatch(navigateToCurrentAlbum(id))}
    >
      <CardContainer title={title} src={src} singer={singer} />
    </Main.CardLink>
  );
}
