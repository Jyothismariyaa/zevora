import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  const homeLink = (hash: string, label: string) =>
    isHome
      ? <a href={hash} onClick={() => setMenuOpen(false)}>{label}</a>
      : <Link to={`/${hash}`} onClick={() => setMenuOpen(false)}>{label}</Link>

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="Zevora" className={styles.logoImg} />
          <span className={styles.logoText}>Zevora</span>
        </Link>

        <ul className={styles.links}>
          <li>{homeLink('#products', 'Products')}</li>
          <li>{homeLink('#build', 'What We Build')}</li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <Link to="/contact" className={styles.cta}>
          Get in touch
          <span className={styles.dot} />
        </Link>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
        {homeLink('#products', 'Products')}
        {homeLink('#build', 'What We Build')}
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/contact" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Get in touch →
        </Link>
      </div>
    </nav>
  )
}
