import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favourites/Favourites";
import Edit from "./pages/Edit/Edit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar profileImage="../public/images.png" alt="Profile Picture" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
