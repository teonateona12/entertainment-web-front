const SearchedItem = ({ listItems, inputValue }: any) => {
  const searchedResult = listItems.filter((item: any) =>
    item.title.includes(inputValue)
  );
  return (
    <div className="flex flex-wrap gap-4 px-4 xl:ml-10 xl:w-[90%]">
      {searchedResult.map((item: any) => (
        <div className=" mt-2 w-[45%] md:w-[30%] ">
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
  );
};
export default SearchedItem;
