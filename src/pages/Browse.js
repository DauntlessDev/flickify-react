import React from "react";
import MainContainer from "../components/main/MainContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import * as Main from "../components/main/mainStyles";

export default function Browse() {
  return (
    <>
      <Main.Container>
        <SidebarContainer />
        <MainContainer />
      </Main.Container>
    </>
  );
}
