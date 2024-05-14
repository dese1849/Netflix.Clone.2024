import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/Requests";

const Rowlist = () => {
  return (
    <div>
      <Row
        title="Netflix Originals"
        fetchurl={requests.fetchNetflixOrginals}
        isLargeRows={true}
      />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documenteries" fetchurl={requests.fetchDocumenteris} />
      <Row title="Tv Shows" fetchurl={requests.fetchTvshow} />
    </div>
  );
};

export default Rowlist;
