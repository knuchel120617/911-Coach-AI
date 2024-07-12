import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Signin, Signup, Menu, Simulator, QA, Conversations } from "./Page/Index";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/conversations" element={<Conversations />} />
          <Route path="/qa" element={<QA />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
