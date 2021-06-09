import React from "react";
import MainContainer from "../components/main/MainContainer";
import SidebarContainer from "../components/sidebar/SidebarContainer";
import "react-jinke-music-player/assets/index.css";
import MusicPlayer from "../components/music-player/MusicPlayer";
import { useState } from "react";
import { searchContext } from "../context/searchContext";
import { mobileSidebarContext } from "../context/mobileSidebarContext";
import { Route, Switch } from "react-router-dom";
import TrackContainer from "../components/track/TrackContainer";
import AlbumContainer from "../components/track/AlbumContainer";
import MainHeaderContainer from "../components/main/small-components/MainHeaderContainer";
import LibraryContainer from "../components/main/LibraryContainer";
import SearchContainer from "../components/main/SearchContainer";
import MobileSidebarContainer from "../components/sidebar/MobileSidebarContainer";

export default function Browse() {
  const [showSearch, setShowSearch] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <searchContext.Provider value={{ showSearch, setShowSearch }}>
        <mobileSidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
          <SidebarContainer />
          {showSidebar ? <MobileSidebarContainer /> : null}
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
            <Route exactt path={"/browse/search"}>
              <SearchContainer />
            </Route>
            <Route exact path={"/browse/yourlibrary"}>
              <LibraryContainer />
            </Route>
          </Switch>
        </mobileSidebarContext.Provider>
      </searchContext.Provider>
      <MusicPlayer />
    </>
  );
}
