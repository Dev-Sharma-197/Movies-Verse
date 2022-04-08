import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import myData from "./components/data";
import Container from "./components/Container";
import Pagination from "./components/Pagination";
import Detail from "./components/Detail";

const App = () => {
  const [isThere, setThere] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [postPerPage] = useState(16);
  const [type, setType] = useState("All");
  const [click, setClick] = useState(false);
  const [clickedData, setclickedData] = useState([]);

  //  Getting data on page load
  const searchData = async (val) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=b9bd48a6&s=${val}`
    );
    setLoading(false);
    return res.data;
  };

  function getData(data) {
    data.map(async (val) => {
      let mData = await searchData(val.name);
      setData((data) => [...data, mData.Search[0]]);
    });
  }
  useEffect(() => {
    setThere(false);
    getData(myData);
  }, []);
  // Getting data on user input
  useEffect(() => {
    setData([]);
    const search = async () => {
      try {
        if (input) {
          setThere(false);
          let newData = await searchData(input);
          let mdata = newData.Search;

          mdata.map((val) => {
            setData((items) => [...items, val]);
          });
          //
        }
      } catch {
        setThere(true);
      }
    };
    search();
    setClick(false);
  }, [input]);

  // handling events
  const searchClicked = async (id) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=b9bd48a6&i=${id}`
    );
    setclickedData(res.data);
  };

  const handleSelect = (e) => {
    setType(e.target.value);
  };

  const handleOnClick = (id) => {
    setClick(true);
    searchClicked(id);
  };

  const handleBack = () => {
    setClick(false);
  };

  const indexOfLast = curPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const curPost = data
    .filter((val) => {
      if (type !== "All") {
        return val.Type === type;
      } else {
        return val;
      }
    })
    .slice(indexOfFirst, indexOfLast);

  const paginate = (pagenum) => {
    setCurPage(pagenum);
  };

  return (
    <>
      <NavBar handlSearchText={setInput} handleSelect={handleSelect} />
      {isThere && (
        <div style={{ height: "20rem", width: "100%", textAlign: "center" }}>
          <img
            src="/movie-icon.svg"
            style={{ height: "10rem", width: "100%" }}
          />
          <h1>Nothing like that 😒</h1>
        </div>
      )}
      {!loading ? (
        click ? (
          <Detail data={clickedData} handleBack={handleBack} />
        ) : (
          <Container data={curPost} handleOnClick={handleOnClick} />
        )
      ) : (
        <h1 className="loading">Loading...</h1>
      )}
      {click ? (
        " "
      ) : (
        <Pagination
          postPerPage={postPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      )}
    </>
  );
};

export default App;
