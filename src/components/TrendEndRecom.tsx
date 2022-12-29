import { Item, TrendEndRecProps } from "./types";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import bookmark from "../images/icon-nav-bookmark.svg";

import "@splidejs/react-splide/css";

const TrendEndRecom = ({ trendingItem, recomendedItem }: TrendEndRecProps) => {
  const options = {
    autoplay: true,
    interval: 1000,
    fixedWidth: 370,
    rewind: true,
    gap: 30,
    pagination: false,
    arrows: false,
  };
  return (
    <div>
      <div className="px-4 xl:ml-10">
        <h1 className="text-white xl:text-3xl">Trending</h1>
        <div>
          <Splide
            options={options}
            aria-labelledby="autoplay-example-heading"
            hasTrack={false}
          >
            <div className="" style={{ position: "relative" }}>
              <SplideTrack className="w-[100%]">
                {trendingItem.map((item: Item) => (
                  <SplideSlide>
                    <div className=" mt-2 ">
                      <img
                        className="rounded-lg"
                        src={`http://entertainment-web.onrender.com/images/${item.trendingSmall}`}
                      ></img>
                      <div className="-mt-[30%] px-3 py-8">
                        <div className="flex gap-1 mt-3">
                          <p className="text-white text-xs">{item.year}</p>
                          <p className="text-white text-xs">{item.category}</p>
                          <p className="text-white text-xs">{item.rating}</p>
                        </div>
                        <p className="text-white">{item.title}</p>
                      </div>
                    </div>
                  </SplideSlide>
                ))}
              </SplideTrack>
            </div>

            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>

            <button className="splide__toggle">
              <span className="splide__toggle__play">Play</span>
              <span className="splide__toggle__pause">Pause</span>
            </button>
          </Splide>
        </div>

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
        <h1 className="text-white xl:text-3xl">Recommended for you</h1>
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
              <p className="text-white xl:text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendEndRecom;
