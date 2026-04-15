import React, { useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Header from "./components/core/Header/Index";
import { useSelector } from "react-redux";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import SlugEventPage from "./components/core/Event/SlugEvent";

const App = () => {
  const { theme } = useSelector((state) => state.theme);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="App_Entry min-h-screen w-full overflow-x-hidden relative z-0">
      <Header />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/:slug" element={<SlugEventPage/>}/>
        {/* <Route path="/"/> */}
      </Routes>
    </div>
  );
};

export default App;
