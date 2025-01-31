import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col h-screen">
    <Header />
    <main className="flex-grow bg-white content-center">
     <Home />
    </main>
    <Footer />
  </div>
  );
}

export default App;
