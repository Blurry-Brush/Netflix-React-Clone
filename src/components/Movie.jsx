import React, { useContext, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, updateDoc, doc } from "firebase/firestore";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = useContext(AuthContext);

  const savedShowRef = doc(db, "users", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(savedShowRef, {
        savedShow: arrayUnion({
          id: item?.id,
          title: item?.title,
          img: item?.backdrop_path,
        }),
      });
    } else {
      alert("Please login to save a show");
    }
  };

  return (
    <div className="w-[160px] cursor-pointer md:w-[200px] lg:w-[240px] inline-block p-2 relative hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/70 text-white transition-all duration-200 ease-in opacity-0 hover:opacity-100 p-2">
        <p className="p-2 text-xs md:text-sm flex justify-center items-center h-full w-full transition-all duration-200 ease-in font-bold text-center">
          {item?.title}
        </p>

        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-400 text-lg" />
          ) : (
            <FaRegHeart className="text-lg absolute top-4 left-4 text-gray-400" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
