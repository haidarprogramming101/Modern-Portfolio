import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound.jsx";
import { Home } from "./pages/home.jsx";

function App() {
  return (
    <BrowserRouter basename="/Modern-Portfolio">
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
