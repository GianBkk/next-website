import React from 'react'
import styles from './hero.module.css'

const Button = () => {
  return (
    <a href='#contactsection' className={styles.buttonLink}>
        <div className={styles.buttonContainer}>
            Contact Me
        </div>
    </a>
  )
}

export default Button