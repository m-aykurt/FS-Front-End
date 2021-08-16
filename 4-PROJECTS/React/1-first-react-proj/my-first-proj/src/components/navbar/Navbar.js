import React from 'react'
// import styles from "./Navbar.module.css"
import "./Navbar.css"
export default function Navbar() {
    return (
        // <div className={styles.navbar}>
        //     <div className={styles.navbarli}>
        //         <a>About Us</a>
        //         <a>For You</a>
        //         <a>Services</a>
        //         <a>Blog</a>
        //         <a>Vlog</a>
        //         <a>Contact</a>
        //     </div>
        // </div>
        <div className="navbar">
            <a href="about">About Us</a>
            <a href="about">For You</a>
            <a href="about">Services</a>
            <a href="about">Blog</a>
            <a href="about">Vlog</a>
            <a href="about">Blog</a>
            <a href="about">Contact</a>
        </div>
    )
}