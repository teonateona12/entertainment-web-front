import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import search from "../images/icon-search.svg";

const Home = ({ listItems }: any) => {
  return (
    <div className="xl:flex">
      <Header />
      <div className="flex px-2 md:px-0 py-7 xl:h-full xl:w-full xl:p-[4%]">
        <img src={search} />
        <input
          className="bg-black w-full ml-3 xl:text-2xl"
          placeholder="Search for movies or TV series"
        ></input>
      </div>
      {/* {listItems.map((item: any) => (
        <div className="flex justify-between mt-2">
          <p>{item.title}</p>
          <img
            src={`http://entertainment-web.onrender.com/images/${item.regularSmall}`}
          ></img>
          <div className="flex  "></div>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
