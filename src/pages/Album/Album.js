import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../components/useFetch'
import classes from './Album.module.css'
const Album = () => {
    const [query,setQuery] = useState('')
    const { data, loading, error } =
    useFetch('https://jsonplaceholder.typicode.com/albums ')
        //destructuring iako ne moram da koristim sve od
        //podataka vec samo ono sto mi je potrebno 
        if(loading) return <h2>Please wait, data is loading...</h2>
        if(error) console.log((error))

    return(
        <div className={classes.albumContainer}>
            <input
            className={classes.albumFetch}
            type='text' 
            placeholder='Search...'
            onChange={e =>setQuery(e.target.value)}/>

            {data
            .filter(item => 
                item.title.toLowerCase().includes(query))

            .map((post) => (
                <div 
                className={classes.albumWrapper}
                 key={post.id}>
                <h3>{post.title}</h3>
                
                <Link to={`/albums/${post.id}`}
                 className={classes.span}>
                    Click for more information
                </Link>
                </div>
            ))}
        </div>
    )
}

export default Album
