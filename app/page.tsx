import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Hero from './hero/hero'
import About from './about/about'
import Projects from './projects/projects'
import Contact from './contact/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  )
}
