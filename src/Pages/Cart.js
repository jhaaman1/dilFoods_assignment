import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartData, getData } from "../Redux/App/Action";
import { Quantity } from "../Components/Cart/Quantity";
import { Remove } from "../Components/Cart/Remove";
import SubTotal from "../Components/Cart/SubTotal";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.cart);
  console.log("data", data);
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);
  return (
    <div>
      <section className="container mx-auto flex-grow max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        {/* <!-- Desktop cart table  --> */}
        <section className="hidden w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid">
          <table className="table-fixed">
            <thead className="h-16 bg-neutral-100">
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => {
                return (
                  <tr className="h-[100px]" key={item.id}>
                    <td className="align-middle">
                      <div className="flex">
                        <img
                          className="w-[90px]"
                          src={item.image_url}
                          alt="image"
                        />
                        <div className="ml-3 flex flex-col justify-center">
                          <p className="text-xl font-bold">{item.name}</p>
                          <p className="text-sm text-gray-400">Size: XL</p>
                        </div>
                      </div>
                    </td>
                    <td className="mx-auto text-center">&#36;{item.price}</td>
                    <td className="align-middle">
                      <div className="flex items-center justify-center">
                        <Quantity item={item} getData={getData} />
                      </div>
                    </td>
                    <td className="mx-auto text-center">
                      &#36;{(item.qty * item.price).toFixed(2)}
                    </td>
                    <td className="align-middle">
                      <Remove id={item.id} getData={getData} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        <section className="mx-auto w-full px-4 md:max-w-[400px]">
          <SubTotal />
          <Link to="/checkout">
            <div className="w-4/5 mx-10 text-center md:max-w-[400px] rounded mt-1 bg-red-900 py-2 text-white">
              Proceed to checkout
            </div>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Cart;
