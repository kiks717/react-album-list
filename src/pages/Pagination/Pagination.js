import React, { useState } from 'react'
import classes from './Pagination.module.css'
import useFetch from '../../components/useFetch';
import { useParams } from 'react-router-dom';
const Pagination = ({photosPerPage, totalPhotos,handleClick}) => {
  const [limitPageNumber, setLimitPageNumber] = useState(5)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(7)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0)
  const [currentPhoto, setCurrentPhoto] = useState(1)
  
  const pageNumbers = [];
  const params = useParams()

    for(let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++){
        pageNumbers.push(i)
    }
    //getting the correct amount of page numbers
    //getting id 
    const {data} = 
    useFetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    
    const renderPageNumbers = pageNumbers.map((number) => {
      if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
        return (
          <li
           key={number}
           id={number}
           onClick={handleClick}
           className={currentPhoto === number ? "active" : null}>
                {number}
          </li>
        )
      } else {
        return null
      }
    })
    const handlePrevious = () => {
      setCurrentPhoto(currentPhoto-1)
      if((currentPhoto+1)  %  limitPageNumber === 0 ){
        setmaxPageNumberLimit(maxPageNumberLimit - limitPageNumber)
        setminPageNumberLimit(minPageNumberLimit - limitPageNumber)
      }
      }
    const handleNext = () => {
        setCurrentPhoto(currentPhoto+1)
        if(currentPhoto+1 > maxPageNumberLimit){
          setmaxPageNumberLimit(maxPageNumberLimit + limitPageNumber)
          setminPageNumberLimit(minPageNumberLimit + limitPageNumber)
        }
      }

    // let pageIncrement = null
    // if(photos.length > maxPageNumberLimit){
    //   pageIncrement = <li onClick={handleNext}>&hellip;</li>
    // }
    // let pageDecrement = null
    // if(photos.length > maxPageNumberLimit){
    //   pageDecrement = <li onClick={handlePrevious}>&hellip;</li>
    // }

  return (
    <div className={classes.paginationContainer}>
      <ul className={classes.pageNumber}>
        <li>
          <button onClick={handlePrevious} className={classes.button}>Previous</button>
        </li>
        {/* {pageDecrement} */}
      {renderPageNumbers}
      {/* {pageIncrement} */}
        <li>
          <button onClick={handleNext} className={classes.button}>Next</button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
 