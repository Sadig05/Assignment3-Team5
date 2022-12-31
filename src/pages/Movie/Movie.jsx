import React, { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Movie.module.css';

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
    <section className={styles.container}>
      <div className={styles.poster}>
        <img src={data.Poster_Link} alt={data.Series_Title} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{data.Series_Title}</h2>
        <div className={styles.released}>
          <span>Released:</span> {data.Released_Year}
        </div>
        <div className={styles.certificate}>
          <span>Certificate:</span> {data.Certificate}
        </div>
        <div className={styles.duration}>
          <span>Duration:</span> {data.Runtime}
        </div>
        <div className={styles.genre}>
          <span>Genre:</span> {data.Genre}
        </div>
        <div className={styles.rating}>
          <span>IMDB Rating:</span> {data.IMDB_Rating}
        </div>
        <p className={styles.overview}>{data.Overview}</p>
        <div className={styles.meta}>
          <span>Meta Score:</span> {data.Meta_score}
        </div>
        <div className={styles.director}>
          <span>Director:</span> {data.Director}
        </div>
        <div className={styles.cast}>
          <span>Starring:</span> {data.Star1}, {data.Star2}, {data.Star3}, {data.Star4}
        </div>
        <div className={styles.votes}>
          <span>Votes:</span> {data.No_of_Votes}
        </div>
        <div className={styles.gross}>
          <span>Gross:</span> {data.Gross}
        </div>
        <Link to="/movies" className={styles.back}>Back to Movies List</Link>
      </div>
    </section>
  )
}

export default Movie