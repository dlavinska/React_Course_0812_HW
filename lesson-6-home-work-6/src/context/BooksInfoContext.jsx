import { createContext, useState } from "react";
export const BooksContext = createContext(null);
BooksContext.displayName = "BooksContext";

const BooksInfoContext = ({ children }) => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell"
    },
    {
      id: 2,
      title: "Harry Potter",
      author: "Joanne Rowling"
    },
    {
      id: 3,
      title: "Elon Musk",
      author: "Ashlee Vance"
    },
    {
      id: 4,
      title: "King Lear",
      author: "William Shakespeare"
    },
    {
      id: 5,
      title: "The Life And Opinions of Tristram Shandy",
      author: "Laurence Sterne"
    },
    {
      id: 6,
      title: "Collective Intelligence in Action",
      author: "Satnam Alag"
    },
    {
      id: 7,
      title: "3D User Interfaces with Java 3D",
      author: "Jon Barrilleaux"
    },
    {
      id: 8,
      title: "JSON and AJAX with JavaScript for beginners",
      author: "Laurence Lars Svekis"
    },
    {
      id: 9,
      title: "Illustrated Guide to HTTP",
      author: "Paul S. Hethmon"
    },
    {
      id: 10,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen and 3 more"
    }
  ]);

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  }

  const booksInfo = {
    books,
    removeBook
  };

  return (
    <BooksContext.Provider value={booksInfo}>{children}</BooksContext.Provider>
  );
};

export default BooksInfoContext;
