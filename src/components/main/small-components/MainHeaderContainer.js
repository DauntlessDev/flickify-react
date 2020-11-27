import React from "react";
import { useContext } from "react";
import { searchContext } from "../../../context/searchContext";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import ChangeHistoryRoundedIcon from "@material-ui/icons/ChangeHistoryRounded";
import * as Main from "../mainStyles";
import { useState } from "react";

export default function MainHeaderContainer({ userProfile, userName }) {
  const { showPlayer } = useContext(searchContext);
  const { clickedProfile, setclickedProfile } = useState(false);

  const style = {
    profileSymbol: {
      width: 15,
      height: 15,
    },
  };

  return (
    <Main.Header>
      <Main.HeaderGroup>
        <Main.HeaderSearchBar active={showPlayer} />
      </Main.HeaderGroup>
      <Main.HeaderGroup>
        <Main.HeaderProfileContainer>
          <Main.HeaderProfile src={userProfile} />
          <Main.HeaderProfileName>{userName}</Main.HeaderProfileName>
          <Main.HeaderProfileSymbol>
            {clickedProfile ? (
              <DetailsRoundedIcon style={style.profileSymbol} />
            ) : (
              <ChangeHistoryRoundedIcon style={style.profileSymbol} />
            )}
          </Main.HeaderProfileSymbol>
        </Main.HeaderProfileContainer>
      </Main.HeaderGroup>
    </Main.Header>
  );
}
