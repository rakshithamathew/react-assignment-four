import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Student from "./Components/Student";
import Navbar from "./Components/Navbar";
import NoMatch from "./Components/NoMatch";
import Contact from "./Components/Contact";

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
