import axios from "axios";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/Card";

interface Book {
  title: string;
  author: string;
  price: string;
  book_image: string;
}

function Home() {
  const [query, setQuery] = useState("");
  //State to track if user clicked on Best Sellers text
  const [isBestSellers, setIsBestSellers] = useState(false);
  const [list, setList] = useState<Array<Book>>([]);

  //Here I defined that the handleClick fn needs a parameter
  async function handleClick(searchTerm: string) {
    setQuery(searchTerm);
    //If user wants to search by query after fetching the best selling list we set the state to false again
    setIsBestSellers(false);
  }

  const KEY = "FmSd2amCznAGQuFGNS1SPcLOydUM3gZN";

  /*Attempt to use a .env/.env.local file to protect the API key but process keep coming back as undefined, even after installing the dotenv package and the types '@types/node'
  
  const KEY = process.env.API_KEY;*/

  useEffect(() => {
    //To avoid fetch on page load, check it variables have value before call fn
    const fetchBooks = async () => {
      if (query) {
        try {
          const response = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=${KEY}&title=${query}`
          );
          setList(response.data.results);
        } catch (error) {
          console.error(error);
        }
        //I needed try catch block because the response obj is different depending on the type of query (per searchTerm or for Best sellers)
      } else if (isBestSellers) {
        try {
          const response = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${KEY}`
          );
          setList(response.data.results.books);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchBooks();
  }, [query, isBestSellers]);
  //variable initiated to store the JSX I want to render
  let renderJSX;

  //If either of these variables have value the book card will be rendered, if not the Home page will be.
  if (query || isBestSellers) {
    renderJSX = (
      <div className={styles.outter}>
        <h2>New York Times Bestsellers</h2>
        <div>
          {/* //Slice the first 10 results from the list */}
          {list.slice(0, 10).map((book, index) => (
            <Card
              key={index}
              title={book.title}
              author={book.author}
              price={book.price}
              book_image={book.book_image}
            />
          ))}
        </div>
      </div>
    );
  } else {
    renderJSX = (
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
    );
  }

  return (
    <div className={styles.outter}>
      {/* Handle click function passed as prop */}
      <Searchbar handleClick={handleClick} />
      {renderJSX}
    </div>
  );
}

export default Home;
