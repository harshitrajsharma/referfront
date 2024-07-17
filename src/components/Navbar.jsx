import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full container lg:h-16 py-3 m-auto lg:px-10 xl:px-16">
            <div className="mx-auto lg:flex lg:items-center h-full px-2 md:px-8">
                <div className="flex items-center justify-between">
                    <div className="w-56 flex gap-4 justify-start items-center ">
                        <Link to="/" >
                            <img src="logo.png" alt="logo" />
                        </Link>
                        <button className=" py-1 px-4 hidden lg:flex text-white rounded-lg bg-[#1a73e8]">Courses</button>
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"} mt-4 w-full lg:flex items-center lg:justify-between text-center lg:mt-0 h-full`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-end w-full">
                        <Link
                            to="/"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-black hover:text-blue-400"
                        >
                            Refer and Earn
                        </Link>
                        <Link
                            to="/"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-black hover:text-blue-400"
                        >
                            Resources
                        </Link>
                        <Link
                            to="/"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-black hover:text-blue-400"
                        >
                            About Us
                        </Link>

                    </div>


                    <div className="flex flex-col lg:w-80 justify-center items-center w-full mt-4 md:mt-0 gap-4 rounded-full text-black lg:flex-row">

                        <button
                            className=" py-2 px-4 flex bg-gray-200 hover:bg-[#4688df] transition-all duration-300 ease-in-out text-black items-center justify-center rounded-lg"
                        >
                            Log in

                        </button>
                        <button
                            className=" py-2 px-4 flex bg-[#1a73e8] hover:bg-[#4688df] transition-all duration-300 ease-in-out text-white items-center justify-center rounded-lg"
                        >
                            Try for Free

                        </button>

                    </div>
                </div>
            </div>
        </nav>
    );
};
