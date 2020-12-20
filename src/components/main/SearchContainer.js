import React from "react";
import * as Search from "./mainStyles";
import MainHeaderContainer from "./small-components/MainHeaderContainer";

export default function SearchContainer() {
  return (
    <>
      <MainHeaderContainer withSearchBar={true} />
      <Search.GrayMainContainer />
    </>
  );
}
