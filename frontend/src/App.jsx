import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import PostForm from "./components/PostForm";
import { sample } from "./lib/constant";

const App = () => {
  const [details, setDetails] = useState([...sample]);

  return (
    <div className="min-h-screen">
      <Header />
      <MainContent details={details} />
      <PostForm setDetails={setDetails} />
      <Footer />
    </div>
  );
};

export default App;
