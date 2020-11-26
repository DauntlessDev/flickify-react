import React from "react";
import { useContext } from "react";
import { searchContext } from "../../../context/searchContext";
import * as Main from "../mainStyles";

export default function MainHeaderContainer({userProfile}) {
  
  const { showPlayer } = useContext(searchContext);
  return (
    <Main.Header>
      <Main.HeaderGroup>
        <Main.HeaderSearchBar active={showPlayer} />
      </Main.HeaderGroup>
      <Main.HeaderGroup>
        <Main.HeaderProfile src={userProfile} />
      </Main.HeaderGroup>
    </Main.Header>
  );
}
