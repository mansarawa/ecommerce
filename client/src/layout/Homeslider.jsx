import React, { useState ,useEffect} from 'react'
import Achivement from './Achivement';
import monday from '../assets/cyber-monday.jpg'
import tuesday from '../assets/electronics-sale.jpg'
import wednesday from '../assets/fashion-sale.jpg'
function Homeslider() {
    const [currentImageIndex, setCurrentImageIndex] = useState(monday);
    const slider=()=>{
      setTimeout(() => {
        setCurrentImageIndex(tuesday)
        setTimeout(() => {
          setCurrentImageIndex(wednesday)
          setTimeout(() => {
            setCurrentImageIndex(monday)
            slider();
          }, 3000);
        }, 3000);
      }, 3000);
    }
  useEffect(() => {
   slider();
  }, [])
  return (
    <div>
        <div className="slider-container">
      <div className="slide">
        <img src={currentImageIndex} style={{width:'100%',minHeight:'100%',maxHeight:'100vh'}} alt={`Slide ${currentImageIndex}`} />
      </div>
    </div>
    <Achivement/>
    </div>
  )
}

export default Homeslider