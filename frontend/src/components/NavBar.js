import React from "react";

import { Link } from "react-router-dom";

import { useAuth } from "../store/auth";

const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className="flex justify-around items-center w-full h-16 mt-3">
      <div className="font-bold text-2xl md:text-3xl lg:text-4xl flex justify-start items-center w-[45] h-10 mb-2">
        AllPosts.com
      </div>

      <div className="nav-bar flex font-bold flex-row justify-around md:w-100 gap-2 max-[1175px]:gap-5 min-[1175px]:gap-12 lg:mr-10 items-center max-[1266px]:text-sm">
        <Link to="/">
          <div>Home</div>
        </Link>

        {isLoggedIn ? (
          <Link to="/logout">
            <div>Logout</div>
          </Link>
        ) : (
          <>
            <Link to="/registration">
              <div>Register</div>
            </Link>

            <Link to="/login">
              <div>Login</div>
            </Link>
          </>
        )}
        <Link to="/posts">
          <div>All Posts</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
