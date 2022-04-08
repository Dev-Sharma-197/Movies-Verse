const Card = ({ data, handleOnClick }) => {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          handleOnClick(data.imdbID);
        }}
      >
        {data.Poster === "N/A" ? (
          <img src={process.env.PUBLIC_URL + "/movie-icon.svg"} />
        ) : (
          <img src={data.Poster} />
        )}
        <div className="info">
          <h2 className="title">{data.Title}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
