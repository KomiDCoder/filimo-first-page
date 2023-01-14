import { SportLiveData } from "../object";
import SportGame from "./SportGame";
import "./SportLive.css";
const SportLive = () => {
  return (
    <div className="sport-live">
      <h3>پخش زنده ورزشی</h3>
      <div className="games-list">
        {SportLiveData.map((item, i) => {
          return <SportGame data={item} key={i} />;
        })}
      </div>
    </div>
  );
};
export default SportLive;
