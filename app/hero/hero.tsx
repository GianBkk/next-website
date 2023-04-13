import React from 'react'
import styles from './hero.module.css'
import Image from 'next/image'
import Button from './button'

const Hero = () => {
  return (
    <section id='herosection' className={styles.main}>
      
        <div className={styles.imageOverlay}></div>
        <Image
        src="/images/leaf.jpg"
        alt="My Image"
        width={500}
        height={500}
        className={styles.backgroundImage}
        />

      <div className={styles.content}>
        <Image
        src="/images/profile.png"
        alt="My Image"
        width={500}
        height={500}
        className={styles.profile}
        />
        <span className={styles.textBlock}>
          <h1>Gian <br/> Bakker</h1>
          <h3>Full-Stack Developer, Network Engineer</h3>
          <Button/>
        </span>
      </div>
      
      
      

      
      


    </section>
  )
}

export default Hero