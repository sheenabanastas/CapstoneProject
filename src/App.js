import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Faqs from "./pages/Faqs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="faqs" element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  );
}