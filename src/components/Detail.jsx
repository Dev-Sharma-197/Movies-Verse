import "./Detail.css";

const Detail = ({ data, handleBack }) => {
  return (
    <>
      <div className="Details">
        <p className="back" onClick={handleBack}>
          &larr;
        </p>
        {data.Poster === "N/A" ? (
          <img src="/movie-icon.svg" />
        ) : (
          <img src={data.Poster} />
        )}
        <div className="more_details">
          <h1>
            {data.Title} <span>({data.Year})</span>
          </h1>
          <h5>
            {data.Type} ● <span>{data.Runtime}</span>
          </h5>
          <div className="genre">
            <p>{data.Genre}</p>
            <p>
              {" "}
              <img className="star" src="/star.png" alt="star" />{" "}
              {data.imdbRating}
            </p>
          </div>
          <p className="plot">
            Plot : <span>{data.Plot}</span>
          </p>
          <p className="names">
            Writer : <span> {data.Writer}</span>
          </p>
          <p className="names">
            Actors : <span> {data.Actors}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Detail;
