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
      className={styles.image}
      />
      <Image
      src="/images/profile.png"
      alt="My Image"
      width={500}
      height={500}
      className={styles.profile}
      />
      <div className={styles.backgroundgradiant}></div>
      <span className={styles.head}>
        <h1 >Gian <br /> Bakker</h1>
        <h2>Full-Stack Developer, Network Engineer</h2>
        <Button/>
      </span>

      
      


    </section>
  )
}

export default Hero