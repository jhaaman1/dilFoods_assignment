import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <nav class="mx-auto w-full mt-4 max-w-[1200px] px-5">
        <ul class="flex items-center">
          <li class="cursor-pointer">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </Link>
          </li>
          <li>
            <span class="mx-2 text-gray-500">&gt;</span>
          </li>

          <li class="text-gray-500">Checkout</li>
        </ul>
      </nav>

      <div class="flex-grow">
        <section class="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10">
          <h2 class="mx-auto px-5 text-2xl font-bold md:hidden">
            Complete Address
          </h2>

          <section class="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
            <table class="hidden lg:table">
              <thead class="h-16 bg-neutral-100">
                <tr>
                  <th class="bg-red-600 text-white">ADDRESS</th>
                  <th>PAYMENT METHOD</th>
                  <th>ORDER REVIEW</th>
                </tr>
              </thead>
            </table>

            <div class="py-5">
              <form class="flex w-full flex-col gap-3" action="">
                <div class="flex w-full justify-between gap-2">
                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name">
                      Full Name
                      <span class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Sarah Johnson"
                    />
                  </div>

                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name">
                      Email Address
                      <span class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="sarahj@maybell.com"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div class="flex w-full justify-between gap-2">
                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name">
                      Street
                      <span class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Big Serbian avenue, 18"
                    />
                  </div>

                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name">
                      City
                      <span class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Belgrade"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div class="flex w-full justify-between gap-2">
                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name">
                      ZIP code
                      <span class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      x-mask="999999"
                      class="w-full border px-4 py-2 outline-yellow-400"
                      placeholder="176356"
                    />
                  </div>

                  <div class="flex w-1/2 flex-col">
                    <label class="flex" for="name">
                      Recipient
                      <span class="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']"></span>
                    </label>
                    <input
                      class="w-full border px-4 py-2 outline-yellow-400"
                      type="text"
                      placeholder="Andrew Johnson"
                      name=""
                      id=""
                    />
                  </div>
                </div>

                <div class="flex flex-col">
                  <label for="">Commentary</label>
                  <textarea
                    class="border px-4 py-2 outline-yellow-400"
                    type="text"
                  ></textarea>
                </div>
              </form>
            </div>

            <div class="flex w-full items-center justify-between">
              <a href="catalog.html" class="text-sm text-violet-900">
                &larr; Back to the shop
              </a>

              <a href="checkout-delivery.html" class="bg-red-400 px-4 py-2">
                Place an order
              </a>
            </div>
          </section>
          {/* <!-- /form  --> */}

          {/* <!-- Summary  --> */}

          <section class="mx-auto w-full px-4 md:max-w-[400px]">
            <div class="">
              <div class="border py-5 px-4 shadow-md">
                <p class="font-bold">ORDER SUMMARY</p>

                <div class="flex justify-between border-b py-5">
                  <p>Subtotal</p>
                  <p>$1280</p>
                </div>

                <div class="flex justify-between border-b py-5">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>

                <div class="flex justify-between py-5">
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
