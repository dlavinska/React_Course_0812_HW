import { useContext } from 'react';
import { BooksContext } from "../context/BooksInfoContext";

const BooksList = () => {
  const { books, removeBook } = useContext(BooksContext);
  return (
    <div className="card">
      <ul className="list-group">
        {books.map((book) => (
          <li
            key={book.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <h5 className="mb-1 font-italic">
              Title: "{book.title}" - Author: {book.author}
            </h5>
            <button
              onClick={() => removeBook(book.id)}
              className="btn btn-danger ml-3"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;