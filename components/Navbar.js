import Link from "next/link";
import { useState } from "react";
import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container navbar ">
        <div className="md:flex hidden ">
          MY HEALTH <br /> CARE SUPPORT
        </div>
        <div className="md:block hidden">
          <h5 className="pl-9 text-blue-600 block">LifeLine</h5>
          <button className=" bg-white text-blue-500 font-bold py-1 px-4 border-1 border-blue-700  rounded ml-3">
            <IoCallOutline className="inline" />
            +097812344
          </button>
          <button className='class="bg-blue-500 bg-blue-600 text-white font-bold py-1 px-4 border-b-4 border-blue-700  rounded ml-3'>
            Patient Login
          </button>
        </div>
      </div>
      <div className="container-fluid   mx-auto px-4 border-t-2">
        <div className="flex items-center justify-center h-16">
          <div className="hidden md:flex items-center justify-center space-x-4">
            <Link
              href="/"
              className="text-black px-5\3 py-2 rounded-md no-underline text-xl font-medium"
            >
              Patient Care
            </Link>
            <Link
              href="/"
              className="text-black px-3 py-2 rounded-md no-underline text-xl font-medium"
            >
              Centres of Excellence
            </Link>
            <Link
              href="/"
              className="text-black px-3 py-2 rounded-md no-underline text-xl font-medium"
            >
              Health Information
            </Link>
            <Link
              href="/"
              className="text-black px-3 py-2 rounded-md no-underline text-xl font-medium"
            >
              International Patient{" "}
            </Link>
            <Link
              href="/"
              className="text-black px-3 py-2 rounded-md no-underline text-xl font-medium"
            >
              Academics & Research
            </Link>
            <Link
              href="/"
              className="text-black px-3 py-2 rounded-md no-underline text-xl font-medium"
            >
              Contact Us{" "}
            </Link>
            <Link
              href="/"
              className="text-black px-3 py-2 rounded-md no-underline text-xl font-medium"
            >
              Corporate
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleNavbar}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Patient Care
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Centres of Excellence
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Health Information
            </Link>
            <Link
              href="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              MyBlogs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
