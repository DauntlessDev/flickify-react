import React, { useState, useContext } from "react";
import { searchContext } from "../../../context/searchContext";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import Search from "@material-ui/icons/Search";
import * as Main from "../mainStyles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signOutSuccess } from "../../../redux/api/apiActions";

export default function MainHeaderContainer({ withSearchBar = false }) {
  const user = useSelector((state) => state.api.user);
  const { showSearch } = useContext(searchContext);
  const [clickedProfile, setClickedProfile] = useState(false);
  const dispatch = useDispatch();

  const style = {
    profileSymbol: {
      width: 18,
      height: 18,
      padding: 5,
    },

    searchSymbol: {
      width: 28,
      height: 28,
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
      <Main.HeaderGroup>
        {showSearch ? (
          <>
            <Main.HeaderSearchBarContainer>
              <Main.HeaderSearchBarIcon>
                <Search style={style.searchSymbol}/>
              </Main.HeaderSearchBarIcon>
              <Main.HeaderSearchBarInput placeholder="Search for Albums" />
            </Main.HeaderSearchBarContainer>
          </>
        ) : null}
      </Main.HeaderGroup>
    </Main.Header>
  ) : null;
}
