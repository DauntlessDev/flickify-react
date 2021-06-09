import React from "react";
import * as SideBar from "./sidebarStyles";
import SectionContainer from "./small-components/SectionContainer";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import CloseIcon from "@material-ui/icons/Close";
import { useContext } from "react";
import { searchContext } from "../../context/searchContext";
import { useDispatch, useSelector } from "react-redux";
import { navigateToCurrentPlaylist } from "../../redux/api/apiActions";
import { mobileSidebarContext } from "../../context/mobileSidebarContext";

export default function MobileSidebarContainer() {
  const { showSearch, setShowSearch } = useContext(searchContext);
  const { setShowSidebar } = useContext(mobileSidebarContext);
  const myPlaylist = useSelector((state) => state.api.myPlaylist);
  const dispatch = useDispatch();

  return myPlaylist ? (
    <SideBar.MobileContainer>
      <SideBar.InlineContainer>
        <SideBar.Logo src="/assets/logo.png" />
        <SideBar.ExitSidebar
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <CloseIcon />
        </SideBar.ExitSidebar>
      </SideBar.InlineContainer>
      <SectionContainer
        toLink="/browse"
        icon={<HomeIcon />}
        title="Home"
        onClick={() => {
          setShowSearch(false);
          // console.log("yo", showSearch);
        }}
      />
      <SectionContainer
        toLink="/browse/search"
        icon={<SearchIcon />}
        title="Search"
        onClick={() => {
          setShowSearch(true);
          // console.log("yo", showSearch);
        }}
      />
      <SectionContainer
        toLink="/browse/yourlibrary"
        icon={<LibraryMusicIcon />}
        title="Your Library"
        onClick={() => {
          setShowSearch(false);
          // console.log("yo", showSearch);
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
            // console.log("yo", showSearch);
            dispatch(navigateToCurrentPlaylist(item.id));
          }}
        >
          {item.name}
        </SideBar.PlaylistItem>
      ))}
    </SideBar.MobileContainer>
  ) : null;
}
