import MovieList from "./MovieList.js";
import { SpecialData } from "../object.js";
import "./Special.css";
const Special = () => {
  return (
    <div className="special">
      <h3>ویژه</h3>
      <MovieList data={SpecialData} />
    </div>
  );
};
export default Special;
