import React, { useState, useContext } from "react";
import { searchContext } from "../../../context/searchContext";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import * as Main from "../mainStyles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signOutSuccess } from "../../../redux/api/apiActions";

export default function MainHeaderContainer({ withSearchBar = false }) {
  const user = useSelector((state) => state.api.user);
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

  const handleShowHeader = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  const [show, handleShow] = useState(false);
  window.addEventListener("scroll", handleShowHeader);

  return user ? (
    <Main.Header show={show}>
      <Main.HeaderGroup>
        <Main.HeaderProfileContainer
          onClick={() => {
            setClickedProfile(!clickedProfile);
          }}
        >
          <Main.HeaderProfile src={user.images[0].url} />
          <Main.HeaderProfileName>{user.display_name}</Main.HeaderProfileName>
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
      {withSearchBar ? (
        <Main.HeaderGroup>
          <Main.HeaderSearchBar active={showPlayer} />
        </Main.HeaderGroup>
      ) : null}
    </Main.Header>
  ) : null;
}
