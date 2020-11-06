import React from "react";
import * as Sidebar from "../sidebarStyles";

export default function SongContainer({ title, subtitle, number, src }) {
  const numberFormatted = () => {
    if (number < 10) return "0" + number.toString();
    else return number.toString();
  };

  return (
    <Sidebar.SongContainer>
      <Sidebar.SongNumber>{numberFormatted()}</Sidebar.SongNumber>
      <Sidebar.SongPicture src={src} />
      <Sidebar.Group>
        <Sidebar.SongTitle>{title}</Sidebar.SongTitle>
        <Sidebar.SongSubTitle>{subtitle}</Sidebar.SongSubTitle>
      </Sidebar.Group>
    </Sidebar.SongContainer>
  );
}
