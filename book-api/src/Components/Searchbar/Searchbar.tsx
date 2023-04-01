import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import style from "./Searchbar.module.css";

type Props = {
  handleClick: (searchTerm: string) => void;
};

const Searchbar: React.FC<Props> = ({ handleClick }) => {
  //State to hold the search term
  const [searchTerm, setSearchTerm] = useState<string>("");

  //Function to capture the input event
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.searchIconContainer}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.input}
          type="text"
          placeholder="What books would you like to find?"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          className={style.searchButton}
          //After updating the SearchTerm using the handleChange, I pass it as argument to the handleCLick fn that will update the "query" state at the Home page and trigger the fetch request.
          onClick={() => handleClick(searchTerm)}
        >
          GO
        </button>
      </div>
    </>
  );
};

export default Searchbar;
