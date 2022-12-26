import React from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [listItems, setListItems] = useState<any>([]);
  useEffect(() => {
    const getItemsList = async () => {
      const res = await axios.get(
        "https://entertainment-web.onrender.com/api/film"
      );
      setListItems(res.data);
    };
    getItemsList();
  }, []);
  return (
    <div className="md:p-5">
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home listItems={listItems} />} />
      </Routes>
    </div>
  );
}

export default App;
