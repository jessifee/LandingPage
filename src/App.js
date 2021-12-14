import "./App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Footer from "./Components/Footer";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Intro />

      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
