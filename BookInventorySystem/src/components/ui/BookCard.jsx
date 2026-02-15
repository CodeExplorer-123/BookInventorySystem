import { useContext } from "react";
import { BookContext } from "../../context/BookContext";


function BookCard({ book, onEdit }) {
  const { deleteBook } = useContext(BookContext);

  const handleDelete = () => {
    deleteBook(book.book_id);
  };

  const handleDescription = () => {
    alert(book.book_description || "No description available");
  };

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-slate-500">Book Name</h2>
        <p className="mt-1 text-sm font-medium text-slate-900">{book?.book_name || "-"}</p>
      </div>

      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-slate-500">Author</h2>
        <p className="mt-1 text-sm text-slate-800">{book?.author_name || "-"}</p>
      </div>

      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-slate-500">Publish Date</h2>
        <p className="mt-1 text-sm text-slate-800">{book?.publish_date || "-"}</p>
      </div>

      <div className="mb-3">
        <h2 className="text-xs font-bold uppercase tracking-wide text-slate-500">Publisher</h2>
        <p className="mt-1 text-sm text-slate-800">{book?.publisher || "-"}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xs font-bold uppercase tracking-wide text-slate-500">Description</h2>
        <p className="mt-1 text-sm leading-5 text-slate-800">{book?.book_description || "-"}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-md border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-100"
          onClick={onEdit}
        >
          Edit
        </button>

        <button
          type="button"
          className="rounded-md border border-rose-200 bg-rose-50 px-3 py-1.5 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
          onClick={handleDelete}
        >
          Delete
        </button>

        <button
          type="button"
          className="rounded-md border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          onClick={handleDescription}
        >
          Description
        </button>
      </div>
    </article>
  );
}

export default BookCard;
