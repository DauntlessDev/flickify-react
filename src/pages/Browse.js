import React from "react";
import MainContainer from "../components/main/MainContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import * as Main from "../components/main/mainStyles";
import FooterContainer from "../components/footer/FooterContainer";
import "react-jinke-music-player/assets/index.css";
import MusicPlayer from "../components/music-player/MusicPlayer";

export default function Browse() {
  return (
    <>
      <Main.Container>
        <SidebarContainer />
        <MainContainer />
      </Main.Container>
      <MusicPlayer />
    </>
  );
}
