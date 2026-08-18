import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import ThemeProvider, { ThemeContext } from "./context/ThemeContext.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "app dark" : "app light"}>
      <BrowserRouter>

        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white text-center py-3">
          <p className="mb-0">
            © 2026 LearnHub
          </p>
        </footer>

      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;