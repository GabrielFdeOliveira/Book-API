import React, { useContext, useState } from "react";
import { BookContext } from "../../Components/CustomFiles/Context";
import styles from "./Edit.module.css";
import type { Book } from "../../Components/FavouriteCard/FavouriteCard";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Edit: React.FC = () => {
  const { book } = useContext(BookContext);
  const [price, setPrice] = useState<string | undefined>(book?.price);
  const [rating, setRating] = useState<number | undefined>(book?.rating);

  //Grab the values in the localStorage
  const storedFavourites = localStorage.getItem("favourites");

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = parseFloat(event.target.value);

    if (newRating >= 1 && newRating <= 5) {
      setRating(newRating);
    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid rating",
        text: "Please pick a number between 1 and 5 using the input arrows.",
      });
    }
  };

  const handleSaveChanges = () => {
    if (book) {
      const updatedInfo = { ...book, price: price || 0, rating: rating || 0 };

      //Parse from string to JS obj and store in a variable to be manipulated
      let updatedFavourites = [];

      try {
        updatedFavourites = storedFavourites
          ? JSON.parse(storedFavourites)
          : [];
      } catch (error) {
        console.error("Error parsing favourites:", error);
      }

      // Remove the book from the array, so we can push the updated value on its place
      updatedFavourites = updatedFavourites.filter(
        (b: Book) => b.title !== book.title
      );

      // Add the updated book to the favourites array
      updatedFavourites.push(updatedInfo);

      // Stringify it again and push it to localStorage
      try {
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
        Swal.fire({
          icon: "success",
          title: "Book info updated!",
          text: "The book has been successfully updated in your favourites list.",
        });
      } catch (error) {
        console.error("Error updating favourites:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.titleContainer}
        style={{ backgroundImage: `url(/books1.jpg)` }}
      >
        <div className={styles.titleAuthorDiv}>
          {book ? (
            <>
              <h2 className={styles.title}>{book.title}</h2>
              <p className={styles.author}>{"by " + book.author}</p>
            </>
          ) : (
            <h4 className={styles.title}>
              Please select a book from your favourites list to be edited.
            </h4>
          )}
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
            className={styles.inputField}
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
            className={styles.inputField}
          />
        </div>
      </div>
      <button className={styles.updateButton} onClick={handleSaveChanges}>
        UPDATE
      </button>
      <div className={styles.returnText}>
        <p>
          Return to:{" "}
          <Link to="/favourites" className={styles.link}>
            Favourites
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Edit;
