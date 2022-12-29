import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [image, setImage] = useState<string>("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleChange = (e: any) => {
    setImage(e.target.files[0]);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (email === "") {
      setEmailErr("Can’t be empty");
    } else {
      setEmailErr("");
    }
    if (password === "") {
      setPasswordErr("Can’t be empty");
    } else {
      setPasswordErr("");
    }
    const formData = new FormData();
    formData.append("avatar", image);
    formData.append("email", email);
    formData.append("password", password);
    try {
      const res = await axios.post(
        "https://entertainment-web.onrender.com/api/user/signup",
        formData
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[8%] md:px-[20%] lg:px-[30%]">
      <div className="login mt-[20%] p-10 m-auto">
        <h1 className="text-white text-3xl">Sign Up</h1>
        <form>
          <div className="flex mt-4 py-3 border-b-[2px] border-b-stone-100">
            <input
              className="login w-full text-white  p-3 "
              placeholder="Email address"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            ></input>
            <small className="text-red-500 py-3"> {emailErr} </small>
          </div>

          <div className="flex mt-4 py-3 border-b-[2px] border-b-stone-100">
            <input
              className="login w-full text-white  p-3 "
              placeholder="Password"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            ></input>
            <small className="text-red-500 py-3">{passwordErr} </small>
          </div>

          <div className="mt-5">
            <input
              className="text-white"
              type="file"
              name="avatar"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <button
            className="mt-8 w-full bg-red-500 text-white p-2 mt-2 rounded"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Create an account
          </button>
          <p className="text-white mt-5 text-center">
            Already have an account?{" "}
            <button className="text-red-500 ml-1">
              <Link to="/"> Login</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
