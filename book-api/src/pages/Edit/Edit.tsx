import React, { useContext } from "react";
import { BookContext } from "../../Components/CustomFiles/Context";

const Edit: React.FC = () => {
  const { book } = useContext(BookContext);

  return (
    <div>
      <h1>Edit Book: {book?.title}</h1>
      <p>Author: {book?.author}</p>
      <p>Price: {book?.price}</p>
      <p>Index: {book?.index}</p>
      <p>Rating: {book?.rating}</p>
    </div>
  );
};

export default Edit;
