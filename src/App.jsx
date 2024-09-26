import Calculator from "./components/calculator";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator />} />
      <Route path="aboutus" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
