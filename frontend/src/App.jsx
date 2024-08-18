import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import PostForm from "./components/PostForm";
import { sample } from "./lib/constant";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [details, setDetails] = useState([...sample]);

  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<MainContent details={details} />} />
        <Route path="/post" element={<PostForm setDetails={setDetails} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
