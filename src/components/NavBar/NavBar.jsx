import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles["navbar"]} >
        <NavLink to='/' className={({isActive}) => isActive ? styles.active  : styles.link} >Home</NavLink>
        <NavLink to='/movies' className={({isActive}) => isActive ? styles.active  : styles.link} >Movies</NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? styles.active  : styles.link} >Contact</NavLink>
    </nav>
  )
}

export default NavBar