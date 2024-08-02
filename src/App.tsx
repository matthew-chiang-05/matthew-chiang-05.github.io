import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { AppContainer } from "./Components/AppStyles";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <AppContainer>
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
      <Contacts></Contacts>
    </AppContainer>
  );
}

export default App;
