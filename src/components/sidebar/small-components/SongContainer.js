import React from "react";
import * as Sidebar from "../sidebarStyles";

export default function SongContainer({ title, subtitle }) {
  return (
    <Sidebar.SongContainer>
      <Sidebar.SongStateLogo />
      <Sidebar.SongTitle>{title}</Sidebar.SongTitle>
      <Sidebar.SongSubTitle>{subtitle}</Sidebar.SongSubTitle>
    </Sidebar.SongContainer>
  );
}
