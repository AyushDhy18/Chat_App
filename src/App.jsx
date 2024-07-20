import React from "react";
import NavBar from "./NavBar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Welcome from "./Welcome";
import Chatbox from "./Chatbox";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="h-screen">
      <div className="">
        <NavBar />
      </div>
      {!user ? <Welcome /> : <Chatbox />}
    </div>
  );
};
export default App;
