import React from "react";
import MainContainer from "../components/main/MainContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import * as Main from "../components/main/mainStyles";
import "react-jinke-music-player/assets/index.css";
import MusicPlayer from "../components/music-player/MusicPlayer";
import { useState } from "react";
import { searchContext } from "../context/searchContext";

export default function Browse() {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <>
      <searchContext.Provider value={{ showPlayer, setShowPlayer }}>
        <Main.Container>
          <SidebarContainer />
          <MainContainer />
        </Main.Container>
      </searchContext.Provider>
      <MusicPlayer />
    </>
  );
}
