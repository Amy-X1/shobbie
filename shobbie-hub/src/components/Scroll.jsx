import React from 'react'
import { useState, useEffect } from 'react'
import './Scroll.css'

export default function Scroll() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

      const percentage = (scrollTop/documentHeight)*100;

      setProgress(percentage);
    };

    window.addEventListener("scroll",handleScroll);

    return() => {
      window.removeEventListener("scroll",handleScroll)
    };
  }, []);

  return (
    <div className='scroll-progress'>
      <div className="scroll-progress-bar" style={{width: `${progress}%`}}>

      </div>
    </div>
  )
}
