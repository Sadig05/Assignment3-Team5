import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import styles from './SharedLayout.module.css'
const SharedLayout = () => {
  return (
    <>
        <NavBar/>
        <div className={styles["bcg-main"]}>
           <section className={styles["outlet"]}>
            <Outlet/>
        </section> 
        </div>
        
    </>
  )
}

export default SharedLayout