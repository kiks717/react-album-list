import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PaginatePost from './PaginatePost'
import Pagination from './Pagination'

const Paginate = () => {
    const [photos,setPhotos] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPhoto, setCurrentPhoto] = useState(1)
    const [photosPerPage] = useState(6)

    //change page
    const paginate = (pageNumber) => setCurrentPhoto(pageNumber)
    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true)
            const res = await axios.get('https://jsonplaceholder.typicode.com/photos/')
            setPhotos(res.data)
            setLoading(false)
        }  
        fetchPhotos()
    },[])

    const handleClick = (event) => {
      setCurrentPhoto(Number(event.target.id))
    }
    //get current photo
    const indexOfLastPhoto = currentPhoto * photosPerPage
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage
    const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto)



    return (
    <div>
      <PaginatePost photos={currentPhotos} loading={loading}/>
      <Pagination 
      photosPerPage={photosPerPage} 
      totalPhotos={photos.length}
      paginate={paginate}
      handleClick={handleClick}

      />
    </div>
  )
}

export default Paginate
