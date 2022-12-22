import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const LogIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState<any>("");

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/user/login", {
        email: data.email,
        password: data.password,
      });
      setLogin(true);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLogin(false);
    }
  };
  return (
    <div className="login mt-[20%] p-10 m-auto">
      <h1 className="text-white text-3xl">Login</h1>
      <form>
        <input
          className="login w-full text-white mt-4 p-3 border-b-[2px] border-b-stone-100"
          placeholder="Email address"
          name="email"
          type="email"
          onChange={handleChange}
          value={data.email}
        ></input>

        <input
          className="login w-full text-white mt-2 p-3 border-b-[2px] border-b-stone-100"
          placeholder="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={data.password}
        ></input>
        <button
          className="mt-9 bg-red-500 text-white p-2 mt-2 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Login to your account
        </button>
      </form>
    </div>
  );
};

export default LogIn;
