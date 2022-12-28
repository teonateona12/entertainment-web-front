import React from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import axios from "axios";
import Movies from "./components/Movies";
import Tvseries from "./components/Tvseries";
import Bookmarked from "./components/Bookmarked";
import { Item } from "./components/types";

function App() {
  const [listItems, setListItems] = useState<Item[]>([]);

  const [inputValue, setInputValue] = useState("");
  const trendingItem = listItems.filter(
    (item: Item) => item.isTrending == true
  );
  const recomendedItem = listItems.filter(
    (item: Item) => item.isTrending == false
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
          path="/home"
          element={
            <Home
              inputValue={inputValue}
              setInputValue={setInputValue}
              listItems={listItems}
              trendingItem={trendingItem}
              recomendedItem={recomendedItem}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              inputValue={inputValue}
              setInputValue={setInputValue}
              listItems={listItems}
            />
          }
        />
        <Route
          path="/tvseries"
          element={
            <Tvseries
              inputValue={inputValue}
              setInputValue={setInputValue}
              listItems={listItems}
            />
          }
        />
        <Route
          path="/bookmark"
          element={
            <Bookmarked
              inputValue={inputValue}
              setInputValue={setInputValue}
              listItems={listItems}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
