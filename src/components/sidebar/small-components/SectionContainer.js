import React from "react";
import * as Sidebar from "../sidebarStyles";

export default function SectionContainer({ icon, title, onClick, toLink }) {
  return (
    <Sidebar.SectionContainerWrapperLink to={toLink}>
      <Sidebar.SectionContainer onClick={onClick}>
        {icon}
        <Sidebar.SectionTitle>{title}</Sidebar.SectionTitle>
      </Sidebar.SectionContainer>
    </Sidebar.SectionContainerWrapperLink>
  );
}
