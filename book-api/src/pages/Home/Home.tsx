import axios from "axios";
import Searchbar from "../../Components/Searchbar/Searchbar";
import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  //State to track if user clicked on Best Sellers text
  const [isBestSellers, setIsBestSellers] = useState(false);
  const [list, setList] = useState([]);

  //Here I defined that the handleClick fn needs a parameter
  async function handleClick(searchTerm: string) {
    setQuery(searchTerm);
    //If user wants to search by query we set the state to false
    setIsBestSellers(false);
  }

  const API_KEY = "FmSd2amCznAGQuFGNS1SPcLOydUM3gZN";

  useEffect(() => {
    const fetchBooks = async () => {
      //To avoid fetch on page load, check it variables have value before call fn
      if (query || isBestSellers) {
        try {
          let response;
          if (isBestSellers) {
            response = await axios.get(
              `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
            );
          } else {
            response = await axios.get(
              `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${API_KEY}&title=${query}`
            );
          }
          setList(response.data.results);
          console.log(response.data.results);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchBooks();
  }, [query, isBestSellers]);

  return (
    <div className={styles.outter}>
      {/* Handle click function passed as prop */}
      <Searchbar handleClick={handleClick} />
      <div className={styles.container}>
        <h2 className={styles.title} onClick={() => setIsBestSellers(true)}>
          New York Times Bestsellers
        </h2>
        <div className={styles.imageRow}>
          <img
            className={styles.image}
            src="/library1.jpg"
            alt="Bookshelf seen from the front"
          />
          <img
            className={styles.image}
            src="/library3.jpg"
            alt="Close-up diagonal shot of a bookshelf"
          />
          <img
            className={styles.image}
            src="/library2.jpg"
            alt="Pile of books with a bookshelf on the background"
          />
        </div>
        <Link to="/favourites" className={styles.link}>
          <h2 className={styles.title}>Favourites</h2>
        </Link>
        <div className={styles.imageRow}>
          <img
            className={styles.image}
            src="/books1.jpg"
            alt="Close-up front shot of a row of books"
          />
          <img
            className={styles.image}
            src="/books2.jpg"
            alt="An open book with a money tree growing from it"
          />
          <img
            className={styles.image}
            src="/books3.jpg"
            alt="A man picking up a book from a bookshelf"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
