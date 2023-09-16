import React from "react";
import IMDB from "../../assets/img/imdbRating.svg"
import tomato from "../../assets/img/tomato.svg"
import "./Ratings.css"

const Ratings = ({ imdbRating }) => {
    function roundToTwoDecimalPlaces (number) {
      const roundedNumber = Math.round(number * 100) / 10
      return roundedNumber % 1 === 0 ? Math.round(roundedNumber) : roundedNumber
    }
    return (
      <div className="flex flex-wrap w-full gap-2 lg:gap-8 text-xs">
        <div className="imdb">
          <img src={IMDB} alt="imdb movie rating icon" />
          <p>{roundToTwoDecimalPlaces(imdbRating)}/100</p>
        </div>
        <div className="flex gap-2 ">
          <img src={tomato} alt="tomato rating icon" />
          <p>97%</p>
        </div>
      </div>
    )
  }
  
  export default Ratings