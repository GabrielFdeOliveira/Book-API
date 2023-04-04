import React, { useContext, useState } from "react";
import { BookContext } from "../../Components/CustomFiles/Context";
import styles from "./Edit.module.css";
import type { Book } from "../../Components/FavouriteCard/FavouriteCard";

const Edit: React.FC = () => {
  const { book } = useContext(BookContext);
  const [price, setPrice] = useState<string | undefined>(book?.price);
  const [rating, setRating] = useState<number | undefined>(book?.rating);
  const storedFavourites = localStorage.getItem("favourites");

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(parseFloat(event.target.value));
  };

  const handleSaveChanges = () => {
    if (book) {
      const updatedInfo = { ...book, price: price || 0, rating: rating || 0 };
      let updatedFavourites = storedFavourites
        ? JSON.parse(storedFavourites)
        : [];

      // Remove the book from the array, so we can push the updated value on its place
      updatedFavourites = updatedFavourites.filter(
        (b: Book) => b.title !== book.title
      );

      // Add the updated book to the favourites array
      updatedFavourites.push(updatedInfo);

      // Push it to localStorage
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.titleContainer}
        style={{ backgroundImage: `url(/books1.jpg)` }}
      >
        <div className={styles.titleAuthorDiv}>
          <h2 className={styles.title}>{book?.title}</h2>
          <p className={styles.attributeValue}>{"by " + book?.author}</p>
        </div>
      </div>
      <h1>Edit</h1>
      <div className={styles.attributeContainer}>
        <div className={styles.attribute}>
          <span className={styles.attributeTitle}>Cost</span>
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            className={styles.attributeValue}
          />
        </div>
        <div className={styles.attribute}>
          <span className={styles.attributeTitle}>Rate</span>
          <input
            type="number"
            value={rating}
            min={1}
            max={5}
            onChange={handleRatingChange}
            className={styles.attributeValue}
          />
        </div>
      </div>
      <button className={styles.attributeButton} onClick={handleSaveChanges}>
        UPDATE
      </button>
    </div>
  );
};

export default Edit;
