import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import requests from "../Requests";
import axios from "axios";
import ResultCard from "./ResultCard";


const SearchResults = () => {
  const { name } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const fetchURL = requests.multiSearch + name + "&page=1&include_adult=false";

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setSearchResults(response.data.results);
    });
  }, [fetchURL]);

  if(searchResults.length === 0) {
    return <h1>Loading </h1>
  }

  if(searchResults.length !== 0){
    return (
      <div className="absolute container mx-auto w-full mt-24">
      <div className="mb-7">
        <h1 className="text-center font-bold text-xl">You searched for {name}</h1>
      </div>
        {searchResults.map((result) => (
          <ResultCard result={result} />
        ))}
      </div>
    );
  }
};

export default SearchResults;
