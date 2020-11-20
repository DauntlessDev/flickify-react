import React from "react";
import { useContext } from "react";
import { searchContext } from "../../../context/searchContext";
import * as Main from "../mainStyles";

export default function MainHeaderContainer() {
  
  const { showPlayer } = useContext(searchContext);
  return (
    <Main.Header>
      <Main.HeaderGroup>
        <Main.HeaderSearchBar active={showPlayer} />
      </Main.HeaderGroup>
      <Main.HeaderGroup>
        <Main.HeaderProfile src="assets/images/sample_small_pic.JPG" />
      </Main.HeaderGroup>
    </Main.Header>
  );
}
