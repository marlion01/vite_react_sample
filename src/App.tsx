import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notfound";
import Header from "./pages/Header";
import Members from "./pages/members";
function App() {
  return (
    <Router>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Header>
    </Router>
  );
}

export default App;
