import bookmark from "../images/icon-nav-bookmark.svg";
import home from "../images/icon-nav-home.svg";
import movies from "../images/icon-nav-movies.svg";
import tvSeries from "../images/icon-nav-tv-series.svg";
import logo from "../images/logo.svg";
import "../index.css";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderProps } from "./types";

const Header = ({ avatarUrl, setIsLogin }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const btnHeandler = () => {
    setIsLogin(false);
    console.log(1);
    navigate("/");
  };
  const navHeandler = (navText: string) => {
    if (navText === navText) {
      navigate(`/${navText}`);
    }
  };
  return (
    <div className="flex justify-between bg-[#161D2F] h-full p-4 xl:w-[7%] xl:flex-col  xl:justify-start md:rounded-md xl:h-auto">
      <img className="" src={logo} />
      <div className="flex h-full gap-3 xl:flex-col xl:h-10 xl:mt-[20vh] xl:mb-[60vh]">
        <img
          className={location.pathname === "/home" ? "icon" : ""}
          onClick={() => navHeandler("home")}
          src={home}
        />

        <img
          className={location.pathname === "/movies" ? "icon" : ""}
          onClick={() => navHeandler("movies")}
          src={movies}
        />
        <img
          className={location.pathname === "/tvseries" ? "icon" : ""}
          onClick={() => navHeandler("tvseries")}
          src={tvSeries}
        />
        <img
          className={location.pathname === "/bookmark" ? "icon" : ""}
          onClick={() => navHeandler("bookmark")}
          src={bookmark}
        />
      </div>
      <div className="flex gap-3 xl:flex-col">
        <button  onClick={btnHeandler} className="text-white xl:text-2xl">
          Logout
        </button>
        <img
          className="w-10 h-10 xl:block  xl:w-28 rounded-full xl:h-[60px] "
          src={`https://entertainment-web.onrender.com/avatar/${avatarUrl}`}
        />
      </div>
    </div>
  );
};

export default Header;
