import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  console.log(movies);
  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative group flex items-center">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute z-10 opacity-60 hover:opacity-100 cursor-pointer left-1 hidden group-hover:block"
        />

        <div
          id={`slider` + rowId}
          className="relative h-full w-full overflow-x-scroll scrollbar-hide scroll-smooth whitespace-nowrap"
        >
          {movies.map((item, id) => (
            <Movie key={id} item={item} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute z-10 opacity-60 hover:opacity-100 cursor-pointer right-0 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
