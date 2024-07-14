import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { Products } from "./pages/Products";
import { About } from "./pages/About";
// import { ProductDetail } from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
