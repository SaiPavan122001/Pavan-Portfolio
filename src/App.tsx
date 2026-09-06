import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Capabilities from "./components/Capabilities";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main className="stage" id="top">
        <Hero />
        <About />
        <Experience />
        <Capabilities />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}