import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <img src="/logo.png" alt="Zevora" className={styles.logoImg} />
          <span className={styles.logoText}>Zevora</span>
        </a>

        <ul className={styles.links}>
          <li><a href="#products">Products</a></li>
          <li><a href="#build">What We Build</a></li>
          <li><a href="#work-with-us">Collaborate</a></li>
        </ul>

        <a href="#work-with-us" className={styles.cta}>
          Get in touch
          <span className={styles.dot} />
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#build" onClick={() => setMenuOpen(false)}>What We Build</a>
        <a href="#work-with-us" onClick={() => setMenuOpen(false)}>Collaborate</a>
        <a href="#work-with-us" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Get in touch →
        </a>
      </div>
    </nav>
  )
}
