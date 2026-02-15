import { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";
import BookCard from "../ui/BookCard";
import Header from "../ui/Header";
import Modal from "../ui/Modal";
import BookControl from "../ui/BookControl";

const Home = () => {
  const { books, addBook, updateBook } = useContext(BookContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [bookData, setBookData] = useState({});
  const [editId, setEditId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleAdd = () => {
    setBookData({});
    setIsEdit(false);
    setModalOpen(true);
    setEditId(null);
  };

  const handleEdit = (book) => {
    setBookData({
      title: book.book_name || "",
      author: book.author_name || "",
      year: book.publish_date || "",
      publisher: book.publisher || "",
      description: book.book_description || "",
    });
    setIsEdit(true);
    setModalOpen(true);
    setEditId(book.book_id);
  };

  const handleClose = () => {
    setModalOpen(false);
    setBookData({});
    setEditId(null);
  };

  const handleSubmit = () => {
    const mappedBook = {
      book_name: bookData.title,
      author_name: bookData.author,
      publisher: bookData.publisher,
      publish_date: bookData.year,
      book_description: bookData.description,
    };
    if (isEdit && editId !== null) {
      updateBook(editId, mappedBook);
    } else {
      addBook(mappedBook);
    }
    handleClose();
  };

  // Filter books by search value (name starts with search)
  const filteredBooks = books.filter(
    (book) => searchValue.trim() === "" || book.book_name?.toLowerCase().startsWith(searchValue.toLowerCase()),
  );

  return (
    <>
      <Header />
      <BookControl onAdd={handleAdd} searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredBooks.map((book) => (
          <BookCard key={book.book_id} book={book} onEdit={() => handleEdit(book)} />
        ))}
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={handleClose}
        onSubmit={handleSubmit}
        isEdit={isEdit}
        bookData={bookData}
        setBookData={setBookData}
      />
    </>
  );
};

export default Home;
