// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import ShowBlog from "./Components/ShowBlog";
import NewBlog from "./Components/NewBlog";
import React, { useState } from 'react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="NewBlog" element={<NewBlog />} />
        <Route path="ShowBlog" element={<ShowBlog />} />
        <Route index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
