import React, { useState, useEffect } from "react";
import FavouriteCard from "../../Components/FavouriteCard/FavouriteCard";
import Searchbar from "../../Components/Searchbar/Searchbar";
import styles from "./Favourites.module.css";
import Swal from "sweetalert2";

type Favourite = {
  title: string;
  author: string;
  price: string;
  rating: number;
};

const Favourites: React.FC = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    try {
      const storedFavourites = localStorage.getItem("favourites");
      if (storedFavourites) {
        setFavourites(JSON.parse(storedFavourites));
      }
    } catch (error) {
      console.error("Error retrieving favourites from localStorage: ", error);
    }
  }, []);

  function handleSearch(searchTerm: string) {
    try {
      const filteredFavourites = favourites.filter((favourite) =>
        favourite.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFavourites(filteredFavourites);
    } catch (error) {
      console.error(error);
    }
  }

  function handleDelete(index: number) {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28a52d",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedFavourites = [...favourites];
          updatedFavourites.splice(index, 1);
          setFavourites(updatedFavourites);
          localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
          Swal.fire(
            "Deleted!",
            "This book has been removed from favourites.",
            "success"
          );
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }

  return (
    <div className={styles.outter}>
      <h2>Favourites</h2>
      {favourites.length === 0 ? (
        <p>You have no books on your favourites list yet.</p>
      ) : (
        <div className={styles.favPageContainer}>
          <Searchbar handleClick={handleSearch} />
          <div className={styles.favPageSearchBar}></div>
          <div className={styles.favPageCardContainer}>
            {favourites.map((favourite, index) => (
              <FavouriteCard
                key={index}
                title={favourite.title}
                author={favourite.author}
                price={favourite.price}
                rating={favourite.rating}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Favourites;
export type { Favourite };
