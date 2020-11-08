import React from "react";
import * as Main from "./mainStyles";
import AlbumContainer from "./small-components/AlbumContainer";
import ArtistContainer from "./small-components/ArtistContainer";

export default function MainContainer() {
  return (
    <Main.MainBar>
      <Main.Header>
        <Main.HeaderGroup>
          <Main.HeaderTextLink>Discover</Main.HeaderTextLink>
          <Main.HeaderTextLink>My Library</Main.HeaderTextLink>
          <Main.HeaderTextLink>Radio</Main.HeaderTextLink>
        </Main.HeaderGroup>
        <Main.HeaderGroup>
          <Main.HeaderSearchBar />
            <Main.HeaderProfile src="assets/images/sample_small_pic.JPG" />
        </Main.HeaderGroup>
      </Main.Header>

      <Main.Feature>
        <Main.FeatureLargeText>Flume: Skin</Main.FeatureLargeText>
        <Main.FeatureSmallText>
          Flume walks us through his 'weird' mew album, 'Skin'. He has one goal,
          "I wanna make weird stuff".
        </Main.FeatureSmallText>
        <Main.FeatureButton>Play</Main.FeatureButton>
        <Main.FeatureButton>Follow</Main.FeatureButton>
      </Main.Feature>

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
