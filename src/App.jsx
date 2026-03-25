import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Header from "./components/core/Header/Index";

const App = () => {
  return (
    <div className="App_Entry min-h-screen w-full bg-primary overflow-x-hidden relative z-0">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" />
        <Route path="/gallery" />
        <Route path="/contact" />
      </Routes>
    </div>
  );
};

export default App;
