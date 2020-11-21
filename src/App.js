import * as ROUTES from "./constants/routes";
import { GlobalStyles } from "./globalstyles";
import "normalize.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useEffect } from "react";
import { SignUp, Home, Browse } from "./pages";
import { getTokenFromResponse } from "./redux/api/apiActions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTokenFromResponse());
  }, []);

  const loggedIn = useSelector((state) => state.api.loggedIn);

  return (
    <>
      <GlobalStyles />
      {/* <Browse /> */}
      <Router>
        <Switch>
          <IsUserRedirect
            user={loggedIn}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
          <ProtectedRoute user={loggedIn} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect
            user={loggedIn}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.SIGN_UP}
          >
            <SignUp />
          </IsUserRedirect>
        </Switch>
      </Router>
    </>
  );
}

export default App;
