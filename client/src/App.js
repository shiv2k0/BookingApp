import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="*" element={<h1>Error Page</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
