import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div id="hero">
        <Hero></Hero>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="projects">
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
