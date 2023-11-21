import { Navbar } from './components/Navbar'
import { Presentation } from './components/Presentation'
import { PresentationText } from './components/PresentationText'
import { Skills } from './components/Skills'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { Projects } from './components/Projects'
import { About } from './components/About'
import pokemon from '../src/assets/about.png';
import { GalerySkills } from './components/GalerySkills'
import asp from '../src/assets/carousel/asp.png'
import django from '../src/assets/carousel/django.png'
import cmas from '../src/assets/carousel/cmas.png'
import python from '../src/assets/carousel/python.png'
import native from '../src/assets/carousel/native.png'

import './App.css'

function App() {
  const img=[
    {
      img:native, name:"React Native"
    },
    {
      img:asp, name:"Asp.net"
    },
    {
      img:cmas, name:"C++"
    },
    {
      img:python, name:"Python"
    },
    {
      img:django, name:"Django"
    }
  ];
  return (
    <div className='main-container  dark:bg-neutral-900'>
      <div>
        <Navbar />
      </div>
      <div className="presentation-container" id="home">

        <PresentationText />
        <Presentation />

      </div>
      <div className="about-container" id="about">
        <About />
      </div>
      
      <div className="skills-container" id="skills">
        <div className="presentation-skills mt-20">
          <Skills />
        </div>
        <div>
        <GalerySkills img={img}/>
        </div>
      </div> 
      <div className="projects-container"  id="projects">
        <h2 className='projects-title'>My projects</h2>
        <div className='grid auto-cols-auto grid-cols-2 justify-items-center gap-20'>
        <Projects/>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default App
