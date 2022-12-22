import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/user/signup", {
        email: data.email,
        password: data.password,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login mt-[20%] p-10 m-auto">
      <h1 className="text-white text-3xl">Sign Up</h1>
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
          className="mt-9 w-full bg-red-500 text-white p-2 mt-2 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Create an account
        </button>
        <p className="text-white mt-5 text-center">
          Already have an account?{" "}
          <button className="text-red-500">
            <Link to="/Login">Login</Link>
          </button>
        </p>
      </form>
    </div>
    // <div>
    //   <h1>signup</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>email</label>
    //     <input
    //       name="email"
    //       type="email"
    //       onChange={handleChange}
    //       value={data.email}
    //     ></input>
    //     <label>password</label>
    //     <input
    //       name="password"
    //       type="text"
    //       onChange={handleChange}
    //       value={data.password}
    //     ></input>
    //     <button type="submit">register</button>
    //   </form>
    // </div>
  );
};

export default SignUp;
