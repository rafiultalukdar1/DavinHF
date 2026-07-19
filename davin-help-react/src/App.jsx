import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Donate from "./pages/Donate";

function App() {
  return (
    <div id="top">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
