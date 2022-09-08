import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Employment from "./components/Employment";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Cta from "./components/Cta";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contact />
      <Employment />
      <Skills />
      <About/>
      <Details/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;
