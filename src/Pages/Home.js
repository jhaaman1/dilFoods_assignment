import React from "react";
import Product from "../Components/Card/Product";

const Home = () => {
  return (
    <div>
      <div
        className="w-4/5 m-auto h-100 flex justify-between "
        // style={{ border: "2px solid red " }}
      >
        <div className="bg-slate-50	">
          {/* Text decoration remaining in below section */}
          <div className="font-bold text-5xl font-serif decoration-gray-300 py-12">
            <span>Lowest Prices </span>
            <br />
            <span>Best Quality </span>
            <br />
            <span> Shopping </span>
          </div>
          <div className="flex ps-4 pt-4 flex-wrap w-auto">
            <div className="flex gap-2">
              <img
                src="	https://images.meesho.com/images/pow/freeDelivery_jamun.svg"
                alt=""
              />
              <div className="break-words w-20">
                <span>Free Delivery</span>
                {/* <span> </span> */}
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src="		https://images.meesho.com/images/pow/cod_jamun.svg"
                alt=""
              />
              <div className="break-words w-20">
                <span>Cash on Delivery</span>
                {/* <span></span> */}
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src="		https://images.meesho.com/images/pow/easyReturns_jamun.svg"
                alt=""
              />
              <div className="break-words w-20">
                <span>Easy Returns </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src="https://images.meesho.com/images/marketing/1678691617864_512.webp" />
        </div>
      </div>
      <Product  />
    </div>
  );
};

export default Home;
