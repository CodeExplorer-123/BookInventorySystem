import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BookProvider } from "./context/BookContext";

const App = () => {
  return (
    <BookProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </BookProvider>
  );
};

export default App;
