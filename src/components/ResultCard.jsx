import React from "react";

const ResultCard = ({result}) => {
  return (
    <>
      <div className="mb-4 card lg:card-side bg-gray-700 shadow-xl mx-20 lg:mx-44 hover:scale-105 duration-150 transition-all">
        <figure>
          <img src={`https://image.tmdb.org/t/p/w500/${result?.backdrop_path}`} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{result?.title || result?.name}</h2>
          <p>{result?.overview}</p>
          <div className="badge badge-info">{result?.vote_average}</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultCard;
