// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lesson1 from "./Lesson1";
import Lesson2 from "./Lesson2";
import Lesson3 from "./Lesson3";
import Lesson4 from "./Lesson4";
import Lesson5 from "./Lesson5";
import Lesson7 from "./Lesson7";
import Lesson8 from "./Lesson8";
import Lesson9 from "./Lesson9";
import Lesson10 from "./Lesson10";
// ... import other lessons

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson4" element={<Lesson4 />} />
        <Route path="/lesson5" element={<Lesson5 />} />
        <Route path="/lesson7" element={<Lesson7 />} />
        <Route path="/lesson8" element={<Lesson8 />} />
        <Route path="/lesson9" element={<Lesson9 />} />
        <Route path="/lesson10" element={<Lesson10 />} />
      </Routes>
    </Router>
  );
}

export default App;