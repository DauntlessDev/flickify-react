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
  const { showSearch, setShowSearch } = useContext(searchContext);
  const myPlaylist = useSelector((state) => state.api.myPlaylist);
  const dispatch = useDispatch();

  return myPlaylist ? (
    <SideBar.Container>
      <SideBar.Logo src="assets/logo.png" />
      <SectionContainer
        toLink="/browse"
        icon={<HomeIcon />}
        title="Home"
        onClick={() => {
          setShowSearch(false);
        }}
      />
      <SectionContainer
        toLink="/browse/search"
        icon={<SearchIcon />}
        title="Search"
        onClick={() => {
          setShowSearch(true);
        }}
      />
      <SectionContainer
        toLink="/browse/yourlibrary"
        icon={<LibraryMusicIcon />}
        title="Your Library"
        onClick={() => {
          setShowSearch(false);
        }}
      />
      <SideBar.Break />
      <SideBar.PlaylistTitle>Playlist</SideBar.PlaylistTitle>
      <SideBar.PlaylistDivider />
      {myPlaylist.map((item, idx) => (
        <SideBar.PlaylistItem
          key={idx}
          to={`/browse/track/${item.id}`}
          onClick={() => {
            setShowSearch(false);
            dispatch(navigateToCurrentPlaylist(item.id));
          }}
        >
          {item.name}
        </SideBar.PlaylistItem>
      ))}
    </SideBar.Container>
  ) : null;
}
