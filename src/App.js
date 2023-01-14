import Special from "./component/Special";
import SportLive from "./component/SportLive";
import NewMovies from "./component/NewMovies";
import { newMovies } from "./object";
import "./App.css";
import { Fragment } from "react";
const App = () => {
  return (
    <Fragment>
      <Special />
      <SportLive />
      <NewMovies data={newMovies} />
    </Fragment>
  );
};
export default App;
