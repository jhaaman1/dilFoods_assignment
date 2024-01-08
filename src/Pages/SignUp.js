import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSignup } from "../Redux/Auth/Action";

const SignUp = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.AuthReducer);
  console.log("isAuth", isAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && fullName) {
      dispatch(
        userSignup({
          email: email,
          password: password,
          fullName: fullName,
        })
      )
        .then((res) => {
          console.log('res',res)
          alert("Authentication successful!");
        })
        .catch((error) => {
          console.error(error)
          alert( "Something went wrong",);
        });
    }
  };

  return (
    <div>
      <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
        <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
          <div className="">
            <p className="text-4xl text-center font-bold">CREATE AN ACCOUNT</p>
          </div>

          <form className="mt-6 flex flex-col">
            <label for="name">Full Name</label>
            <input
              className="mb-3 mt-3 border px-4 py-2"
              type="text"
              placeholder="Aman Jha"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label className="mt-3" for="email">
              Email Address
            </label>
            <input
              className="mt-3 border px-4 py-2"
              type="email"
              placeholder="user@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <label className="mt-5" for="email">
              Password
            </label>
            <input
              className="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="mt-3 border px-4 py-2 cursor-pointer bg-red-700 text-white rounded"
              type="submit"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
             onClick={handleSubmit}
            />

          </form>

          <p className="text-center">
            Already have an account?
            <Link to="/login" className="text-red-900">
              Login now
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
