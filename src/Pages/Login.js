import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section class="mx-auto flex-grow w-full mt-10 mb-10 max-w-[1200px] px-5">
        <div class="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
          <div class="">
            <p class="text-4xl text-center font-bold">LOGIN</p>
            <p className="text-center	">Welcome back, customer!</p>
          </div>

          <form class="mt-6 flex flex-col">
            <label for="email">Email Address</label>
            <input
              class="mb-3 mt-3 border px-4 py-2"
              type="email"
              placeholder="youremail@domain.com"
            />

            <label for="email">Password</label>
            <input
              class="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />
          </form>

          <div class="mt-4 flex justify-between">
            <form class="flex gap-2">
              <input type="checkbox" />
              <label for="checkbox">Remember me</label>
            </form>
            <a href="#" class="text-red-900">
              Forgot password
            </a>
          </div>

          <div class="my-5 rounded w-full text-center	 bg-red-700 py-2 text-white">
            LOGIN
          </div>

          <p class="text-center">
            Don`t have account?
            <Link to="/signup" class="text-red-800 font-bold">
              Register now
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
