import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Navbar from "./Navbar";
import NoMatch from "./NoMatch";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Student" element={<Student />}>
        </Route>
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}
export default App;
