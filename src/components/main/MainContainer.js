import React from "react";
import * as Main from "./mainStyles";
import AlbumContainer from "./small-components/AlbumContainer";
import ArtistContainer from "./small-components/ArtistContainer";
import MainHeaderContainer from "./small-components/MainHeaderContainer";

export default function MainContainer() {
  return (
    <Main.MainBar>
      <MainHeaderContainer />
      <Main.MainContainer>
        {/* <MainFeatureContainer /> */}
        <Main.Title>Popular Albums</Main.Title>
        <Main.AlbumContainer>
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
        </Main.AlbumContainer>
        <Main.Title>Popular Albums</Main.Title>
        <Main.AlbumContainer>
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
          <AlbumContainer
            src="assets/images/sample_small_pic.JPG"
            title="Daily Mix"
            singer="Hacked"
          />
        </Main.AlbumContainer>
        <Main.Title>Popular Artists</Main.Title>
        <Main.ArtistContainer>
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
          <ArtistContainer
            src="assets/images/sample_small_pic.JPG"
            name="Bruno Mars"
          />
        </Main.ArtistContainer>
      </Main.MainContainer>
    </Main.MainBar>
  );
}
