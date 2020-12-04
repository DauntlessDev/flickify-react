import React from "react";
import MainContainer from "../components/main/MainContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import * as Main from "../components/main/mainStyles";
import "react-jinke-music-player/assets/index.css";
import MusicPlayer from "../components/music-player/MusicPlayer";
import { useState } from "react";
import { searchContext } from "../context/searchContext";
import { Route, Switch } from "react-router-dom";
import TrackContainer from "../components/track/TrackContainer";

export default function Browse() {
  const [showPlayer, setShowPlayer] = useState(false);
  return (
    <>
      <searchContext.Provider value={{ showPlayer, setShowPlayer }}>
        <SidebarContainer />
        <Switch>
          <Route exact path="/browse">
            <MainContainer />
          </Route>
          <Route path={"/browse/track/:id"}>
            <TrackContainer />
          </Route>
        </Switch>
      </searchContext.Provider>
      {/* <MusicPlayer /> */}
    </>
  );
}
