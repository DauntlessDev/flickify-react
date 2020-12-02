import React, { useEffect, useState, useContext } from "react";
import { searchContext } from "../../../context/searchContext";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import * as Main from "../mainStyles";
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

  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Main.Header show={show}>
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
