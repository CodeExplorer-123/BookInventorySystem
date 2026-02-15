import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSubmit, isEdit, bookData, setBookData }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{isEdit ? "Edit Book" : "Add Book"}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="modal-form-grid">
            <label>
              Title:
              <input type="text" name="title" value={bookData.title || ""} onChange={handleChange} required />
            </label>
            <label>
              Author:
              <input type="text" name="author" value={bookData.author || ""} onChange={handleChange} required />
            </label>
            <label>
              Year:
              <input type="date" name="year" value={bookData.year || ""} onChange={handleChange} required />
            </label>
            <label>
              Publisher:
              <input type="text" name="publisher" value={bookData.publisher || ""} onChange={handleChange} required />
            </label>
            <label style={{ gridColumn: "1 / span 3", width: "100%" }}>
              Description:
              <textarea
                name="description"
                value={bookData.description || ""}
                onChange={handleChange}
                rows={3}
                required
              />
            </label>
          </div>
          <div className="modal-buttons">
            <button type="button" onClick={onClose} className="close-btn">
              Close
            </button>
            <button type="submit" className="submit-btn">
              {isEdit ? "Confirm Edit" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
