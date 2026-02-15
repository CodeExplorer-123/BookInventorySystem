import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  // CONTEXT-ONLY CRUD PART

  const [books, setBooks] = useState([
    {
      book_id: 1,
      book_name: "React Basics",
      author_name: "Jordan Walke",
      publisher: "Facebook Inc.",
      publish_date: "2013-05-29",
      book_description:
        "A beginner friendly guide to understanding React fundamentals including components, state, and props.",
    },
    {
      book_id: 2,
      book_name: "JavaScript Advanced Concepts",
      author_name: "Brendan Eich",
      publisher: "Mozilla Press",
      publish_date: "2015-08-15",
      book_description: "Deep dive into closures, hoisting, prototypes, async programming and modern ES6+ features.",
    },
    {
      book_id: 3,
      book_name: "Mastering Redux",
      author_name: "Dan Abramov",
      publisher: "Open Source Publications",
      publish_date: "2017-02-10",
      book_description: "Complete guide to managing application state using Redux and Redux Toolkit.",
    },
    {
      book_id: 4,
      book_name: "Clean Code",
      author_name: "Robert C. Martin",
      publisher: "Prentice Hall",
      publish_date: "2008-08-11",
      book_description:
        "A handbook of agile software craftsmanship focused on writing clean, maintainable and scalable code.",
    },
    {
      book_id: 5,
      book_name: "You Don't Know JS",
      author_name: "Kyle Simpson",
      publisher: "O'Reilly Media",
      publish_date: "2014-12-27",
      book_description:
        "In-depth explanation of JavaScript core mechanisms including scope, closures, and asynchronous behavior.",
    },
  ]);

  const addBook = (book) => {
    const newBook = {
      book_id: Date.now(),
      ...book,
    };
    setBooks((prev) => [...prev, newBook]);
  };

  const updateBook = (id, updatedBook) => {
    setBooks((prev) => prev.map((b) => (b.book_id === id ? { ...b, ...updatedBook } : b)));
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.book_id !== id));
  };

  return <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>{children}</BookContext.Provider>;

  // API CRUD PART

  /*
  const [books, setBooks] = useState([]);
  const API_URL = "http://localhost:3000/books";

  const fetchBooks = async () => {
    try {
      const res = await axios.get(API_URL);
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  const addBook = async (book) => {
    try {
      const res = await axios.post(API_URL, book);
      setBooks((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  const updateBook = async (id, updatedBook) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedBook);
      setBooks((prev) => prev.map((b) => (b.book_id === id ? res.data : b)));
    } catch (err) {
      console.error("Error updating book:", err);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setBooks((prev) => prev.filter((b) => b.book_id !== id));
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>{children}</BookContext.Provider>;
  */
};
