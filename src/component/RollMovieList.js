import "./RollMovieList.css";
const RollMovieList = ({ data }) => {
  return data.map((item, i) => {
    const { title, image, country, year, genre, isMovie, rating } = item;
    let genreArray = [];
    for (const key in genre) {
      genreArray.push(genre[key]);
    }
    return (
      <div className="movies" key={i}>
        <img src={image} />
        <div className="movies-data">
          <div className="rating">
            {rating.peopleLiked ? (
              <span>{`${rating.peopleLiked}%`}</span>
            ) : (
              <></>
            )}
            {rating.imdb ? <span>{`${rating.imdb}/۱۰`}</span> : <></>}
          </div>
          <div>
            {genreArray.map((item, i) => {
              if (i === genreArray.length - 1) {
                return <span key={i}>{`${item}`}</span>;
              } else {
                return <span key={i}>{`${item} - `}</span>;
              }
            })}
          </div>
          <div>
            <span>{`${year} - ${country}`}</span>
          </div>
        </div>

        <div className="title">{title}</div>
      </div>
    );
  });
};
export default RollMovieList;
