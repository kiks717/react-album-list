import React, { useState } from 'react'
import classes from './Pagination.module.css'
import useFetch from '../../components/useFetch';
import { useParams } from 'react-router-dom';
const Pagination = ({photosPerPage, totalPhotos,paginate,handleClick, currentPhoto}) => {
    
  const pageNumbers = [];
  const params = useParams()
  const [limitPageNumber, setLimitPageNumber] = useState(5)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(5)
  



    for(let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++){
        pageNumbers.push(i)
    }

    //getting the correct amount of page numbers
    //getting id 
    const {data} = 
    useFetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    

    const renderPageNumbers = pageNumbers.map((number) => (
      <li 
      // className={classes.pagiList} 
      className={currentPhoto === number ? 'active' : null}
      key={number} 
      id={number}
      onClick={handleClick}
      >
            {number}

        {/* <a 
        href={data.id}
        onClick={() => paginate(pageNumbers)}
        onClick={handleClick}
        > 
      </a> */}

    
  </li>
    ))
  return (
    <div className={classes.paginationContainer}>
      {renderPageNumbers}
    </div>
  )
}

export default Pagination
 