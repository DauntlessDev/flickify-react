import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { useSelector } from "react-redux";
import * as Main from "./mainStyles";
import AlbumContainer from "./small-components/AlbumContainer";
import ArtistContainer from "./small-components/ArtistContainer";
import MainHeaderContainer from "./small-components/MainHeaderContainer";

export default function MainContainer() {
  const user = useSelector((state) => state.api.user);
  const recentlyPlayed = useSelector((state) => state.api.recentlyPlayed);
  const newReleases = useSelector((state) => state.api.newReleases);
  const topTracks = useSelector((state) => state.api.topTracks);
  const artists = useSelector((state) => state.api.artists);

  const windowWidth = useWindowWidth();

  return (
    <Main.Container>
      <MainHeaderContainer
        userProfile={user.images[0].url}
        userName={user.display_name}
      />
      <Main.MainBar>
        <Main.MainContainer>
          {/* <MainFeatureContainer /> */}
          <Main.Title>Recently Played</Main.Title>
          <Main.SubTitle>Your last played tracks.</Main.SubTitle>
          <Main.AlbumContainer>
            {recentlyPlayed &&
              recentlyPlayed.map((item, index) =>
                index < windowWidth / 300 ? (
                  <AlbumContainer
                    key={index}
                    title={item.track.album.name}
                    src={item.track.album.images[0].url}
                    singer={item.track.artists[0].name}
                  />
                ) : null
              )}
          </Main.AlbumContainer>
          <Main.Title>New Releases</Main.Title>
          <Main.SubTitle>Fresh tracks recommended for you.</Main.SubTitle>
          <Main.AlbumContainer>
            {newReleases &&
              newReleases.map((item, index) =>
                index < windowWidth / 300 ? (
                  <AlbumContainer
                    key={index}
                    title={item.name}
                    src={item.images[0].url}
                    singer={item.artists[0].name}
                  />
                ) : null
              )}
          </Main.AlbumContainer>
          <Main.Title>Top Tracks</Main.Title>
          <Main.SubTitle>
            Most played tracks which fits your taste.
          </Main.SubTitle>
          <Main.AlbumContainer>
            {topTracks &&
              topTracks.map((item, index) =>
                index < windowWidth / 300 ? (
                  <AlbumContainer
                    key={index}
                    title={item.album.name}
                    src={item.album.images[0].url}
                    singer={item.artists[0].name}
                  />
                ) : null
              )}
          </Main.AlbumContainer>
          <Main.Title>Popular Artists</Main.Title>
          <Main.ArtistContainer>
            {artists &&
              artists.map((item, index) =>
                index < windowWidth / 300 ? (
                  <ArtistContainer
                    key={index}
                    name={item.name}
                    src={item.images[0].url}
                  />
                ) : null
              )}
          </Main.ArtistContainer>
        </Main.MainContainer>
      </Main.MainBar>
    </Main.Container>
  );
}
