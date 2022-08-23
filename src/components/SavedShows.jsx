import React, { useContext, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import AuthContext from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import {AiOutlineClose} from 'react-icons/ai'

const SavedShows = () => {
  const { user } = useContext(AuthContext);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShow);
    });
  }, [user?.email]);





  // console.log(movies)
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const movieRef = doc(db,'users', `${user?.email}`)

  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef,{
        savedShow: result,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative group flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute z-10 opacity-60 hover:opacity-100 cursor-pointer left-1 hidden group-hover:block"
        />

        <div
          id={`slider`}
          className="relative h-full w-full overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap z-100"
        >
        
          {movies?.map((item, id) => (
            <div key={id} className=" w-[160px] cursor-pointer md:w-[200px] lg:w-[240px] inline-block p-2 relative hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item.title}
              />
              <div className="absolute top-0 left-0 h-full w-full hover:bg-black/70 text-white transition-all duration-200 ease-in opacity-0 hover:opacity-100 p-2">
                <p className="p-2 text-xs md:text-sm flex justify-center items-center h-full w-full transition-all duration-200 ease-in font-bold text-center">
                  {item?.title}
                </p>
                <p onClick={()=> deleteShow(item.id)} > <AiOutlineClose className="absolute z-20 top-2 right-2" /> </p>
              </div>
            </div>
          ))}

        </div>

        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute z-10 opacity-60 hover:opacity-100 cursor-pointer right-0 hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default SavedShows;
