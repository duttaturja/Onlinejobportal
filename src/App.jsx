import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Posts from "./pages/Posts";
import Search from "./pages/Search";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
//import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Footer /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/post" element={<Posts />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default App;
