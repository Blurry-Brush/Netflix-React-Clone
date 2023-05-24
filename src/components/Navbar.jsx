import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
// import SearchBar from "./SearchBar";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[1000] w-full absolute overflow-hidden">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      {/* <SearchBar/> */}
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 cursor-pointer hover:text-gray-300 hover:scale-105 transition-transform">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-400 hover:text-gray-100 transition-all duration-200"
          >
            Log out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 cursor-pointer hover:text-gray-300 hover:scale-105 transition-transform">
              Sign In
            </button>
          </Link>
          <Link to="signup">
            <button className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-400 hover:text-gray-100 transition-all duration-200">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
