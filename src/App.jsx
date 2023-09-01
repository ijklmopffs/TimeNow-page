import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
