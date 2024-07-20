import React, { useState } from "react";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { IoSend } from "react-icons/io5";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("enter a valid message !!");
    } else {
      const { uid, displayName, photoURL } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        text: message,
        name: displayName,
        photo: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
      setMessage("");
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen px-5 mt-6 mb-2 sticky inset-x-0 bottom-0">
      <form
        onSubmit={(event) => {
          sendMessage(event);
        }}
      >
        <input
          type="text"
          placeholder="type message..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          className="w-4/5 placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <button
          type="submit"
          className=" border rounded-full ml-2 text-xl p-2 bg-blue-600 text-white -mb-16"
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
};
export default SendMessage;
