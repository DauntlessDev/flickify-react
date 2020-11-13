import React from "react";
import * as Main from "../mainStyles";

export default function MainFeatureContainer() {
  return (
    <Main.Feature>
      <Main.FeatureLargeText>Flume: Skin</Main.FeatureLargeText>
      <Main.FeatureSmallText>
        Flume walks us through his 'weird' mew album, 'Skin'. He has one goal,
        "I wanna make weird stuff".
      </Main.FeatureSmallText>
      <Main.FeatureButton>Play</Main.FeatureButton>
      <Main.FeatureButton>Follow</Main.FeatureButton>
    </Main.Feature>
  );
}
