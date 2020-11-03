import store from "./redux/store";
import * as ROUTES from "./constants/routes";
import { GlobalStyles } from "./globalstyles";
import "normalize.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useEffect } from "react";
import { SignIn, SignUp, Home, Browse } from "./pages";
import { getTokenFromResponse } from "./redux/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTokenFromResponse());
  }, []);

  const authToken = useSelector((state) => state.auth.authToken);

  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <IsUserRedirect
            user={authToken}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.HOME}
          >
            <Home />
          </IsUserRedirect>
          <ProtectedRoute user={authToken} path={ROUTES.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <IsUserRedirect
            user={authToken}
            loggedInPath={ROUTES.BROWSE}
            exact
            path={ROUTES.SIGN_IN}
          >
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect
            user={authToken}
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
