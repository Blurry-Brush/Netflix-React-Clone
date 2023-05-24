import axios from "axios";
import { useEffect, useState } from "react";
import Requests from "../Requests";
import { textVariant, imageVariant } from "../variants";
import { motion, AnimatePresence } from "framer-motion";



const Main = () => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  // const movie = movies[Math.floor(Math.random()* movies.length)]
  const movie = movies[index];
  useEffect(() => {
    axios.get(Requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movie);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % movies.length);
    }, 5000);
    return () => clearInterval(interval);
  },[index, movies.length]);
  

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key={index}
        variants={imageVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full h-[600px] text-white"
      >
       
        <motion.div className="w-full h-full -z-10">
          <motion.div className="w-full h-[600px] absolute bg-gradient-to-r from-black "></motion.div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </motion.div>
        <AnimatePresence>
          <motion.div
            key={index}
            variants={textVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute p-4 md:p-8 w-full top-[20%]"
          >
            <motion.h1 className="text-3xl lg:text-5xl font-bold">
              {movie?.title}
            </motion.h1>
            <motion.div className="my-4">
              <button className="bg-gray-300 hover:bg-transparent hover:text-white transition border border-gray-300 text-black py-2 px-5">
                Play
              </button>
              <button className="border border-gray-300 py-2 px-5 ml-4 transition-colors hover:text-black  hover:bg-gray-300">
                Watch Later
              </button>
            </motion.div>
            <motion.p className="text-gray-400 text-sm">
              {" "}
              Released: {movie?.release_date}
            </motion.p>
            <motion.p className="w-full md:max-w-xl lg:max-w-lg xl:max-w-md">
              {truncateString(movie?.overview, 150)}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Main;
