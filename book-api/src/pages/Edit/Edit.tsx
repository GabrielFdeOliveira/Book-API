import React from "react";
// import type { Book } from "../../Components/FavouriteCard/FavouriteCard";
import { useLocation } from "react-router-dom";

const Edit: React.FC = () => {
  const location = useLocation();
  console.log("location object in Edit component: ", location);
  // const { title, author, price, index } = location.state;

  return (
    <div>
      {/* <h1>Edit Book: {title}</h1>
      <p>Author: {author}</p>
      <p>Price: {price}</p>
      <p>Index: {index}</p> */}
    </div>
  );
};

export default Edit;
