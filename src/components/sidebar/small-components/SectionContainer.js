import React from "react";
import * as Sidebar from "../sidebarStyles";

export default function SectionContainer({ icon, title }) {
  return (
    <Sidebar.SectionContainer>
      {icon}
      <Sidebar.SectionTitle>{title}</Sidebar.SectionTitle>
    </Sidebar.SectionContainer>
  );
}
