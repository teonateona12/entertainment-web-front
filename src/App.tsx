import React from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [listItems, setListItems] = useState<any>([]);
  const [trending, setTrending] = useState<any>([]);
  const trendingItem = listItems.filter((item: any) => item.isTrending == true);
  const recomendedItem = listItems.filter(
    (item: any) => item.isTrending == false
  );
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
        <Route
          path="/"
          element={
            <Home
              listItems={listItems}
              trendingItem={trendingItem}
              recomendedItem={recomendedItem}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
