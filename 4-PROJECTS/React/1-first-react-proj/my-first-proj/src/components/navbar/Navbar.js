import React from 'react'
import styles from "./Navbar.module.css"
export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarli}>
                <a>About Us</a>
                <a>For You</a>
                <a>Services</a>
                <a>Blog</a>
                <a>Vlog</a>
                <a>Contact</a>
            </div>
        </div>
    )
}