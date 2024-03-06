import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Oops! Error 404</h2>
      <p className="text-lg mb-8">
        The page you are looking for might be under construction or does not
        exist.
      </p>
      <div className="flex justify-center gap-8 items-center">
        <Link
          to="/"
          className="bg-[#6600FF] text-center w-40 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Go to Home
        </Link>
        <Link
          to="/contact"
          className="bg-[#6600FF] text-center w-40 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Report this Page
        </Link>
      </div>
    </div>
  );
};

export default Error;
