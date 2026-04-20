import './App.css'
import Hero from './Component/Hero.jsx'
import About from './Component/About.jsx';
import Project from './Component/Project.jsx';
import Skills from './Component/Skills.jsx';
import Services_Contact from './Component/Services_Contact.jsx';

function App(){
    return(
        <div>
            <Hero/>
            <About/>
            <Project/>
            <Skills/>
            <Services_Contact/>
        </div>
    )
}

export default App;