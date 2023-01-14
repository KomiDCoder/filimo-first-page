import RollMovieList from "./RollMovieList";
import "./NewMovies.css";
const NewMovies = ({ data }) => {
  return (
    <>
      <h3 className="list-title">تازه ها</h3>
      <div className="roll-movie-list">
        <RollMovieList data={data} />
      </div>
    </>
  );
};
export default NewMovies;
