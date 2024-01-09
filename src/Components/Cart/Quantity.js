// Inside Quantity.js

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartData, updateQuantity } from "../../Redux/App/Action";

const Quantity = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = (operation) => {
    const updatedItem = { ...item };
    if (operation === "inc") updatedItem.qty += 1;
    else if (operation === "dec" && updatedItem.qty > 1) updatedItem.qty -= 1;

    console.log("item:", item);
    console.log("updatedItem:", updatedItem);

    dispatch(updateQuantity(item.id, updatedItem));
  };

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  return (
    <>
      <button
        className="flex relative m-2 mt-6 h-8 w-8 cursor-pointer items-center justify-center border focus:ring-gray-500 active:ring-2"
        onClick={() => handleClick("dec")}
      >
        &minus;
      </button>
      <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
        {item.qty}
      </div>
      <button
        className="flex h-8 w-8 mt-6 relative cursor-pointer items-center justify-center border focus:ring-gray-500 active:ring-2"
        onClick={() => handleClick("inc")}
      >
        &#43;
      </button>
    </>
  );
};

export { Quantity };
