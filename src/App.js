import './App.css';
import Header from './components/header/Header';
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
function App() {
  return (
    <>
    <Header />
    <About />
    <Skill/>
    <Portfolio/>
    <Contact/>
    </>
  );
}

export default App;
