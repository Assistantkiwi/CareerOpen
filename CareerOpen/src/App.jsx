import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Forms/SignIn.jsx";
import SignUp from "./components/Forms/SignUp.jsx";
import Body from "./components/Body/landpage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
