import React from 'react'
import classes from './PaginatePost.module.css'

const PaginatePost = ({photos, loading}) => {
    if(loading) return <h2>Loading....</h2>


  return (
    <div className={classes.photoContainer}>
      {photos.map((photo) => (
          <ul key={photo.id} >
            <li className={classes.photoBox}>
              <p>{photo.title}</p>
              <img src={photo.thumbnailUrl} alt={photo.title}/>
            </li>
          </ul>
      ))}
    </div>
  )
}

export default PaginatePost
