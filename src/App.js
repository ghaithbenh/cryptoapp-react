import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
