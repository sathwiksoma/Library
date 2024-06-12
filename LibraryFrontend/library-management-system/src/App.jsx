// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

const App = () => {
    return (
        <Router>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/add" element={<AddBook />} />
                    <Route path="/edit/:id" element={<EditBook />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
