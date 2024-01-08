import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../Redux/Auth/Action";

const Login = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;
    console.log("Updated State:", { ...formValue, [name]: val });
    setFormValue({ ...formValue, [name]: val });
  };

  const handleCheckUser = (e) => {
    e.preventDefault();
    dispatch(
      userLogin({ email: formValue.email, password: formValue.password })
    )
      .then(() => {
        navigate("/");
        alert("Authentication successful!");
      })
      .catch((err) => {
        alert("Invalid email address or password");
      });
  };
  return (
    <div>
      <section className="mx-auto flex-grow w-full mt-10 mb-10 max-w-[1200px] px-5">
        <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
          <div className="">
            <p className="text-4xl text-center font-bold">LOGIN</p>
            <p className="text-center	">Welcome back, customer!</p>
          </div>

          <form className="mt-6 flex flex-col">
            <label for="email">Email Address</label>
            <input
              name="email"
              className="mb-3 mt-3 border px-4 py-2"
              type="email"
              placeholder="youremail@domain.com"
              value={formValue.email}
              onChange={(e) => handleChange(e)}
            />

            <label for="email">Password</label>
            <input
              name="password"
              className="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              value={formValue.password}
              onChange={(e) => handleChange(e)}
            />

            <input
              className="mt-3 border px-4 cursor-pointer rounded bg-red-700 py-2 text-white"
              type="submit"
              onClick={handleCheckUser}
            />
          </form>

          <p className="text-center">
            Don`t have account?
            <Link to="/signup" className="text-red-800 font-bold">
              Register now
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
