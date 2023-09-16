import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";
import Ratings from "../pages/home/Ratings";
import FavouriteIsLiked from "./FavouriteIsLiked";

const Card = ({ movie }) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card" data-testid="movie-card">
            <div className="img" data-testid="movie-poster">
              <img
                className="card__img"
                data-testid="movie-poster"
                src={`https://image.tmdb.org/t/p/original${
                  movie ? movie.poster_path : ""
                }`}
                alt="movie poster"
              />
              <i class="fa fa-heart-o fa-lg" aria-hidden="true">
                <FavouriteIsLiked />
              </i>
            </div>
            <div className="text-content">
              <div className="movie-title" data-testid="movie-title">
                {movie ? movie.original_title : ""}
              </div>
              <div
                className="movie-release-date"
                data-testid="movie-release-date"
              >
                {movie ? movie.release_date : ""}
              </div>
              <div className="ratings">
                <Ratings imdbRating={movie ? movie.vote_average : ""} />
              </div>
              <div className="genre">{movie ? movie.genres : ""}</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
