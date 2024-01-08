import React from "react";
import { useDispatch } from "react-redux";
import { postToCart } from "../../Redux/App/Action";

const Card = ({ data }) => {
  const { image_url, name, offPrice, price, ratingimg, strikedoffprice } =
    data;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // Dispatch the action to add the product to the cart
    dispatch(postToCart(data));
    alert("Product added to Cart successfully")
  };

  return (
    <div
      className="w-3/4  block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:cursor-pointer"
      // style={{border: '2px solid red'}}
    >
      <div>
        <img src={image_url} alt="" className=" relative items-center " />
      </div>
      <div className="text-center text-slate-700	text-xl">
        <p>{name}</p>
      </div>
      <div className="pl-4 mt-3 ">
        <img src={ratingimg} alt="" className="w-2/6" />
      </div>
      <div className="flex gap-4 items-center pt-2">
        <p className="text-xl font-medium whitespace-nowrap">Rs {price}</p>
        <p className="line-through whitespace-nowrap"> {strikedoffprice}</p>
        <p className="text-md font-medium whitespace-nowrap decoration-green-700">
          {offPrice}
        </p>
      </div>
      <button
        className="relative mt-10 mx-6 text-white bg-red-500 px-4 py-2 rounded"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
