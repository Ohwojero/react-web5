import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import Intro from "./Pages/Intro";
import Portfolio from "./Pages/Portfolio";
import Testimonials from "./Pages/Testimonials";
import Works from "./Pages/Works";



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Intro />
        <Testimonials />
        <Works />
        <Contact />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
