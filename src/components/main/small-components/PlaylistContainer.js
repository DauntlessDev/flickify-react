import React from "react";
import * as Main from "../mainStyles";
import { useDispatch } from "react-redux";
import { navigateToCurrentPlaylist } from "../../../redux/api/apiActions";
import CardContainer from "./CardContainer";

export default function PlaylistContainer({ title, singer, src, id }) {
  const dispatch = useDispatch();

  return (
    <Main.CardLink
      to={`/browse/track/${id}`}
      onClick={() => dispatch(navigateToCurrentPlaylist(id))}
    >
      <CardContainer title={title} src={src} singer={singer} />
    </Main.CardLink>
  );
}
