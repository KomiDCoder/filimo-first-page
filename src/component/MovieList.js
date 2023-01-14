import Card from "./Card.js";
import "./MovieList.css";
const MovieList = ({ data }) => {
  return (
    <div className="movie-list">
      {data.map((item, i) => {
        return <Card data={item} key={i} />;
      })}
    </div>
  );
};
export default MovieList;
