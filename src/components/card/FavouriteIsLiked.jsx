import React, { useState } from "react";

const FavouriteIsLiked = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const iconColor = isFavorite ? "red" : "gray";

  return;
  <div>
    <i
      className="fas fa-heart"
      style={{ color: iconColor }}
      onClick={toggleFavorite}
    ></i>
  </div>;
};

export default FavouriteIsLiked;
