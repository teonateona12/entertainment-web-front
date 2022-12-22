import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = () => {
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
      <Link to="/">Home</Link>;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>signup</h1>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={data.email}
        ></input>
        <label>password</label>
        <input
          name="password"
          type="text"
          onChange={handleChange}
          value={data.password}
        ></input>
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default SignUp;
