import React from 'react'
import { useState } from 'react'

const ClickLogic = ({pageNumbers, handleClick, currentPage}) => {
  const [limitPageNumber, setLimitPageNumber] = useState(5)
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setminPageNumberLimit] = useState(5)
  
  const renderPageNumbers = pageNumbers.map((number) => {
    if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
      return (
        <li key={number}
        id={number}
        onClick={handleClick}
        className={currentPage === number ? "active" : null}>
              {number}
        </li>
      )
    }
  })
  return (
    <div>
        {renderPageNumbers}
    </div>
  )
}

export default ClickLogic
