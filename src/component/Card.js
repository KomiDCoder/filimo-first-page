import "./Card.css";
const Card = (props) => {
  const { title, image, epData, year, genre, isMovie, rating } = props.data;
  let genreArray = [];
  for (const key in genre) {
    genreArray.push(genre[key]);
  }
  return (
    <div className="card">
      <img src={image} alt="poster"></img>
      <div className="card-data">
        <div className="rating">
          {rating.imdb ? <span>{`${rating.imdb}/۱۰`}</span> : <></>}
          {rating.peopleLiked ? <span>{`${rating.peopleLiked}%`}</span> : <></>}
        </div>
        <div>
          {`${title}`}
          {isMovie ? (
            <></>
          ) : (
            <span>{` - فصل ${epData.season} قسمت ${epData.numberOfEp}`}</span>
          )}
        </div>
        <div>
          <span>{`${year} - `}</span>
          {genreArray.map((item, i) => {
            if (i === genreArray.length - 1) {
              return <span key={i}>{`${item}`}</span>;
            } else {
              return <span key={i}>{`${item} - `}</span>;
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default Card;
