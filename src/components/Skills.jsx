import { DiJavascript1, DiReact, DiHtml5, DiGit, DiDatabase, DiBootstrap } from "react-icons/di";
import { SiTailwindcss, SiMaterialdesign } from "react-icons/si";
import '../styles/Skills.css';

export const Skills = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-[#f17406] font-bold text-4xl">My Skills</h2>
        <div className="wrapper-skill flex-wrap">
          <div className="icon-skill javascript">
            <div className="tooltip-skills">
              JavaScript
            </div>
            <span><DiJavascript1 className='media-skills' /></span>
          </div>
          <div className="icon-skill react">
            <div className="tooltip-skills">
              React
            </div>
            <span><DiReact className='media-skills' /></span>
          </div>
          <div className="icon-skill html">
            <div className="tooltip-skills">
              HTML
            </div>
            <span><DiHtml5 className='media-skills' /></span>
          </div>

          <div className="icon-skill bootstrap">
            <div className="tooltip-skills">
              Bootstrap
            </div>
            <span><DiBootstrap className='media-skills' /></span>
          </div>
          <div className="icon-skill tailwind">
            <div className="tooltip-skills">
              Tailwind CSS
            </div>
            <span><SiTailwindcss className='media-skills' /></span>
          </div>
          <div className="icon-skill material-ui">
            <div className="tooltip-skills">
              Material UI
            </div>
            <span><SiMaterialdesign className='media-skills' /></span>
          </div>
          <div className="icon-skill git">
            <div className="tooltip-skills">
              Git
            </div>
            <span><DiGit className='media-skills' /></span>
          </div>
          <div className="icon-skill sql">
            <div className="tooltip-skills">
              SQL server
              MySQL
            </div>
            <span><DiDatabase className='media-skills' /></span>
          </div>
        </div>
      </div>
      

    </div>
  );
};
