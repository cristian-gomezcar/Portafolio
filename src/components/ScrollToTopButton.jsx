import { FcCollapse } from "react-icons/fc";
import { useState, useEffect } from 'react';
import '../styles/ScrollToTopButton.css'


export const ScrollToTopButton = () =>  {
    const [isVisible, setIsVisible] = useState(false);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div onClick={scrollToTop}>
        <FcCollapse className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}>  
        </FcCollapse>
      </div>
    );
  }