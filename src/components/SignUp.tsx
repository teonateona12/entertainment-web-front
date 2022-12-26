import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const navigate = useNavigate();
  const [data, setData] = useState<any>({
    email: "",
    password: "",
  });

  const handleChange = ({ currentTarget: input }: any) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e: any) => {
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

    try {
      //const data = new FormData;
      const res = await axios.post("http://localhost:5000/api/user/signup", {
        email: data.email,
        password: data.password,
        avatar: selectedFile,
      });
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

          <div>
            <input
              type="file"
              name="avatar"
              value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.files)}
            ></input>
          </div>

          <button
            className="mt-8 w-full bg-red-500 text-white p-2 mt-2 rounded"
            type="submit"
            onClick={handleSubmit}
          >
            Create an account
          </button>
          <p className="text-white mt-5 text-center">
            Already have an account?{" "}
            <button className="text-red-500 ml-1">
              <Link to="/Login"> Login</Link>
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
