import { Fragment } from "react";

function Display() {
  let movieName = "WAKANDA FOREVER";
  return (
    // <div>
    <>
      <h2>Display Component</h2>
      <h3>Movie Name:{movieName}</h3>
      <input type="text" value={movieName}></input>
    </>
    // <Fragment></Fragment>

    // </div>
  );
}
export default Display;
