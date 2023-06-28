import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contaxt";
import About from "./pages/About";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/") {
      navigate("/ka");
    }
  }, [pathname]);
  return (
    <Routes>
      <Route path="/:locale" element={<Home />} />
      <Route path="/:locale/services" element={<Services />} />
      <Route path="/:locale/products" element={<Products />} />
      <Route path="/:locale/contact" element={<Contact />} />
      <Route path="/:locale/about" element={<About />} />
    </Routes>
  );
}

export default App;
