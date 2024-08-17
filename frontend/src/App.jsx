import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <MainContent />
      <PostForm />
      <Footer />
    </div>
  );
};

export default App;
