import SignIn from "./pages/SignIn"
import Home from './pages/Home'
import Browse from './pages/Browse'
import SignUp from './pages/SignUp'
import store from './redux/store';
import * as ROUTES from './constants/routes'
import { GlobalStyles } from './globalstyles'
import 'normalize.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Router>
          <Switch>
            <IsUserRedirect
              user={store.auth}
              loggedInPath={ROUTES.BROWSE}
              exact path={ROUTES.HOME}>
              <Home />
            </IsUserRedirect>
            <ProtectedRoute
              user={store.auth}
              path={ROUTES.BROWSE}>
              <Browse />
            </ProtectedRoute>
            <IsUserRedirect
              user={store.auth}
              loggedInPath={ROUTES.BROWSE}
              exact path={ROUTES.SIGN_IN}>
              <SignIn />
            </IsUserRedirect>
            <IsUserRedirect
              user={store.auth}
              loggedInPath={ROUTES.BROWSE}
              exact path={ROUTES.SIGN_UP}>
              <SignUp />
            </IsUserRedirect>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
