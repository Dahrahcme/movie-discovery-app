import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import play from "../assets/img/play.svg";
import ticket from "../assets/img/Ticket.svg";
import list from "../assets/img/List.svg";
import staticImage from "../assets/img/Group 52.png";
import SideBar from "./SideBar";

const MovieDetail = () => {
  const [currentMovieDetail, setMovie] = useState();

  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movie-details">
      <SideBar className="sidebar" />
      <div className="body">
        <div className="poster">
          <div className="movie__intro">
            {" "}
            <img
              className="movie__backdrop"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.backdrop_path : ""
              }`}
              alt=""
            />
          </div>
          <div className="inner-text">
            <img src={play} alt="" />
            <p>Watch Trailer</p>
          </div>
        </div>
        <div className="more-details">
          <div className="movie__name" data-testid="movie-title">
            {currentMovieDetail ? currentMovieDetail.original_title : ""}
            <i class="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div className="movie__releaseDate">
            {" "}
            {currentMovieDetail
              ? "Release date: " + currentMovieDetail.release_date
              : ""}
            <i class="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div className="movie__runtime">
            {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            <i class="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div className="movie__genres">
            {currentMovieDetail && currentMovieDetail.genres
              ? currentMovieDetail.genres.map((genre) => (
                  <>
                    <span className="movie__genre" id={genre.id}>
                      {genre.name}
                    </span>
                  </>
                ))
              : ""}
          </div>
        </div>
        <div className="overview">
          <div className="left-details">
            {" "}
            <div className="movie__detailRightBottom">
              {" "}
              <div className="movie-overview" data-testid="movie-overview">
                {" "}
                {currentMovieDetail ? currentMovieDetail.overview : ""}{" "}
              </div>{" "}
            </div>{" "}
            <div className="crew">
              {" "}
              <p>
                {" "}
                Director : <span>Joseph Kosinski</span>{" "}
              </p>{" "}
              <p>
                {" "}
                Writers : <span>Jim Cash, Jack Epps Jr, Peter Craig</span>{" "}
              </p>{" "}
              <p>
                {" "}
                Stars: <span>
                  Tom Cruise, Jennifer Connelly, Miles Teller
                </span>{" "}
              </p>
            </div>
            <div className="awards">
              <div className="rating">Top rated movie #65</div>
              <div className="nominations">Awards 9 nominations</div>
            </div>
          </div>
          <div className="right-details">
            <div className="buttons">
              <button className="show-times">
                <img src={ticket} alt="" />
                See Showtimes
              </button>
              <button className="more-options">
                <img src={list} alt="" />
                More watch options
              </button>
            </div>
            <img src={staticImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
