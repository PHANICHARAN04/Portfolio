import './App.css';
import About from './Components/About';
import Certificates from './Components/Certificates';
import { Contact } from './Components/Contact';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Projects from './Components/Project';

function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Skills></Skills>
    <Projects></Projects>
    <Certificates></Certificates>
    <Contact/>
    </>
  );
}

export default App;
