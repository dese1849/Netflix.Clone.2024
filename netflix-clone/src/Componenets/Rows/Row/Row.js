import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../Utils/Axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchurl, isLargeRows }) => {
  const [movies, setMovie] = useState([]);
  const [trailerurl, settrailerurl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchurl);
        setMovie(request.data.results);
      } catch (error) {
        console.log("Error is", error);
      }
    })();
  }, [fetchurl]);

  const handleclick = (movie) => {
    if (trailerurl) {
      settrailerurl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlparmas = new URLSearchParams(new URL(url).search);
          settrailerurl(urlparmas.get("v"));
        }
      );
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1 style={{ color: "white" }}>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleclick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRows ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRows && "row_PosterLarge"}`}
          />
        ))}
      </div>

      <div style={{ padding: "40px" }}>
        {trailerurl && <YouTube videoId={trailerurl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
