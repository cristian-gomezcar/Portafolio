import { FaWhatsapp, FaGithub, FaYoutube } from 'react-icons/fa';
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoTelegram } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import '../styles/PresentationSocialMedia.css'
export const PresentationSocialMedia = () => {
  return (
    <div className="wrapper ">
    <div className="icon whatsapp">
      <div className="tooltip">
      Whatsapp
      </div>
      <span><a href="https://wa.me/+50248965505" target="_blank"><FaWhatsapp className='media' /></a></span>
    </div>
    <div className="icon linkedin">
      <div className="tooltip">
      Linkedin
      </div>
      <span><a href="https://www.linkedin.com/in/cristian-gomezcar" target="_blank"><TiSocialLinkedin className='media'/></a></span>
    </div>
    <div className="icon telegram">
      <div className="tooltip">
      Telegram
      </div>
      <span><a href="https://t.me/+50248965505" target="_blank"><BiLogoTelegram className='media' /></a></span>
    </div>
    <div className="icon github">
      <div className="tooltip">
        Github
      </div>
      <span><FaGithub className='media' /></span>
    </div>
    <div className="icon email">
      <div className="tooltip">
        gmezcristianxd@gmail.com
      </div>
      <span><a target='_blank' 
      href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gmezcristianxd@gmail.com&su=Asunto%20del%20correo&body=Cuerpo%20del%20correo&tf=1"> 
      <MdEmail className='media'/></a></span>
    </div>
  </div>
  )
}
