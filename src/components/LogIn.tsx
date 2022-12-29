import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { Login } from "./types";

const LogIn = ({ setAvatarUrl, setIsLogin }: Login) => {
  const navigate = useNavigate();

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [wrongEmailPas, setWrongEmailPas] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (data.email === "") {
      setEmailErr("Can’t be empty");
    } else {
      setEmailErr("");
    }
    if (data.password === "") {
      setPasswordErr("Can’t be empty");
    } else {
      setPasswordErr("");
    }
    navigate('/')

    try {
      const res = await axios.post(
        "https://entertainment-web.onrender.com/api/user/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      setAvatarUrl(res.data.avatar);
      setIsLogin(true);
      navigate("/home");
    } catch (error) {
      console.log(error);
      setWrongEmailPas("Wrong email or password");
    }
  };
  return (
    <div className="px-[8%] md:px-[20%] lg:px-[30%]">
      <div className="login mt-[20%] p-10 m-auto">
        <h1 className="text-white text-3xl">Login</h1>
        <form>
          <div className="flex mt-4 py-3 border-b-[2px] border-b-stone-100">
            <input
              className="login w-full text-white  p-3 "
              placeholder="Email address"
              name="email"
              type="email"
              onChange={handleChange}
              value={data.email}
            ></input>
            <small className="text-red-500 py-3">{emailErr}</small>
          </div>

          <div className="flex mt-4 py-3 border-b-[2px] border-b-stone-100">
            <input
              className="login w-full text-white  p-3 "
              placeholder="Password"
              name="password"
              type="password"
              onChange={handleChange}
              value={data.password}
            ></input>
            <small className="text-red-500 py-3">{passwordErr}</small>
          </div>
          <small className="text-red-500">{wrongEmailPas}</small>
          <button
            className=" w-full bg-red-500 text-white p-2 mt-2 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Login to your account
          </button>
          <p className="text-white mt-5 text-center">
            Don't have an account?
            <button className="text-red-500 ml-1">
              <Link to="/signup"> Sign Up</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
