import { useEffect, useState } from "react";
import Card from "./Card";

const Container = ({ data = [], handleOnClick }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (data && data?.length) {
      setList(data);
    }
  }, [data])

  return (
    <>
      <div className="container">
        {list.map((val, index) => {
          return <Card key={index} data={val} handleOnClick={handleOnClick} />;
        })}
      </div>
    </>
  );
};

export default Container;
