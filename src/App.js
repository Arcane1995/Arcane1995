import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

import Services from "./components /Services";
import About from "./components /About";
import Trainer from "./components /Trainer";
import Home from "./components /Home/Home";
import NotFound from "./components /NotFound";

function App() {
  return (
    <BrowserRouter >
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="trainer" element={<Trainer />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
