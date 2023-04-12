"use client"

import React, {MouseEvent} from 'react'
import NavItem from './navItem'
import styles from './nav.module.css'
import { useEffect, useState } from 'react'

const sections = [
    {
        'name': 'Home',
        'href': '#herosection'
    },{
        'name': 'About',
        'href': '#aboutsection'
    },{
        'name': 'Projects',
        'href': '#projectssection'
    },{
        'name': 'Contact',
        'href': '#contactsection'
    }
]



const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((item) => {
      const section = document.querySelector(item.href)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[])

  const openNavbar = () => {
    setIsOpen(!isOpen);
  }




  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : styles.closed}`}>
        <svg onClick={openNavbar} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
        {sections.map((item) => (
          <NavItem name ={item.name} href ={item.href} activeSection={activeSection} />  
        ))}
    </nav>
  )
}

export default Navbar