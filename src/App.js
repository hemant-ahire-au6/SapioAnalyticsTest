import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Liked from "./Component/Liked/Liked";
import HomeSection from "./Component/HomeSection/HomeSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Home" element={<HomeSection />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
      </Routes>
    </div>
  );
}

export default App;
