import React from "react";
import MainContainer from "../components/main/MainContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import "react-jinke-music-player/assets/index.css";
import MusicPlayer from "../components/music-player/MusicPlayer";
import { useState } from "react";
import { searchContext } from "../context/searchContext";
import { Route, Switch } from "react-router-dom";
import TrackContainer from "../components/track/TrackContainer";
import AlbumContainer from "../components/track/AlbumContainer";
import MainHeaderContainer from "../components/main/small-components/MainHeaderContainer";
import LibraryContainer from "../components/main/LibraryContainer";

export default function Browse() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <>
      <searchContext.Provider value={{ showPlayer, setShowPlayer }}>
        <SidebarContainer />

        <MainHeaderContainer />
        <Switch>
          <Route exact path="/browse">
            <MainContainer />
          </Route>
          <Route path={"/browse/track/:id"}>
            <TrackContainer />
          </Route>
          <Route path={"/browse/album/:id"}>
            <AlbumContainer />
          </Route>
          <Route path={"/browse/yourlibrary"}>
            <LibraryContainer />
          </Route>
        </Switch>
      </searchContext.Provider>
      {/* <MusicPlayer /> */}
    </>
  );
}
