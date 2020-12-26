import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import * as Search from "./mainStyles";
import AlbumContainer from "./small-components/AlbumContainer";

export default function SearchContainer() {
  const currentSearch = useSelector((state) => state.api.currentSearch);
  return currentSearch ? (
    <>
      <Search.GrayMainContainer>
        <Search.Title>Results</Search.Title>
        <Search.LibraryContainer>
          {currentSearch &&
            Array.from(new Set(currentSearch.albums.items)).map((item) => (
              <AlbumContainer
                key={"recently-" + item.id}
                title={item.name}
                src={item.images[0].url}
                singer={"By " + item.artists[0].name}
                id={item.id}
              />
            ))}
        </Search.LibraryContainer>
      </Search.GrayMainContainer>
    </>
  ) : (
    <>
      <Search.GrayMainContainer>
        <Search.SearchEmptyContainer>
          <Search.SearchEmptyImage src="../assets/images/search_image.png" />
          <Search.SearchEmptyText>
            Discover & try searching albums and tracks to listen for the current
            mood.
          </Search.SearchEmptyText>
        </Search.SearchEmptyContainer>
      </Search.GrayMainContainer>
    </>
  );
}
