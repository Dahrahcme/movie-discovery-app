import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../header/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Right from "../../assets/img/Chevron-right.svg";
import Ratings from "./Ratings";
import TopRated from "../../topRated/TopRated";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=209f17baed2468fae87f1ab46527f540&language=en-US"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data now, try again later");
        }
        return res.json();
      })
      .then((data) => {
        setPopularMovies(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt="movie poster"
                />
              </div>
              <div className="header">
                <Header className="header" />
              </div>
              <div className="posterImage__overlay">
                <div className="posterImage__title">
                  {movie ? movie.original_title : ""}
                  <Ratings imdbRating={movie ? movie.vote_average : ""} />
                </div>
                <div className="posterImage__description">
                  {movie ? movie.overview : ""}
                </div>
                <button className="button">
                  <i class="fa fa-play-circle fa-lg"></i>
                  Watch Trailer
                </button>
              </div>
            </Link>
          ))}
        </Carousel>
        <div className="featured">
          <div className="text">
            <p>Featured Movie</p>
          </div>
          <div className="more">
            <p>See more</p>
            <img src={Right} alt="" />
          </div>
        </div>
        <TopRated />
      </div>
    </div>
  );
};

export default Home;

//  fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=209f17baed2468fae87f1ab46527f540&language=en-US")
