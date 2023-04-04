import { createContext } from "react";
import type { Book } from "../FavouriteCard/FavouriteCard";

type BookContextType = {
  book: Book | null;
  setBook: (book: Book | null) => void;
};

export const BookContext = createContext<BookContextType>({
  book: {
    title: "Book title",
    author: "Book Author",
    price: "£20",
    index: 1,
    rating: 0,
  },
  setBook: () => {},
});
