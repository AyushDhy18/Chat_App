import React, { useState } from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import image from "./googlesignin.png";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    console.log("signed in");
  };

  const signOut = () => {
    auth.signOut();
    console.log("signed out");
  };
  console.log(auth, user);

  return (
    <div className="flex items-end justify-end px-6 py-2 bg-blue-400/30 ">
      {user ? (
        <div>
          <button
            className="border border-blue-600 bg-red-500 text-white hover:bg-red-600 p-1 rounded-lg"
            onClick={signOut}
            type="button"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>
          <button onClick={signIn} type="button" className="">
            <img src={image} className="w-36" />
          </button>
        </>
      )}
    </div>
  );
};
export default NavBar;
