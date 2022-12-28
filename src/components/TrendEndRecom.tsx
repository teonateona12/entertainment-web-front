import { Item, TrendEndRecProps } from "./types";

const TrendEndRecom = ({ trendingItem, recomendedItem }: TrendEndRecProps) => {
  return (
    <div className="">
      <div className="px-4 xl:ml-10">
        <h1 className="text-white">Trending</h1>
        {/* <div className="flex  gap-4">
          {trendingItem.map((item: Item) => (
            <div className=" mt-2 ">
              <img
                className="rounded-lg"
                src={`http://entertainment-web.onrender.com/images/${item.trendingSmall}`}
              ></img>
              <div className="-mt-[30%]">
                <div className="flex gap-1 mt-3">
                  <p className="text-white text-xs">{item.year}</p>
                  <p className="text-white text-xs">{item.category}</p>
                  <p className="text-white text-xs">{item.rating}</p>
                </div>
                <p className="text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <div className="px-4 xl:ml-10">
        <h1 className="text-white">Recommended for you</h1>
        <div className="flex flex-wrap gap-4">
          {recomendedItem.map((item: Item) => (
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
              <p className="text-white">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendEndRecom;
