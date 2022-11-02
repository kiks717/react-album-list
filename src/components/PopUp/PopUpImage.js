import React, { useState } from 'react'
import classes from './PopUpImage.module.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const PopUpImage = ({photos}) => {
  const [slideNumber,setSlideNumber] = useState(0)
  const [openModal,setOpenModal] = useState(false)
  const [column, setColumn] = useState(classes.card)

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const nextSlide = () => {
     slideNumber + 1 === photos.length ?
     setSlideNumber(0) : 
     setSlideNumber(slideNumber + 1)
  }
  const prevSlide = () => {
      slideNumber === 0 ?
      setSlideNumber(photos.length -1) :
      setSlideNumber(slideNumber - 1)
  }
  const twoColumn = classes.card
  const threeColumn = classes.column3
  const fourColumn = classes.column4
  
  const ColumnDiv = () => (
    <div className={classes.buttons}>
    <button onClick={() => setColumn(twoColumn)}>2</button>
    <button onClick={() => setColumn(threeColumn)}>3</button>
    <button onClick={() => setColumn(fourColumn)}>4</button>
  </div>
  )

  return (
    <div className={classes.modal}>
      {!openModal && <ColumnDiv/>}
      {openModal &&  
      <div>
        <button 
            onClick={handleCloseModal}
            className={classes.btnClose}>
            Close
      </button>
        <div className={classes.fullScreen}>
          <img 
          key={photos}
          src={photos[slideNumber].url} 
          alt={photos.title}
          />
        </div>
        <br/>
        slide number : {slideNumber}
        <br/>
        total slides : {photos.length}
        <div className={classes.sliderWrap}>
        <AiOutlineArrowLeft
                onClick={prevSlide}
                 className={classes.btnPrev}/>
                <AiOutlineArrowRight 
                onClick={nextSlide}
                className={classes.btnNext}/> 
        </div>
        </div>}
          <div className={column}>
         {handleOpenModal &&
                  photos && 
                  photos.map((slide,index) => {
                    return (
                      <>

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
                      </>
                    )
                  })} 

    </div>

    </div>

  )
}

export default PopUpImage 