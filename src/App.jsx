import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter } from "react-router-dom";
import DevNavBar from "./components/DevNavBar";
import React from "react";
import SignIn from "./components/SignIn";
import { useMainContext } from "./context/main_context";
function App() {
  const { isLoggedIn } = useMainContext();

  return (
    <div className='App'>
      <BrowserRouter>{!isLoggedIn ? <SignIn /> : <DevNavBar />}</BrowserRouter>
    </div>
  );
}

export default App;
