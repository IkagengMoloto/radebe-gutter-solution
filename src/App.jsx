
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function Placeholder({ title }) {
  return (
    <main style={{ padding: "80px 8%", minHeight: "60vh" }}>
      <h1>{title}</h1>
      <p>This page is under development.</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Placeholder title="About Us" />} />
        <Route path="/services" element={<Placeholder title="Our Services" />} />
        <Route path="/projects" element={<Placeholder title="Our Projects" />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
      </Routes>
    </BrowserRouter>
  );
}
