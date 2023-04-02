import React from "react";
import styles from "./Card.module.css";
import type { Favourite } from "../../pages/Favourites/Favourites";
import {
  AiOutlineHeart,
  AiOutlineStar,
  AiFillStar,
  BsBook,
} from "react-icons/all";
import Swal from "sweetalert2";

type CardProps = {
  title: string;
  author: string;
  price: string;
};

const Card: React.FC<CardProps> = ({ title, author, price }) => {
  //Since there is no rating property on the response obj I randomize it here
  const randomRating = Math.floor(Math.random() * 5) + 1;

  //The price returned from the API has decimals, here I discard them
  const formattedPrice = parseFloat(price).toFixed();
  const book = { title, author, price };

  const handleFavourite = (newFavourite: Favourite) => {
    try {
      if (localStorage.getItem("favourites")) {
        const books = JSON.parse(localStorage.getItem("favourites") || "[]");
        console.log(books);
        books.push(newFavourite);
        localStorage.setItem("favourites", JSON.stringify(books));
        console.log("adding to favourite");
      } else {
        console.log("adding first favourite");
        localStorage.setItem("favourites", JSON.stringify([newFavourite]));
      }
      Swal.fire("Book added to your list");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.bookInfo}>
        <div className={styles.bookTitleAuthorDiv}>
          <BsBook className={styles.bookIcon} />
          <h3 className={styles.title}>{title + " "}</h3>
          <p className={styles.author}>{"by " + author}</p>
        </div>
        <div className={styles.priceRatingDiv}>
          <div className={styles.rating}>
            {/* Creates an array with 5 items and map through it ignoring the first argument of the map fn, then it apply one of two styling depending if index is greater or lesser than random rating */}
            {[...Array(5)].map((_, index) =>
              index < randomRating ? (
                <AiFillStar key={index} className={styles.activeStar} />
              ) : (
                <AiOutlineStar key={index} className={styles.inactiveStar} />
              )
            )}
          </div>
          <p className={styles.price}>{formattedPrice + " GBP"}</p>
        </div>
      </div>
      <button
        className={styles.favoriteButton}
        onClick={() => handleFavourite(book)}
      >
        <AiOutlineHeart className={styles.favoriteIcon} />
      </button>
    </div>
  );
};

export default Card;
