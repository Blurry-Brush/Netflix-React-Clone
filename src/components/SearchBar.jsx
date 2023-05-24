import { useState } from "react";
import { motion } from "framer-motion";
import { FaSistrix } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../customcss/searchbar.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    navigate(`/show/${searchText}`);
    setSearchText("");
  };

  return (
    <motion.div className="relative flex justify-center">
      <motion.div
        whileHover={{ width: "280px" }}
        whileFocus={{ width: "280px" }}
        transition={{ duration: 0.5 }}
        className="h-10 bg-white/50 absolute z-[1000] top-16 lg:top-3 hover:pl-3 cursor-pointer search-container rounded-full w-[250px] lg:w-[50px] max-w-xs flex justify-center items-center hover:justify-start"
      >
        <button
          onClick={handleSearch}
          className="hover:scale-110 rounded-full p-1"
        >
          <FaSistrix className="search-icon" size={30} color="black" />
        </button>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          type="text"
          className="search-input w-full h-full bg-transparent  text-black/80 outline-none p-5"
        />
      </motion.div>
    </motion.div>
  );
};

export default SearchBar;
