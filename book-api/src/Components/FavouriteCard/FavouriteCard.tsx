import React, { useContext } from "react";
import styles from "./FavouriteCard.module.css";
import { AiFillHeart, AiOutlineStar, BsBook } from "react-icons/all";
import { Link } from "react-router-dom";
import { BookContext } from "../CustomFiles/Context";

type CardProps = {
  title: string;
  author: string;
  price: string;
};

export type Book = {
  title: string;
  author: string;
  price: string;
  index: number;
  rating: number;
};

const FavouriteCard: React.FC<
  CardProps & { index: number; handleDelete: (index: number) => void }
> = ({ title, author, price, index, handleDelete }) => {
  //The price returned from the API has decimals, here I discard them
  const formattedPrice = parseFloat(price).toFixed();

  const book: Book = { title, author, price, index, rating: 0 };

  //Destructure the book property from the BookContext
  const { book: contextBook, setBook } = useContext(BookContext);

  return (
    <div className={styles.favContainer}>
      <div className={styles.favBookInfo}>
        <div className={styles.favBookTitleAuthorDiv}>
          <BsBook className={styles.favBookIcon} />
          <h3 className={styles.favTitle}>{title + " "}</h3>
          <p className={styles.favAuthor}>{"by " + author}</p>
        </div>
        <div className={styles.favPriceRatingDiv}>
          <p className={styles.favPrice}>{formattedPrice + " GBP"}</p>
          <div className={styles.favRating}>
            {[...Array(5)].map((_, index) => (
              <AiOutlineStar key={index} className={styles.favInactiveStar} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.favButtonsDiv}>
        <Link
          className={styles.favButtons}
          to="/edit"
          onClick={() => {
            setBook(book);
          }}
        >
          Edit
        </Link>
        <button
          className={styles.favButtons}
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
        <AiFillHeart className={styles.favIconHeart} />
      </div>
    </div>
  );
};

export default FavouriteCard;
