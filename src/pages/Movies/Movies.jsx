import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./Movies.module.css"
import star from "../../assets/star.svg"
import { useNavigate } from 'react-router-dom';
const Movies = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:3004/movies?_page=${page}&_limit=10`);
    setData(data);
  };

  const handlePageChange = (event) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setPage(Number(event.target.value));
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <section className={styles['movies-section']}>
    <h2 className={styles['movies-title']}>Movies List</h2>
    {data.map((movie) => (
      <div key={movie.id} className={styles['movie-card']} onClick={() => navigate(`/movies/${movie.id}`)}>
        <img src={movie.Poster_Link} alt={movie.Series_Title} className={styles['movie-poster']}/>
        <div className={styles["movie-data"]}>
        <p className={styles['movie-title']}>{movie.id}. {movie.Series_Title} ({movie.Released_Year})</p>
        <p className={styles["movie-overview"]} >{movie.Overview.length > 100 ? movie.Overview.substring(0, 100) + '...' : movie.Overview}</p>
        <p className={styles["movie-genre"]} >{movie.Genre}</p>
        <p>{movie.Runtime}</p>
        <div className={styles['movie-rating']}>
          <img src={star} alt=""/>
          <p >{movie.IMDB_Rating}</p>
        </div>
        </div>
      </div>
    ))}
    <div className={styles['pagination']}>
      { page >= 2 ? <button onClick={handlePageChange} value={page - 1} className={styles['pagination-button']}>
        Previous
      </button> : ""}
      <span className={styles['pagination-current-page']}>{page}</span>
      {page < 100 ? <button onClick={handlePageChange} value={page + 1} className={styles['pagination-button']}>
        Next
      </button> : ""}
    </div>
  </section>
  );
};

export default Movies;

