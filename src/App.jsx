import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import FeaturedMovie from "./components/FeaturedMovie";
import ExclusiveVideos from "./components/EclusiveVideos";
import FeaturedCasts from "./components/FeaturedCasts";
import Footer from "./components/Footer";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  console.log(searchValue);

  const getMovieRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=f32fbdf1`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <FeaturedMovie movies={movies} />
      <ExclusiveVideos />
      <FeaturedCasts />
      <Footer />
    </>
  );
}

export default App;
