import axios from 'axios';
import {useEffect, useState} from 'react'
import Requests from '../Requests';

const Main = () => {
    const [movies,setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random()* movies.length)]
    useEffect(()=> {
        axios.get(Requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        })
    },[])
    // console.log(movie);

    const truncateString = (str,num) => {
        if(str?.length > num){
            return str.slice(0,num) + "...";
        }
        else{
            return str;
        }
    }

  return (
    <div className='w-full h-[600px] text-white'>
        <div className='w-full h-full'>
            <div className='w-full h-[600px] absolute bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
        </div>
        <div className='absolute p-4 md:p-8 w-full top-[20%]'>
            <h1 className='text-3xl lg:text-5xl font-bold'>{movie?.title}</h1>
            <div className='my-4'>
                <button className='bg-gray-300 hover:bg-transparent hover:text-white transition border border-gray-300 text-black py-2 px-5'>Play</button>
                <button className='border border-gray-300 py-2 px-5 ml-4 transition-colors hover:text-black  hover:bg-gray-300'>Watch Later</button>
            </div>
            <p className='text-gray-400 text-sm'> Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-xl lg:max-w-lg xl:max-w-md'>{truncateString(movie?.overview,150)}</p>
        </div>

    </div>
  )
}

export default Main