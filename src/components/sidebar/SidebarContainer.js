import React from "react";
import * as SideBar from "./sidebarStyles";
import SectionContainer from "./small-components/SectionContainer";
import SongContainer from "./small-components/SongContainer";
export default function SidebarContainer() {
  return (
    <SideBar.Container>
      <SideBar.Title>Playlist</SideBar.Title>
      <SectionContainer title="My Playlist" />
      <SectionContainer title="Last Listening" />
      <SectionContainer title="Recommened" />
      <SideBar.Break />
      <SongContainer title="Lips of an Angel" subtitle="lips ng anghel" />
      <SongContainer title="Lips of an Angel" subtitle="lips ng anghel" />
      <SongContainer title="Lips of an Angel" subtitle="lips ng anghel" />
      <SongContainer title="Lips of an Angel" subtitle="lips ng anghel" />
      <SongContainer title="Lips of an Angel" subtitle="lips ng anghel" />
      <SongContainer title="Lips of an Angel" subtitle="lips ng anghel" />
    </SideBar.Container>
  );
}
