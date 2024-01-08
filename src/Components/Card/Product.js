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
        <h2 className="fw-600 mt-4 text-2xl">Product for you</h2>
        <div className="w-1/4">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an option
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Sort by: Relevance</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div className="grid grid-rows-6 grid-cols-4  items-center">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Product;
