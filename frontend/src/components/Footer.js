import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black h-52 text-white w-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">AllPosts.com</h1>
        <p className="text-sm">Your One-Stop Place for Best Posts</p>
        <div className="mt-4">
          <Link
            to="/about"
            className="text-gray-400 hover:text-white hover:underline mr-4"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-white hover:underline"
          >
            Contact Us
          </Link>
        </div>
        <p className="mt-2 mb-1 text-sm font-semibold">post123@post.com</p>
        <p className="mt-4 text-gray-400 text-xs">© 2024 Create Fav Posts</p>
      </div>
    </div>
  );
};

export default Footer;
