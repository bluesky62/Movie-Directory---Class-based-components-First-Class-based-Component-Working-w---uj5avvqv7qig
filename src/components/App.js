import React, { useState, useContext } from "react";
import "../styles/App.css";
import Movie from "./Movie";
import UserContext from "./MovieContext";
import MoviesList from "./MoviesList";

const App = () => {
  const [st, setState] = useState(1);
  const state = useContext(UserContext);

  const handleClick = (e, key) => {
    // console.log(key);
    setState(key);
  };
  return (
    <div id="main">
      <h1>Movie List</h1>
      <UserContext.Provider value={state}>
        <MoviesList handleClick={handleClick} />
        <Movie value={st - 1} />
      </UserContext.Provider>
    </div>
  );
};

export default App;
