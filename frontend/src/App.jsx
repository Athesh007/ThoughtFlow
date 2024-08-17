import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import PostDetails from "./components/PostDetails";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <div className=" overflow-y-hidden">
      <Header />
      {/* <MainContent />
      <PostDetails /> */}
      <PostForm />
      <Footer />
    </div>
  );
};

export default App;
