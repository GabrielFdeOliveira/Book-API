import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import Edit from "./pages/Edit/Edit";
import Header from "./Components/Header/Header";
import { BookContext } from "./Components/CustomFiles/Context";
import { useState } from "react";
import type { Book } from "./Components/FavouriteCard/FavouriteCard";

function App() {
  const [book, setBook] = useState<Book | null>(null);

  const updateBookContext = (newBook: Book | null) => {
    setBook(newBook);
  };
  return (
    <BookContext.Provider value={{ book, setBook: updateBookContext }}>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Navbar profileImage="/profile-pic.png" alt="Profile Picture" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BookContext.Provider>
  );
}

export default App;
