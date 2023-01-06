import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Movie.module.css';

const Movie = () => {
  const { id } = useParams();
  
  const [data, setData] = useState({});
  const getData = async () => {
    const { data: movies } = await axios.get(`http://localhost:3004/movies`);
    const movie = movies.find(item => item.id === parseInt(id));

    // Getting poster URL from public API
    const poster = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0a1c8756239bce4542080405c0a77a97&query=${movie.Series_Title}`);
    movie.Poster_Link = poster.data.results[0].poster_path;
    setData(movie);
  };


  useEffect(() => {
    getData();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.poster}>
        <img src={`https://image.tmdb.org/t/p/original/${data.Poster_Link}`} alt={data.Series_Title} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{data.Series_Title}</h2>
        <div className={styles.released}>
          <span className={styles.label}>Released:</span> {data.Released_Year}
        </div>
        <div className={styles.certificate}>
          <span className={styles.label}>Certificate:</span> {data.Certificate}
        </div>
        <div className={styles.duration}>
          <span className={styles.label}>Duration:</span> {data.Runtime}
        </div>
        <div className={styles.genre}>
          <span className={styles.label}>Genre:</span> {data.Genre}
        </div>
        <div className={styles.rating}>
          <span className={styles.label}>IMDB Rating:</span> {data.IMDB_Rating}
        </div>
        <div className={styles.overview}>
          <span className={styles.label}>Overview: </span>
        {data.Overview}
        </div>
        <div className={styles.meta}>
          <span className={styles.label}>Meta Score:</span> {data.Meta_score}
        </div>
        <div className={styles.director}>
          <span className={styles.label}>Director:</span> {data.Director}
        </div>
        <div className={styles.cast}>
          <span className={styles.label}>Starring:</span> {data.Star1}, {data.Star2}, {data.Star3}, {data.Star4}
        </div>
        <div className={styles.votes}>
          <span className={styles.label}>Votes:</span> {data.No_of_Votes}
        </div>
        <div className={styles.gross}>
          <span className={styles.label}>Gross:</span> {data.Gross}
        </div>
        <Link to="/movies" className={styles.back}>Back to Movies List</Link>
      </div>
    </section>
  );
};

export default Movie;

