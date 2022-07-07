import Book from "./components/Book";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/Main Content";
import Navigation from "./components/Navigation";
import Stories from "./components/Stories";
import Tours from "./components/Tours";

function App() {
  return (
    <div className="App">
     <Navigation />
     <Header />
     <MainContent />
     <Features />
     <Tours />
     <Stories />
     <Book />
     <Footer />
    </div>
  );
}

export default App;
