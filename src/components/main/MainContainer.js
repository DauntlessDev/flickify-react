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
  return (
    <Main.MainBar>
      <MainHeaderContainer userProfile={user.images[0].url} userName={user.display_name}  />
      <Main.MainContainer>
        {/* <MainFeatureContainer /> */}
        <Main.Title>Recently Played</Main.Title>
        <Main.SubTitle>Your last played tracks.</Main.SubTitle>
        <Main.AlbumContainer>
          {recentlyPlayed &&
            recentlyPlayed.map((item, idx) => (
              <AlbumContainer
                key={idx}
                title={item.track.album.name}
                src={item.track.album.images[0].url}
                singer={item.track.artists[0].name}
              />
            ))}
        </Main.AlbumContainer>
        <Main.Title>New Releases</Main.Title>
        <Main.SubTitle>Fresh tracks recommended for you.</Main.SubTitle>
        <Main.AlbumContainer>
          {newReleases &&
            newReleases.map((item, idx) => (
              <AlbumContainer
                key={idx}
                title={item.name}
                src={item.images[0].url}
                singer={item.artists[0].name}
              />
            ))}
        </Main.AlbumContainer>
        <Main.Title>Top Tracks</Main.Title>
        <Main.SubTitle>Most played tracks which fits your taste.</Main.SubTitle>
        <Main.AlbumContainer>
          {topTracks &&
            topTracks.map((item, idx) => (
              <AlbumContainer
                key={idx}
                title={item.album.name}
                src={item.album.images[0].url}
                singer={item.artists[0].name}
              />
            ))}
        </Main.AlbumContainer>
        <Main.Title>Popular Artists</Main.Title>
        <Main.ArtistContainer>
          {artists &&
            artists.map((item, idx) => (
              <ArtistContainer
                key={idx}
                name={item.name}
                src={item.images[0].url}
              />
            ))}
        </Main.ArtistContainer>
      </Main.MainContainer>
    </Main.MainBar>
  );
}
