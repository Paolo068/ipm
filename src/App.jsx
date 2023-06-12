import { useState } from "react";
import { CssBaseline } from "@mui/material";

import SignIn from "./components/pages/Signin.jsx";
import SignUp from "./components/pages/Signup.jsx";

function App() {

  return (
    <>
      <CssBaseline>
        <SignIn></SignIn>
      </CssBaseline>
    </>
  );
}

export default App;
