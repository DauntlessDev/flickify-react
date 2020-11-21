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

  const data = [
    { name: "Playlist1" },
    { name: "Playlist2" },
    { name: "Playlist3" },
    { name: "Playlist4" },
    { name: "Playlist5" },
  ];
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
      <SideBar.Break />
      <SideBar.PlaylistTitle>Playlist</SideBar.PlaylistTitle>
      <SideBar.PlaylistDivider />
      {data.map((item, idx) => (
        <SideBar.PlaylistItem key={idx}>{item.name}</SideBar.PlaylistItem>
      ))}
    </SideBar.Container>
  );
}
