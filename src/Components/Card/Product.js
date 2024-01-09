import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/App/Action";

const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.data);
  const isDataLoading = useSelector((state) => state.AppReducer.isLoading);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    // Log the data when it changes
    console.log("Data from Redux:", data);
  }, [data]);

  if (isDataLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="fw-600 mt-4 text-2xl">Products for you</h2>
      </div>
      <div className="grid grid-rows-6 grid-cols-4 gap-2  items-center " >
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Product;
