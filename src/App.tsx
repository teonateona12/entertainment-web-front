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
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);

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
        {isLogin ? (
          <>
            <Route
              path="/home"
              element={
                <Home
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  listItems={listItems}
                  trendingItem={trendingItem}
                  recomendedItem={recomendedItem}
                  avatarUrl={avatarUrl}
                  setAvatarUrl={setAvatarUrl}
                  setIsLogin={setIsLogin}
                />
              }
            />{" "}
            <Route
              path="/movies"
              element={
                <Movies
                  avatarUrl={avatarUrl}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  listItems={listItems}
                  setIsLogin={setIsLogin}
                />
              }
            />{" "}
            <Route
              path="/tvseries"
              element={
                <Tvseries
                  avatarUrl={avatarUrl}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  listItems={listItems}
                  setIsLogin={setIsLogin}
                />
              }
            />
            <Route
              path="/bookmark"
              element={
                <Bookmarked
                  avatarUrl={avatarUrl}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  listItems={listItems}
                  setIsLogin={setIsLogin}
                />
              }
            />{" "}
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <LogIn setAvatarUrl={setAvatarUrl} setIsLogin={setIsLogin} />
              }
            />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
