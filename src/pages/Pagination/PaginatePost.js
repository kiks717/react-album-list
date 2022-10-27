import React, { useState } from 'react'
import classes from './PaginatePost.module.css'
import classe from '../../components/PopUp/PopUpImage.module.css'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import PopUpImage from '../../components/PopUp/PopUpImage'


const PaginatePost = ({photos, loading}) => {
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

  if(loading) return <h2>Loading....</h2>

  return (
    <div className={classes.photoContainer}>
       {/* {openModal &&  
      <div className={classes.sliderWrap}>
                <AiOutlineArrowLeft
                onClick={prevSlide}
                 className={classes.btnPrev}/>
                <AiOutlineArrowRight 
                onClick={nextSlide}
                className={classes.btnNext}/>
                <button 
                onClick={handleCloseModal}
                className={classes.btnClose}>Close</button>
        <div className={classes.fullScreen}>
          <img 
          src={photos[slideNumber].url} 
          alt={photos.title}
          />
        </div>
        </div>} */}
        <PopUpImage photos={photos}/>
      {/* {photos.map((photo) => (
          <ul key={photo.id} >
            <li className={classes.photoBox}>
              <p>{photo.title}</p>
              <img 
               src={photo.thumbnailUrl}
               alt={photo.title}
               onClick={handleOpenModal}/>
            </li>
          </ul>
      ))} */}
 <div> 
    </div>
    </div>
  )
  
}
    {/* <div className={classes.openImage}>
      {isActive &&
      <div>
          <button onClick={handleOnClick}>X</button>
       <img src={photo.url} alt={photo.title}/>
      </div>
      }  
    </div> */}
export default PaginatePost
