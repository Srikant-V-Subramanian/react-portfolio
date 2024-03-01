import "../scss/styles.scss";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
