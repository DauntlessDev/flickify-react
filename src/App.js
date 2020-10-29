import Home from "./pages/Home";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import { GlobalStyles } from './globalstyles'
import 'normalize.css';

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <SignIn /> */}
      <SignUp />
      {/* <Home /> */}
    </>
  );
}

export default App;
