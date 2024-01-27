import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Link from "./components/link/Link";
import Logo from "./components/logo/Logo";
import Content from "./components/content/Content";
import Books from "./components/books/Books";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/link" element={<Link />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/content" element={<Content />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
