// src/components/AddBook.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        isbn: '',
        genre: '',
        publicationYear: '',
        publisher: '',
        totalCopies: '',
        description: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://localhost:7215/api/books', book)
            .then(response => {
                navigate('/');
            })
            .catch(error => {
                console.error('There was an error creating the book!', error);
            });
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Add New Book</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={book.title} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" name="author" value={book.author} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">ISBN</label>
                    <input type="text" className="form-control" name="isbn" value={book.isbn} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input type="text" className="form-control" name="genre" value={book.genre} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Publication Year</label>
                    <input type="text" className="form-control" name="publicationYear" value={book.publicationYear} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Publisher</label>
                    <input type="text" className="form-control" name="publisher" value={book.publisher} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Total Copies</label>
                    <input type="number" className="form-control" name="totalCopies" value={book.totalCopies} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" name="description" value={book.description} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
