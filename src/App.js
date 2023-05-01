import './App.css';
import Navbar from './components/Navbar';
import PostItem from "./components/PostItem";
import postData from "./data/postData";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="block mx-auto w-full sm:w-[640px] mx-6 font-montserrat">
      <Navbar />
      <div className="w-full mt-8 px-4">
        {postData.map((item) => (
          <PostItem title={item.title} details={item.details} />
        ))}
      </div>
      <Footer />
    </div>

  );
}

export default App;
