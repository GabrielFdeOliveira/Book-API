import axios from "axios";
import Searchbar from "../../Components/Searchbar/Searchbar";
import React, { useEffect, useState } from "react";
import "./Home.module.css";

function Home() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);

  //Here I defined that the handleClick fn needs a parameter
  async function handleClick(searchTerm: string) {
    setQuery(searchTerm);
  }

  const API_KEY = "FmSd2amCznAGQuFGNS1SPcLOydUM3gZN";

  useEffect(() => {
    const fetchBestSellers = async (query: string) => {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}&title=${query}`
      );
      setList(response.data.results);
      console.log(response.data.results);
    };

    if (query) {
      fetchBestSellers(query);
    }
  }, [query]);

  return (
    <div>
      {/* Handle click function passed as prop */}
      <Searchbar handleClick={handleClick} />
    </div>
  );
}

export default Home;
