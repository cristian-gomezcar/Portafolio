import { PresentationSocialMedia } from './PresentationSocialMedia'
import '../styles/PresentationText.css'

export const PresentationText = () => {
  return (
    <div className='text-container'>
      <h3 className='text-pres'>Hi, i'm</h3>
      <div className='inline-block'>
        <h2 className='text-name text-[#f17406]'>Cristian Gómez.</h2>
      </div>
      <h3 className='text-dev'>Developer</h3>
      <PresentationSocialMedia/>
    </div>
  )
}