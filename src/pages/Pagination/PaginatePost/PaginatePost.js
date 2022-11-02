import React, {useState} from 'react'
import classes from './PaginatePost.module.css'
import PopUpImage from '../../components/PopUp/PopUpImage'

const PaginatePost = ({photos, loading}) => {
  // const [column, setColumn] = useState(classes.card)
  // const twoColumn = classes.card
  // const threeColumn = classes.column3
  // const fourColumn = classes.column4
  // const ColumnDiv = () => (

  //   <div className={classes.buttons}>
  //   <button onClick={setColumn(twoColumn)}>2</button>
  //   <button onClick={setColumn(threeColumn)}>3</button>
  //   <button onClick={setColumn(fourColumn)}>4</button>
  // </div>
  // )
  if(loading) return <h2>Loading....</h2>

  return (
    <div className={classes.photoContainer}>   
     {/* <ColumnDiv/> */}
     <PopUpImage photos={photos}/>
    
    <div> 
    </div>
    </div>
  ) 
}
export default PaginatePost
