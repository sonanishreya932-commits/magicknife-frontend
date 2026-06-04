import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

import Home from "./pages/Home";
import FullMenu from "./pages/FullMenu";
import GalleryPage from "./components/Gallery";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Checkout from "./pages/Checkout";
import TestMenu from "./pages/TestMenu";
import Admin from "./pages/Admin";
import Menu from "./components/Menu";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/test-menu" element={<TestMenu />} />
          <Route path="/live-menu" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
