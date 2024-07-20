import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  return (
    <div
      className={`max-w-3xl w-fit py-3 pr-5 pl-2 flex border rounded-b-full shadow-lg mt-3 ${
        message.uid == user.uid
          ? "rounded-tl-full self-end border-blue-600 bg-blue-200 shadow-blue-400 mr-4"
          : "rounded-tr-full self-start border-white bg-blue-300 shadow-blue-400 ml-4"
      }`}
    >
      <img
        src={message.photo}
        alt="user avatar"
        className="w-8 h-8 rounded-full mr-2"
      />
      <div>
        <h2 className="text-xs text-left font-black font-mono -mt-1">
          {message.name}
        </h2>
        <p className="text-sm text-left text-gray-800">{message.text}</p>
      </div>
    </div>
  );
};
export default Message;
