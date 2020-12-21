import React from "react";
import * as Search from "./mainStyles";
import MainHeaderContainer from "./small-components/MainHeaderContainer";

export default function SearchContainer() {
  return (
    <>
      <MainHeaderContainer withSearchBar={true} />

      <Search.GrayMainContainer>
        <Search.SearchEmptyContainer>
          <Search.SearchEmptyImage src="../assets/images/search_image.png" />
          <Search.SearchEmptyText>
            Discover & try searching albums and tracks to listen for the current mood.
          </Search.SearchEmptyText>
        </Search.SearchEmptyContainer>
      </Search.GrayMainContainer>
    </>
  );
}
