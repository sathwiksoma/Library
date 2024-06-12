// src/components/BookList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7215/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books!", error);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      axios
        .delete(`https://localhost:7215/api/books/${id}`)
        .then(() => {
          setBooks(books.filter((book) => book.id !== id));
        })
        .catch((error) => {
          console.error("There was an error deleting the book!", error);
        });
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Library Books</h1>
      <Link to="/add" className="btn btn-primary mb-3">
        Add New Book
      </Link>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Genre</th>
              <th>Publication Year</th>
              <th>Publisher</th>
              <th>Total Copies</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>{book.genre}</td>
                <td>{book.publicationYear}</td>
                <td>{book.publisher}</td>
                <td>{book.totalCopies}</td>
                <td>{book.description}</td>
                <td>
                  <Link
                    to={`/edit/${book.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
