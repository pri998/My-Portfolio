import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Project";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-indigo-400 selection:text-indigo-900 scroll-smooth">
      
      {/* Background gradient layers */}
      <>
        <div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] 
        pointer-events-none"></div>
        
        <div className="absolute top-0 left-0 z-[-2] min-h-screen w-full bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] 
        pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] 
          mask-image:radial-gradient(white,transparent)"></div>
        </div>
      </>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <Nav />
        <div className="pt-24 m-4 md:m-8">
          <div id="about">
            <About />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="education">
            <Education />
          </div>

          <div id="achievements">
            <Achievements />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
