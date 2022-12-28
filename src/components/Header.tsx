import bookmark from "../images/icon-nav-bookmark.svg";
import home from "../images/icon-nav-home.svg";
import movies from "../images/icon-nav-movies.svg";
import tvSeries from "../images/icon-nav-tv-series.svg";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import "../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState<string>("");
  const navigate = useNavigate();

  const navHeandler = (navText: string) => {
    setNav(navText);
    if (navText === navText) {
      navigate(`/${navText}`);
    }
  };

  return (
    <div className="flex justify-between bg-[#161D2F] h-full p-4 xl:w-[10%] xl:flex-col xl:h-[100vh] xl:justify-start md:rounded-md">
      <img className="" src={logo} />
      <div className="flex h-full gap-3 xl:flex-col xl:h-10 xl:mt-[20vh] xl:mb-[60vh]">
        <img
          className={nav === "home" ? "icon" : ""}
          onClick={() => navHeandler("home")}
          src={home}
        />
        <img
          className={nav === "movies" ? "icon" : ""}
          onClick={() => navHeandler("movies")}
          src={movies}
        />
        <img
          className={nav === "tvseries" ? "icon" : ""}
          onClick={() => navHeandler("tvseries")}
          src={tvSeries}
        />
        <img
          className={nav === "bookmark" ? "icon" : ""}
          onClick={() => navHeandler("bookmark")}
          src={bookmark}
        />
      </div>
      <img className="w-7 xl:block  xl:w-28" src={avatar} />
    </div>
  );
};

export default Header;
