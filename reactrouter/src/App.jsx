import { Link, Routes, Route} from "react-router-dom";
import Blue from "./components/Blue/Blue";
import Red from "./components/Red/Red";
import Home from "./components/Home/Home";

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
