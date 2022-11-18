import React, { useContext } from "react";
import UserContext from "./MovieContext";

const Movie = (props) => {
  // If no movie is selected, show message - "Invalid Id".
  const first = useContext(UserContext);
  const id = props.value;
  // console.log(props.value);
  return (
    <div id="movie-banner">
      {!props.condtion ? (
        <h1>Invalid Id</h1>
      ) : (
        <div>
          <h2>{first[id].title}</h2>
          <h2>{first[id].year}</h2>
          <h2>{first[id].director}</h2>
        </div>
      )}
    </div>
  );
};

export default Movie;
