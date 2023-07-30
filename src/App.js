/** @format */

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookmarksIndex from "./components/BookmarksIndex";
import BookmarkDetails from "./components/BookmarkDetails";
import Welcome from "./components/Welcome";
import EditBookmark from "./components/EditBookmark";

function App() {
  return (
    <BrowserRouter>
    <nav>Bookmarks</nav>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/bookmarks" element={<BookmarksIndex></BookmarksIndex>}></Route>
        <Route path="/bookmarks/:id" element={<BookmarkDetails></BookmarkDetails>}></Route>
        <Route path="/bookmarks/:id/edit" element={<EditBookmark />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
