import React, {MouseEvent} from 'react'
import styles from './nav.module.css'

interface NavProps {
  name : string,
  href : string,
  activeSection : string
}

const NavItem = ({name, href, activeSection} : NavProps) => {

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'})
    }
  }


  return (
    <a href={href} onClick={handleClick} className={`${styles.link} ${activeSection === href.slice(1) ? styles.active : ''}`}>
        <p>{name}</p>
        <span className={styles.dots}>
            <div></div>
            <div></div>
            <div></div>
        </span>     
    </a>
  )
}

export default NavItem