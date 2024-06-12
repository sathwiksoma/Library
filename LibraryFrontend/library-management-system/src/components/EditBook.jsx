// src/components/EditBook.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [totalCopies, setTotalCopies] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://localhost:7215/api/books/${id}`)
      .then((response) => {
        const book = response.data;
        setTitle(book.title);
        setAuthor(book.author);
        setIsbn(book.isbn);
        setGenre(book.genre);
        setPublicationYear(book.publicationYear);
        setPublisher(book.publisher);
        setTotalCopies(book.totalCopies);
        setDescription(book.description);
      })
      .catch((error) => {
        console.error("There was an error fetching the book!", error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBook = {
      title,
      author,
      isbn,
      genre,
      publicationYear,
      publisher,
      totalCopies,
      description,
    };
    console.log("Updated Book:", updatedBook);

    axios
      .put(`https://localhost:7215/api/books/${id}`, updatedBook)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error updating the book!", error);
      });
  };

  return (
    <div className="container mt-4">
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">
            ISBN
          </label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="genre" className="form-label">
            Genre
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publicationYear" className="form-label">
            Publication Year
          </label>
          <input
            type="number"
            className="form-control"
            id="publicationYear"
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="publisher" className="form-label">
            Publisher
          </label>
          <input
            type="text"
            className="form-control"
            id="publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="totalCopies" className="form-label">
            Total Copies
          </label>
          <input
            type="number"
            className="form-control"
            id="totalCopies"
            value={totalCopies}
            onChange={(e) => setTotalCopies(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
