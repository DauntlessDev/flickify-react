import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { useSelector } from "react-redux";
import * as Main from "./mainStyles";
import AlbumContainer from "./small-components/AlbumContainer";
import ArtistContainer from "./small-components/ArtistContainer";
import MainHeaderContainer from "./small-components/MainHeaderContainer";

export default function MainContainer() {
  const recentlyPlayed = useSelector((state) => state.api.recentlyPlayed);
  const newReleases = useSelector((state) => state.api.newReleases);
  const topTracks = useSelector((state) => state.api.topTracks);
  const artists = useSelector((state) => state.api.artists);

  const windowWidth = useWindowWidth();

  return (
    <>
      <Main.MainContainer>
        <Main.Title>Recently Played</Main.Title>
        <Main.SubTitle>Your last played tracks.</Main.SubTitle>
        <Main.AlbumContainer>
          {recentlyPlayed &&
            recentlyPlayed.map((item, index) =>
              index < windowWidth / 300 ? (
                <AlbumContainer
                  key={"recently-" + item.track.album.id + index}
                  title={item.track.album.name}
                  src={item.track.album.images[0].url}
                  singer={item.track.artists[0].name}
                  id={item.track.album.id}
                />
              ) : null
            )}
        </Main.AlbumContainer>
        <Main.Title>Top Tracks</Main.Title>
        <Main.SubTitle>Most played tracks which fits your taste.</Main.SubTitle>
        <Main.AlbumContainer>
          {topTracks &&
            topTracks.map((item, index) =>
              index < windowWidth / 300 ? (
                <AlbumContainer
                  key={"top-" + item.id}
                  title={item.album.name}
                  src={item.album.images[0].url}
                  singer={item.artists[0].name}
                  id={item.album.id}
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
                  key={"new-" + item.id}
                  title={item.name}
                  src={item.images[0].url}
                  singer={item.artists[0].name}
                  id={item.id}
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
                  key={"popular-" + item.id}
                  name={item.name}
                  src={item.images[0].url}
                />
              ) : null
            )}
        </Main.ArtistContainer>
      </Main.MainContainer>
    </>
  );
}
