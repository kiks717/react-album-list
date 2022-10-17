import React from 'react'
import useFetch from '../useFetch'
import classes from './Header.module.css'
const Header = () => {
    const {refetch} = useFetch()
  return (
    <div className={classes.headerDiv}>
        <h2 className={classes.header}>Explore trending photo palettes</h2>
        <button 
            onClick={refetch}
            className={classes.headerButton}>Refresh</button>

    </div>
  )
}

export default Header
