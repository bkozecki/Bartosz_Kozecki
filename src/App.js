import "./App.css";

import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ContextProvider from "./utils/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <Intro />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </ContextProvider>
  );
}

export default App;
