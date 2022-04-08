import Card from "./Card";

const Container = ({ data, handleOnClick }) => {
  return (
    <>
      <div className="container">
        {data.map((val, index) => {
          return <Card key={index} data={val} handleOnClick={handleOnClick} />;
        })}
      </div>
    </>
  );
};

export default Container;
