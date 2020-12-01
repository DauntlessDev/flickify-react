import React from "react";
import { useContext } from "react";
import { searchContext } from "../../../context/searchContext";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import * as Main from "../mainStyles";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { signOutSuccess } from "../../../redux/api/apiActions";

export default function MainHeaderContainer({ userProfile, userName }) {
  const { showPlayer } = useContext(searchContext);
  const [clickedProfile, setClickedProfile] = useState(false);
  const dispatch = useDispatch();

  const style = {
    profileSymbol: {
      width: 18,
      height: 18,
      padding: 5,
    },
  };

  return (
    <Main.Header>
      <Main.HeaderGroup>
        <Main.HeaderSearchBar active={showPlayer} />
      </Main.HeaderGroup>
      <Main.HeaderGroup>
        <Main.HeaderProfileContainer
          onClick={() => {
            setClickedProfile(!clickedProfile);
          }}
        >
          <Main.HeaderProfile src={userProfile} />
          <Main.HeaderProfileName>{userName}</Main.HeaderProfileName>
          <Main.HeaderProfileSymbol>
            {clickedProfile ? (
              <ExpandLess style={style.profileSymbol} />
            ) : (
              <ExpandMore style={style.profileSymbol} />
            )}
          </Main.HeaderProfileSymbol>
        </Main.HeaderProfileContainer>
        {clickedProfile ? (
          <Main.HeaderDropDown>
            <Main.HeaderDropDownOptions
              onClick={() => dispatch(signOutSuccess())}
            >
              Sign out
            </Main.HeaderDropDownOptions>
          </Main.HeaderDropDown>
        ) : null}
      </Main.HeaderGroup>
    </Main.Header>
  );
}
