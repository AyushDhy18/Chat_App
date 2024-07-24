import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Chatbox = () => {
  const [messages, setmessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unSubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort((a, b) => {
        return a.createdAt - b.createdAt;
      });
      setmessages(sortedMessages);
    });
    return () => unSubscribe;
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "messages", id));
  };

  return (
    <div className="text-3xl text-center flex flex-col bg-teal-500/70">
      {messages?.map((message) => (
        <Message key={message.id} message={message} onDelete={handleDelete()} />
      ))}
      <div ref={scroll}></div>
      <SendMessage scroll={scroll} />
    </div>
  );
};
export default Chatbox;
