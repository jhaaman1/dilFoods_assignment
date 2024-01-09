import React from "react";
import { useDispatch } from "react-redux";
import { postToCart } from "../../Redux/App/Action";

const Card = ({ data }) => {
  const { image_url, name, offPrice, price, ratingimg, strikedoffprice } = data;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(postToCart(data));
    alert("Product added to Cart successfully");
    window.location.reload();
  };

  return (
    <div className="w-full h-4/5 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:cursor-pointer">
      <img src={image_url} alt="" className="relative items-center h-3/5 m-auto" />
      <div className="text-center text-slate-700 text-md w-full h-auto" >
        <p>{name}</p>
      </div>
          
      <div className="flex text-center gap-4 pt-2" >
        <p className="text-xl font-medium whitespace-nowrap">Rs {price}</p>
        <p className="line-through whitespace-nowrap">{strikedoffprice}</p>
        <p className="text-md font-medium whitespace-nowrap decoration-green-700">
          {offPrice}
        </p>
      </div>
      {/* <div className="flex justify-center mt-4"> Adjusted the margin top */}
        <div
          className="text-white text-center bg-red-500 mt-4 px-6 py-3 rounded-lg text-lg font-medium"
          onClick={handleAddToCart}
        >
          Add to Cart
        </div>
      {/* </div> */}
    </div>
  );
};

export default Card;
