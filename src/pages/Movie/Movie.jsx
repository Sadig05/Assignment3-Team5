import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movie = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    const getData = async () => {
        const { data } = await axios.get(`http://localhost:3004/movies`);
        const movie = data.find((item) => item.id == id);
        setData(movie);
      };
  
    useEffect(() => {
        getData() 
    },[])
    
  return (
    <section>
        <h2>{data.id}</h2>
        <h3>{data.Series_Title}</h3>
        <Link to='/movies'>Go to Movies List</Link>
    </section>
  )
}

export default Movie