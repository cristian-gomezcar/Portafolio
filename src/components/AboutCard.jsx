import photo from '../assets/photo.png'
import '../styles/About.css';

export const AboutCard = () => {
    return (
        
        <div class="about-card relative">
            <img src={photo} class="rounded-full absolute top-0 right-0 w-16 "/>
                <h2 className="about-title font-thin text-3xl text-center ml-5 text-[#f17406]" >An enthusiastic web developer </h2>
                <h3 className="about-description font-thin text-3xl text-justify ml-5 mt-11 text-[#14213D]">
                Hello! I'm Cristian Gómez, a passionate developer and programmer with 
                solid knowledge in front-end and SQL. My versatile approach and ability 
                to tackle technological challenges allow me to create effective solutions.
                 I'm excited to be part of a dynamic team and bring our ideas to life! 🧐
                </h3>

        </div>

    )
}
