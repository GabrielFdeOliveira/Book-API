import React, { useState, useEffect } from "react";
import FavouriteCard from "../../Components/FavouriteCard/FavouriteCard";
import Searchbar from "../../Components/Searchbar/Searchbar";
import styles from "./Favourites.module.css";
import Swal from "sweetalert2";

type Favourite = {
  title: string;
  author: string;
  price: string;
};

export default function Favourites() {
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    const storedFavourites = localStorage.getItem("favourites");
    if (storedFavourites) {
      setFavourites(JSON.parse(storedFavourites));
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
        confirmButtonColor: "#2eba33",
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
      <div className={styles.favPageContainer}>
        <div className={styles.favPageSearchBar}>
          <Searchbar handleClick={handleSearch} />
        </div>
        <div className={styles.favPageCardContainer}>
          {favourites.map((favourite, index) => (
            <FavouriteCard
              key={index}
              title={favourite.title}
              author={favourite.author}
              price={favourite.price}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export type { Favourite };
