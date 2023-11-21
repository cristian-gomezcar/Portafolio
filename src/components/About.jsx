import img from '../assets/about.png'
import { Dowload } from './Dowload';
import { AboutCard } from './AboutCard'
import '../styles/About.css'

export const About = () => {
  return (
    <div className="about">
      <div className="about-img-container">
        <img className="about-img w-full" src={img} alt="asas" />
      </div>
      <div className="flex items-center flex-col gap-10 w-full rounded-2xl">
        <AboutCard />
        <Dowload />
      </div>
    </div>
  )
}
