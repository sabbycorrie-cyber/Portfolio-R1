import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Portfolio" element={<Portfolio />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
