const NavBar = ({ handlSearchText, handleSelect, reset }) => {
  const handleKey = (event) => {
    event.key === "Enter" ?
      event.target.value ?
        handlSearchText(event.target.value)
        : reset()
      : null;

  };
  return (
    <>
      <div className="navbar">
        <h1 className="heading">Movies-Verse</h1>
        <div className="inputs">
          <input
            type="text"
            placeholder="Search"
            onKeyDown={handleKey}
          />

          <select onChange={handleSelect}>
            <option value="All">All</option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default NavBar;
