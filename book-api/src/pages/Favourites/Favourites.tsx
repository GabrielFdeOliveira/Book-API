import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";
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

  const handleFavourite = (newFavourite: Favourite) => {
    try {
      console.log("button clicked");
      // Check if the new favourite book already exists in the favourites array.
      const isFavourite = favourites.some(
        (favourite) => favourite.title === newFavourite.title
      );

      if (isFavourite) {
        Swal.fire("This book is already in your list");
      } else {
        // Create a new array that includes the new favourite book.
        const updatedFavourites = [...favourites, newFavourite];

        // Update the favourites array state with the new array.
        setFavourites(updatedFavourites);
        Swal.fire("Book added to your list");

        // Update localStorage with the updated favourites array.
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      }
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
    <div>
      <div>
        {favourites.map((favourite, index) => (
          <Card
            key={index}
            title={favourite.title}
            author={favourite.author}
            price={favourite.price}
            onFavourite={() => handleFavourite(favourite)}
          />
        ))}
      </div>
    </div>
  );
}
