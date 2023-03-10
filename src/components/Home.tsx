import Header from "./Header";
import search from "../images/icon-search.svg";
import TrendEndRecom from "./TrendEndRecom";
import SearchedItem from "./SearchedItem";
import { HomeProps } from "./types";

const Home = ({
  listItems,
  trendingItem,
  recomendedItem,
  inputValue,
  setInputValue,
  avatarUrl,
  setIsLogin,
}: HomeProps) => {
  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

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
        {inputValue.length === 0 ? (
          <TrendEndRecom
            trendingItem={trendingItem}
            recomendedItem={recomendedItem}
          />
        ) : (
          <SearchedItem listItems={listItems} inputValue={inputValue} />
        )}
      </div>
    </div>
  );
};

export default Home;
