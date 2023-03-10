import Header from "./Header";
import search from "../images/icon-search.svg";
import SearchedItem from "./SearchedItem";
import { Props, Item } from "./types";

const Movies = ({
  inputValue,
  setInputValue,
  listItems,
  avatarUrl,

  setIsLogin,
}: Props) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const allMovie = listItems.filter((item: Item) => item.category === "Movie");

  return (
    <div className="xl:flex ">
      <Header avatarUrl={avatarUrl} setIsLogin={setIsLogin} />
      <div className="xl:w-[90%]">
        <div className="flex px-2 md:px-0 py-7 xl:w-full xl:p-[4%] ">
          <img src={search} />
          <input
            value={capitalizeFirstLetter(inputValue)}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            className="bg-black w-full ml-3 xl:text-2xl text-white"
            placeholder="Search for movies or TV series"
          ></input>
        </div>

        <div className="px-4 xl:ml-10">
          <h1 className="text-white xl:text-3xl">Movies</h1>
          {inputValue.length === 0 ? (
            <div className="flex flex-wrap gap-4">
              {allMovie.map((item: Item) => (
                <div className=" mt-2 w-[45%] md:w-[30%] xl:w-[20%] ">
                  <img
                    className="rounded-lg "
                    src={`http://entertainment-web.onrender.com/images/${item.regularSmall}`}
                  ></img>
                  <div className="flex gap-1 mt-3">
                    <p className="text-white text-xs">{item.year}</p>
                    <p className="text-white text-xs">{item.category}</p>
                    <p className="text-white text-xs">{item.rating}</p>
                  </div>
                  <p className="text-white xl:text-lg">{item.title}</p>
                </div>
              ))}
              <div />
            </div>
          ) : (
            <SearchedItem listItems={allMovie} inputValue={inputValue} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
