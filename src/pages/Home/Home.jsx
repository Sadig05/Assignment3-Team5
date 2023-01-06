import React from "react";
import styles from "./Home.module.css";
import sImg from '../../assets/ssss.jpg'
import aImg from '../../assets/logo6.jpg'
import nImg from '../../assets/ppp.jpg'



const Home = () => {
  return (
    <main className={styles["main-container"]}>
      <h1 className={styles.header}>About Us</h1>
      <p className={styles.text} >
        Welcome to our movie list website! This site has been created by Narmin
        Afandizada, Nijat Shirinov, and Sadig Latifli as a way to showcase some
        of the projects we have worked on. Our team has a diverse range of
        skills and interests, which is reflected in the variety of projects we
        have completed so far. Some examples of our work include personal
        webpages for each team member and a weather app that allows users to
        easily check current weather conditions and forecasts for their
        location. We hope you enjoy exploring our movie list and learning more
        about what we have to offer.
      </p>
      <div className={styles.names}>
        <div className={styles["name-item"]}>
          <img src={sImg} alt="Sadig" />
        <p>
          <a className={styles.link} href="https://sadig05.github.io/">
            Sadig Latifli
          </a>
        </p>
        </div>
        <div className={styles["name-item"]}>
          <img src={aImg} alt="Narmin" />
        <p>
          <a className={styles.link} href="https://afandinarmm.github.io/">
            Narmin Afandizada
          </a>
        </p>
        </div>
        <div className={styles["name-item"]}>
        <img src={nImg} alt="Nijat" />
        <p>  
          <a className={styles.link} href="https://nijatshv.github.io/nijat/">
            Nijat Shirinov
          </a>
        </p>
        </div>
     
     
      </div>
    </main>
  );
};

export default Home;
