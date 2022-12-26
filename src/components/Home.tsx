import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

const Home = () => {
  const [listItems, setListItems] = useState<any>([]);
  useEffect(() => {
    const getItemsList = async () => {
      const res = await axios.get(
        "https://entertainment-web.onrender.com/api/film"
      );
      setListItems(res.data);
    };
    getItemsList();
  }, []);
  console.log(listItems);
  return (
    <div>
      <Header />
      {/* {listItems.map((item: any) => (
        <div className="flex justify-between mt-2">
          <p>{item.title}</p>
          <img
            src={`http://entertainment-web.onrender.com/images/${item.regularSmall}`}
          ></img>
           <img src={`http://localhost:5000/images/${item.regularSmall}`}></img>
          <img src={`http://localhost:5000/images/${item.regularLarge}`}></img> 
          <div className="flex  "></div>
        </div>
      ))} */}
    </div>
  );
};

export default Home;
