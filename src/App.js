import Home from "./pages/Home";
import SignIn from "./pages/SignIn"
import { GlobalStyles } from './globalstyles'
import 'normalize.css';

function App() {
  return (
    <>
      <GlobalStyles />
      <SignIn />
      {/* <Home /> */}
    </>
  );
}

export default App;
