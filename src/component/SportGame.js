import "./SportGame.css";
const SportGame = ({ data }) => {
  const { image, title } = data;
  {
    return (
      <div className="games">
        <img src={image} alt="poster" />
        <div className="title">{title}</div>
      </div>
    );
  }
};
export default SportGame;
