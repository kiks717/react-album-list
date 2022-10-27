import React, { useState } from 'react'
import classes from './PopUpImage.module.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const PopUpImage = ({photos}) => {
  const [slideNumber,setSlideNumber] = useState(0)
  const [openModal,setOpenModal] = useState(false)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const nextSlide = () => {
    slideNumber === 0 ? setSlideNumber(photos.length -1) : setSlideNumber(slideNumber - 1)
  }
  const prevSlide = () => {
  }
  return (
    <div className={classes.modal}>

      {openModal &&  
      <div>
        <button 
            onClick={handleCloseModal}
            className={classes.btnClose}>
            Close
      </button>
        <div className={classes.fullScreen}>
          <img 
          src={photos[slideNumber].url} 
          alt={photos.title}
          />
        </div>

        <div className={classes.sliderWrap}>
        <AiOutlineArrowLeft
                onClick={prevSlide}
                 className={classes.btnPrev}/>
                <AiOutlineArrowRight 
                onClick={nextSlide}
                className={classes.btnNext}/> 
        </div>
        </div>}
          <div className={classes.galleryWrap}>
         {handleOpenModal &&
                  photos && 
                  photos.map((slide,index) => {
                    return (
                      <div
                       className={classes.single} 
                       key={photos.id}
                       onClick={() => handleOpenModal(index)}>
                        <img 
                        key={photos.id}
                        src={slide.thumbnailUrl} 
                        alt={slide.title}/>
                        <p>{slide.title}</p>
                      </div>
                    )
                  })} 

    </div>
    </div>

  )
}

export default PopUpImage 