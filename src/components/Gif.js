import React from "react";

const Gif = ({ item }) => {
  return (
    <div className="gif">
      <h5>Title: {item.title}</h5>
      <img src={item.images.downsized.url} alt={item.title} />
      <h6>Rating: {item.rating}</h6>
      <a href={item.url} target="_blank" rel={"noreferrer"}>
        open in giphy
      </a>
    </div>
  );
};

export default Gif;
