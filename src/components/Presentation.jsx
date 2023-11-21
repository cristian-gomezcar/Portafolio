import '../styles/Presentation.css'
import photo from '../assets/photo.png'
export const Presentation = () => {
  return (
    <div className='image-container'>
        <img className='img-presentation' src={photo} alt="photo" />
    </div>
  )
}
