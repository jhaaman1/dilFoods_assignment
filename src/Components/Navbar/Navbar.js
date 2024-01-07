import React, { useState } from "react";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(""); // Set the default active tab

  const handleTabHover = (tab) => {
    setActiveTab(tab);
  };

  const handleMenuLeave = () => {
    setActiveTab("");
  };
  return (
    <div>
      <header class="relative bg-white">
        <div className="w-full">
          <Slider />
        </div>
        <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="border-b border-gray-200">
            <div class="flex h-16 items-center">
              {/* <!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. --> */}
              <button
                type="button"
                class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open menu</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* <!-- Logo --> */}
              <div class="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span class="sr-only">Your Company</span>
                  <img
                    class="h-14 w-auto"
                    src="https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg"
                    alt=""
                  />
                </Link>
              </div>

              {/* <!-- Flyout menus --> */}
              <div
                class="hidden lg:ml-8 lg:block lg:self-stretch"
                onMouseLeave={handleMenuLeave}
              >
                <div class="flex h-full space-x-8">
                  <div class="flex">
                    <div
                      class="relative flex"
                      onMouseEnter={() => handleTabHover("women")}
                    >
                      {/* <!-- Item active: "border-indigo-600 text-indigo-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" --> */}
                      <button
                        className={`${
                          activeTab === "women"
                            ? "border-indigo-600 text-indigo-600"
                            : "border-transparent text-gray-700 hover:text-gray-800"
                        } relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out`}
                      >
                        Women
                      </button>
                    </div>

                    {activeTab === "women" && (
                      <div class="absolute inset-x-0 top-full text-sm text-gray-500">
                        <div
                          class="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        ></div>

                        <div class="relative bg-white">
                          <div class="mx-auto max-w-7xl px-8">
                            <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                <div class="group relative text-base sm:text-sm">
                                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                                      alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                      class="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href="#"
                                    class="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      class="absolute inset-0 z-10"
                                      aria-hidden="true"
                                    ></span>
                                    New Arrivals
                                  </a>
                                  <p aria-hidden="true" class="mt-1">
                                    Shop now
                                  </p>
                                </div>
                                <div class="group relative text-base sm:text-sm">
                                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg"
                                      alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                      class="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href="#"
                                    class="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      class="absolute inset-0 z-10"
                                      aria-hidden="true"
                                    ></span>
                                    Basic Tees
                                  </a>
                                  <p aria-hidden="true" class="mt-1">
                                    Shop now
                                  </p>
                                </div>
                              </div>
                              <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                <div>
                                  <p
                                    id="Clothing-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Clothing
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Clothing-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Tops
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Dresses
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Pants
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Denim
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Sweaters
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        T-Shirts
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Jackets
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Activewear
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Browse All
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="Accessories-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Accessories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Accessories-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Watches
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Wallets
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Bags
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Sunglasses
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Hats
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Belts
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="Brands-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Brands
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Brands-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Full Nelson
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        My Way
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Re-Arranged
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Counterfeit
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Significant Other
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="flex">
                    <div
                      class="relative flex"
                      onMouseEnter={() => handleTabHover("men")}
                    >
                      <button
                        className={`${
                          activeTab === "men"
                            ? "border-indigo-600 text-indigo-600"
                            : "border-transparent text-gray-700 hover:text-gray-800"
                        } relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out`}
                      >
                        Men
                      </button>
                    </div>

                    {activeTab === "men" && (
                      <div class="absolute inset-x-0 top-full text-sm text-gray-500">
                        <div
                          class="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        ></div>

                        <div class="relative bg-white">
                          <div class="mx-auto max-w-7xl px-8">
                            <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                <div class="group relative text-base sm:text-sm">
                                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                                      alt="Drawstring top with elastic loop closure and textured interior padding."
                                      class="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href="#"
                                    class="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      class="absolute inset-0 z-10"
                                      aria-hidden="true"
                                    ></span>
                                    New Arrivals
                                  </a>
                                  <p aria-hidden="true" class="mt-1">
                                    Shop now
                                  </p>
                                </div>
                                <div class="group relative text-base sm:text-sm">
                                  <div class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                    <img
                                      src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg"
                                      alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt."
                                      class="object-cover object-center"
                                    />
                                  </div>
                                  <a
                                    href="#"
                                    class="mt-6 block font-medium text-gray-900"
                                  >
                                    <span
                                      class="absolute inset-0 z-10"
                                      aria-hidden="true"
                                    ></span>
                                    Artwork Tees
                                  </a>
                                  <p aria-hidden="true" class="mt-1">
                                    Shop now
                                  </p>
                                </div>
                              </div>
                              <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                <div>
                                  <p
                                    id="Clothing-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Clothing
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Clothing-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Tops
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Pants
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Sweaters
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        T-Shirts
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Jackets
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Activewear
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Browse All
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="Accessories-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Accessories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Accessories-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Watches
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Wallets
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Bags
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Sunglasses
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Hats
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Belts
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="Brands-heading"
                                    class="font-medium text-gray-900"
                                  >
                                    Brands
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="Brands-heading"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                  >
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Re-Arranged
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Counterfeit
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        Full Nelson
                                      </a>
                                    </li>
                                    <li class="flex">
                                      <a href="#" class="hover:text-gray-800">
                                        My Way
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <a
                    href="#"
                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Company
                  </a>
                  <a
                    href="#"
                    class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Stores
                  </a>
                </div>
              </div>

              <div class="ml-auto flex items-center">
                <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to="/login"
                    class="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Login
                  </Link>
                  <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                  <Link
                    to="/signup"
                    class="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </Link>
                </div>

                {/* <!-- Cart --> */}
                <div class="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" class="group -m-2 flex items-center p-2">
                    <svg
                      class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span class="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
