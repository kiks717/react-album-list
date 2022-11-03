import React, {useState} from 'react'
import classes from './PaginatePost.module.css'
import PopUpImage from '../../../components/PopUp/PopUpImage'
const PaginatePost = ({photos, loading}) => {

  if(loading) return <h2>Loading....</h2>

  return (
    <div className={classes.photoContainer}>   
     <PopUpImage photos={photos}/>
    </div>
  ) 
}
export default PaginatePost
