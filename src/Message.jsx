import React from "react";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdOutlineCancel } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  const handleDelete = async (id) => {
    console.log("Deleting message with ID:", id);
    if (window.confirm("Are you sure you want to delete this message?")) {
      await deleteDoc(doc(db, "messages", id));
    }
  };

  return (
    <div
      className={`max-w-3xl w-fit py-3 pr-5 pl-2 flex border rounded-b-full shadow-lg mt-3 ${
        message.uid === user?.uid
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
        <div className="flex items-center">
          <h2 className="text-xs text-left font-black font-mono -mt-1">
            {message.name}
          </h2>

          {message.uid === user?.uid ? (
            <button
              onClick={() => {
                handleDelete(message.id);
              }}
              className="relative ml-3 -mt-2 group"
            >
              <MdOutlineCancel className="text-sm" />
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-16 p-1 bg-black text-white text-xs text-center rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Delete
              </span>
            </button>
          ) : (
            <></>
          )}
        </div>

        <p className="text-sm text-left text-gray-800">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
