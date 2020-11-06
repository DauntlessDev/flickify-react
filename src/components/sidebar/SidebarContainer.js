import React from "react";
import * as SideBar from "./sidebarStyles";
import SectionContainer from "./small-components/SectionContainer";
import SongContainer from "./small-components/SongContainer";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

export default function SidebarContainer() {
  let number = 0;

  return (
    <SideBar.Container>
      <SideBar.Logo src="assets/blue_logo.png" />
      <SectionContainer icon={<HomeIcon />} title="Home" />
      <SectionContainer icon={<SearchIcon />} title="Search" />
      <SectionContainer icon={<LibraryMusicIcon />} title="Your Library" />
      <SideBar.Break />
      <SongContainer
        src="assets/images/sample_small_pic.JPG"
        number={number}
        title="Lips of an Angel"
        subtitle="lips ng anghel"
      />
      <SongContainer
        src="assets/images/sample_small_pic.JPG"
        number={++number}
        title="Lips of an Angel"
        subtitle="lips ng anghel"
      />
      <SongContainer
        src="assets/images/sample_small_pic.JPG"
        number={++number}
        title="Lips of an Angel"
        subtitle="lips ng anghel"
      />
      <SongContainer
        src="assets/images/sample_small_pic.JPG"
        number={++number}
        title="Lips of an Angel"
        subtitle="lips ng anghel"
      />
      <SongContainer
        src="assets/images/sample_small_pic.JPG"
        number={++number}
        title="Lips of an Angel"
        subtitle="lips ng anghel"
      />
      <SongContainer
        src="assets/images/sample_small_pic.JPG"
        number={++number}
        title="Lips of an Angel"
        subtitle="lips ng anghel"
      />
    </SideBar.Container>
  );
}
