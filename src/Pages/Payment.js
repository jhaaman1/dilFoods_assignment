import React from "react";
import { Link } from "react-router-dom";
import SubTotal from "../Components/Cart/SubTotal";

const Payment = () => {
  return (
    <div>
      <section className="flex-grow">
        <section className="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10">
          <h2 className="mx-auto px-5 text-2xl font-bold md:hidden">
            Payment Method
          </h2>
          {/* <!-- form  --> */}
          <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10">
            <table className="hidden lg:table">
              <thead className="h-16 bg-neutral-100">
                <tr>
                  <th className="w-1/2">ADDRESS</th>
                  <th className="bg-red-600 text-white">PAYMENT METHOD</th>
                  {/* <th>ORDER REVIEW</th> */}
                </tr>
              </thead>
            </table>

            <div className="py-5">
              <form className="flex w-full flex-col gap-3" action="">
                <div className="flex w-full flex-col">
                  <label className="flex" for="name">
                    Payment Card Number
                  </label>
                  <input
                    x-mask="9999 9999 9999 9999"
                    className="w-full border px-4 py-2 lg:w-1/2"
                    placeholder="1223 4568 7644 4839"
                  />
                </div>

                <div className="flex w-full flex-col">
                  <label className="flex" for="name">
                    Card Holder
                  </label>
                  <input
                    className="w-full border px-4 py-2 lg:w-1/2"
                    type="text"
                    placeholder="SARAH JOHNSON"
                  />
                </div>

                <div className="flex items-center gap-5 lg:w-1/2">
                  <div className="flex flex-col">
                    <label className="flex" for="name">
                      Expiry Date
                    </label>

                    <div className="flex w-[150px] items-center gap-1">
                      <input
                        x-mask="99"
                        className="w-1/2 border px-4 py-2 text-center"
                        name=""
                        id=""
                        placeholder="10"
                      />

                      <span>/</span>

                      <input
                        x-mask="99"
                        className="w-1/2 border px-4 py-2 text-center"
                        name=""
                        id=""
                        placeholder="36"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-[60px] lg:w-[110px]">
                    <label className="flex" for="">
                      CVV/CVC
                    </label>
                    <input
                      x-mask="999"
                      className="w-full border py-2 text-center lg:w-1/2"
                      type="password"
                      placeholder="&bull;&bull;&bull;"
                    />
                  </div>
                </div>

               
              </form>
            </div>

            <div className="flex w-full items-center justify-between">
              <a
                href="catalog.html"
                className="hidden text-sm text-red-700 lg:block"
              >
                &larr; Back to the shop
              </a>

              <div className="mx-auto flex justify-center gap-2 lg:mx-0">
                <Link
                  to="/checkout"
                  className="bg-red-700 px-4 py-2 rounded text-white"
                >
                  Previous step
                </Link>

                <Link to="/orderPlaced" className="bg-red-700 text-white rounded px-4 py-2">
                  Place Order
                </Link>
              </div>
            </div>
          </section>
          {/* <!-- /form  --> */}

          {/* <!-- Summary  --> */}

          <SubTotal/>
        </section>
      </section>
    </div>
  );
};

export default Payment;
