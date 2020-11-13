import React from "react";
import * as Main from "./mainStyles";
import AlbumContainer from "./small-components/AlbumContainer";
import ArtistContainer from "./small-components/ArtistContainer";
import MainFeatureContainer from "./small-components/MainFeatureContainer";
import MainHeaderContainer from "./small-components/MainHeaderContainer";

export default function MainContainer() {
  return (
    <Main.MainBar>
      <MainHeaderContainer />
      <MainFeatureContainer />
      <Main.Title>Popular Albums</Main.Title>
      <Main.AlbumContainer>
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
          singer="Hacked"
        />
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
          singer="Hacked"
        />
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
          singer="Hacked"
        />
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
          singer="Hacked"
        />
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
          singer="Hacked"
        />
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
          singer="Hacked"
        />
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
          singer="Hacked"
        />
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
          singer="Hacked"
        />
        <AlbumContainer
          src="assets/images/sample_small_pic.JPG"
          title="Children of Bodom"
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
    </Main.MainBar>
  );
}
