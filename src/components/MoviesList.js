import React, { createContext, useContext } from "react";
import Movie from "./Movie";
import UserContext from "./MovieContext";

const MoviesList = ({handleClick}) => {
  const data = useContext(UserContext);
  
  return (
    <div id="movies-table">
      <style>{`
        td { padding : 20px; }
        tr:hover { background: #3374C2}
        `}</style>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr id="table-row" key={item.id} onClick={e => handleClick(e, item.id)}>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
