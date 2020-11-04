import React from "react";
import * as Sidebar from "../sidebarStyles";

export default function SectionContainer({ title }) {
  return (
    <Sidebar.SectionContainer>
      <Sidebar.SectionLogo />
      <Sidebar.SectionTitle>{title}</Sidebar.SectionTitle>
    </Sidebar.SectionContainer>
  );
}
