import React from "react";
import * as Main from "../mainStyles";

export default function MainHeaderContainer() {
  return (
    <Main.Header>
      <Main.HeaderGroup>
        <Main.HeaderTextLink>Discover</Main.HeaderTextLink>
        <Main.HeaderTextLink>My Library</Main.HeaderTextLink>
        <Main.HeaderTextLink>Radio</Main.HeaderTextLink>
      </Main.HeaderGroup>
      <Main.HeaderGroup>
        <Main.HeaderSearchBar />
        <Main.HeaderProfile src="assets/images/sample_small_pic.JPG" />
      </Main.HeaderGroup>
    </Main.Header>
  );
}
