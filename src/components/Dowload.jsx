import { saveAs } from 'file-saver';
import cv from '../assets/cv.pdf'

export const Dowload = () => {

    const handleDownload = () => {
        saveAs(cv, 'cv.pdf');
      };
  return (
    <button onClick={handleDownload} class="bg-[#f17406] hover:bg-[#14213D] text-white py-1 px-1 rounded inline-flex items-center">
    <svg class="fill-current w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
    <span className='text-xl '>Download CV</span>
    </button>
  )
}
