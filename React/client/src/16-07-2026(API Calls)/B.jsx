import React, { useState } from "react";
import axios from "axios";

function B() {

    let [books, setBooks] = useState([]);
    let [search, setSearch] = useState("");
    let [loading, setLoading] = useState(false);
    let [message, setMessage] = useState("");

    // get 

    let getBooks = () => {
        setLoading(true);

        setTimeout(() => {
            axios.get("https://jsonplaceholder.typicode.com/posts")
                .then((res) => {
                    setBooks(res.data.slice(0, 10));
                    setLoading(false);
                    setMessage("Books Loaded successfully")
                })
        }, 2000)
    };

    // post

    let addBook = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "React Api Axios",
            body: "Learn React API Calls"
        })

            .then((res) => {
                setBooks([...books, res.data]);
                setMessage("Book Added successfully");
            });
    };

    // Put

    let updateBook = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/1", {
            id: 1,
            title: "Advanced React",
            body: "React Updated",
        })

            .then((res) => {
                setBooks(
                    books.map((book) =>
                        book.id === 1 ? res.data : book
                    )
                );
                setMessage("Book Upadted Successfully");
            });
    };

    // Delete

    let deleteBook = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")

            .then(() => {
                setBooks(books.filter((book) => book.id !== 1));
                setMessage("Deleted successfully");
            });
    };

    let filterBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <div>

            <h1>Library Management</h1>

            <input type="text"
                placeholder="Search Book"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <br /><br />

            <button onClick={getBooks}>Get Books</button>

            <button onClick={addBook}>Add Book</button>

            <button onClick={updateBook}>Update Book</button>

            <button onClick={deleteBook}>Delete Book</button>

            <h2>{message}</h2>

            {loading ? <h2>Loading.....</h2>
                : filterBooks.map((book) => (
                    <div key={book.id}>

                        <h3>ID: {book.id}</h3>
                        <h3>Title: {book.title}</h3>
                        <p>{book.body}</p>

                    </div>
                ))
            }

        </div>
    )
}

export default B;