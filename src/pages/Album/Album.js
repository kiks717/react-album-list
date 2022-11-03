import React, { useState } from 'react'
import classes from './Album.module.css'
import SearchBar from '../../components/Search/SearchBar'
const Album = ({loading}) => {
    if(loading) return <h2>Please wait, loading data</h2>


    return(
        <div className={classes.albumContainer}>
            <SearchBar/>

        </div>
    )
}

export default Album
