import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <nav className="mx-auto w-full mt-4 max-w-[1200px] px-5">
        <ul className="flex items-center">
          <li className="cursor-pointer">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </Link>
          </li>
          <li>
            <span className="mx-2 text-gray-500">&gt;</span>
          </li>

          <li className="text-gray-500">Checkout</li>
        </ul>
      </nav>

      <div className="flex-grow">
        <section className="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10">
          <h2 className="mx-auto px-5 text-2xl font-bold md:hidden">
            Complete Address
          </h2>

          <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
            <table className="hidden lg:table">
              <thead className="h-16 bg-neutral-100">
                <tr>
                  <th className="bg-red-600 text-white">ADDRESS</th>
                  <th>PAYMENT METHOD</th>
                  <th>ORDER REVIEW</th>
                </tr>
              </thead>
            </table>

            <div className="py-5">
              <form className="flex w-full flex-col gap-3" action="">
                <div className="flex w-full justify-between gap-2">
                  <div className="flex w-1/2 flex-col">
                    <label className="flex" for="name">
                      Full Name
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Sarah Johnson"
                    />
                  </div>

                  <div className="flex w-1/2 flex-col">
                    <label className="flex" for="name">
                      Email Address
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="sarahj@maybell.com"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between gap-2">
                  <div className="flex w-1/2 flex-col">
                    <label className="flex" for="name">
                      Street
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Big Serbian avenue, 18"
                    />
                  </div>

                  <div className="flex w-1/2 flex-col">
                    <label className="flex" for="name">
                      City
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Belgrade"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between gap-2">
                  <div className="flex w-1/2 flex-col">
                    <label className="flex" for="name">
                      ZIP code
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      x-mask="999999"
                      className="w-full border px-4 py-2 outline-yellow-400"
                      placeholder="176356"
                    />
                  </div>

                  <div className="flex w-1/2 flex-col">
                    <label className="flex" for="name">
                      Recipient
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      className="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Andrew Johnson"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label for="">Commentary</label>
                  <textarea
                    className="border px-4 py-2 outline-yellow-400"
                    type="text"
                  ></textarea>
                </div>
              </form>
            </div>

            <div className="flex w-full items-center justify-between">
              <Link to="/" className="text-sm text-violet-900">
                &larr; Go to the shop
              </Link>

              <Link to="/payment" className="bg-red-700 text-white px-4 py-2 rounded-sm">
                Place an order
              </Link>
            </div>
          </section>
          {/* <!-- /form  --> */}

          {/* <!-- Summary  --> */}

          <section className="mx-auto w-full px-4 md:max-w-[400px]">
            <div className="">
              <div className="border py-5 px-4 shadow-md">
                <p className="font-bold">ORDER SUMMARY</p>

                <div className="flex justify-between border-b py-5">
                  <p>Subtotal</p>
                  <p>$1280</p>
                </div>

                <div className="flex justify-between border-b py-5">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>

                <div className="flex justify-between py-5">
                  <p>Total</p>
                  <p>$1280</p>
                </div>
              </div>
            </div>
          </section>
        </section>

      </div>
    </div>
  );
};

export default Checkout;
