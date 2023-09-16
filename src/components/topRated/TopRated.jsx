import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import "./TopRated.css";
import { useParams } from "react-router-dom";

const TopRated = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=209f17baed2468fae87f1ab46527f540&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results.slice(0, 10)));
  };

  return (
    <div className="movie__list">
      <div className="list__cards">
        {movieList.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
