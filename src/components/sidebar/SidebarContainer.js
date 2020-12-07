import React from "react";
import * as SideBar from "./sidebarStyles";
import SectionContainer from "./small-components/SectionContainer";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useContext } from "react";
import { searchContext } from "../../context/searchContext";
import { useDispatch, useSelector } from "react-redux";
import { navigateToCurrentPlaylist } from "../../redux/api/apiActions";

export default function SidebarContainer() {
  const { showPlayer, setShowPlayer } = useContext(searchContext);
  const myPlaylist = useSelector((state) => state.api.myPlaylist);
  const dispatch = useDispatch();

  return (
    <SideBar.Container>
      <SideBar.Logo src="assets/logo.png" />
      <SectionContainer toLink="/browse" icon={<HomeIcon />} title="Home" />
      <SectionContainer
        toLink="/browse/search"
        onClick={() => {
          setShowPlayer((showPlayer) => !showPlayer);
          console.log("yo", showPlayer);
        }}
        icon={<SearchIcon />}
        title="Search"
      />
      <SectionContainer
        toLink="/browse/yourlibrary"
        icon={<LibraryMusicIcon />}
        title="Your Library"
      />
      <SideBar.Break />
      <SideBar.PlaylistTitle>Playlist</SideBar.PlaylistTitle>
      <SideBar.PlaylistDivider />
      {myPlaylist.map((item, idx) => (
        <SideBar.PlaylistItem
          to={`/browse/track/${item.id}`}
          onClick={() => dispatch(navigateToCurrentPlaylist(item.id))}
          key={idx}
        >
          {item.name}
        </SideBar.PlaylistItem>
      ))}
    </SideBar.Container>
  );
}
