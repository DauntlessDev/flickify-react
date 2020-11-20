import React from "react";
import * as SideBar from "./sidebarStyles";
import SectionContainer from "./small-components/SectionContainer";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useContext } from "react";
import { searchContext } from "../../context/searchContext";

export default function SidebarContainer() {
  const { showPlayer, setShowPlayer } = useContext(searchContext);
  return (
    <SideBar.Container>
      <SideBar.Logo src="assets/logo.png" />
      <SectionContainer icon={<HomeIcon />} title="Home" />
      <SectionContainer
        onClick={() => {
          setShowPlayer((showPlayer) => !showPlayer);
          console.log("yo", showPlayer);
        }}
        icon={<SearchIcon />}
        title="Search"
      />
      <SectionContainer icon={<LibraryMusicIcon />} title="Your Library" />
      {/* <SideBar.Break /> */}
    </SideBar.Container>
  );
}
