import bookmark from "../images/icon-nav-bookmark.svg";
import home from "../images/icon-nav-home.svg";
import movies from "../images/icon-nav-movies.svg";
import tvSeries from "../images/icon-nav-tv-series.svg";
import logo from "../images/Path.png";
import avatar from "../images/image-avatar.png";

const Header = () => {
  return (
    <div className="flex justify-between bg-[#161D2F] h-full p-4 xl:w-[7%] xl:flex-col xl:h-[100vh] xl:justify-start md:rounded-md ">
      <img className="" src={logo} />
      <div className="flex h-full gap-3 xl:flex-col xl:h-10 xl:mt-[20vh] xl:mb-[60vh]">
        <img className="" src={home} />
        <img className="" src={movies} />
        <img className="" src={tvSeries} />
        <img className="" src={bookmark} />
      </div>
      <img className="w-7 xl:block  xl:w-28" src={avatar} />
    </div>
  );
};

export default Header;
