import React, { useState } from "react";
import Card from "../Components/Card/Card";

const Product = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <h2 className="fw-600 text-2xl">Product for you</h2>
      <div
        className="flex gap-2 w-100"
        // style={{ border: "2px solid black" }}
      >
        <div className="w-1/4">
          <div>
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
        <div className="grid grid-rows-2	grid-flow-col">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  );
};

export default Product;
