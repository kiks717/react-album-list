import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import Paginate from '../../pages/Pagination/Paginate'
const AlbumPost = () => {
    const params = useParams()
    const {data,loading} = 
    useFetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`)

    if(loading) return <h2>Please wait, loading photos...</h2>
    return (
    <div key={data.id}>
      <Paginate/>
    </div>
  )
}
export default AlbumPost
