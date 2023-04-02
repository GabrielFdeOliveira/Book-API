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

  return (
    <div>
      <div>
        {favourites.map((favourite, index) => (
          <Card
            key={index}
            title={favourite.title}
            author={favourite.author}
            price={favourite.price}
          />
        ))}
      </div>
    </div>
  );
}
export type { Favourite };
