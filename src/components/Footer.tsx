import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>Zevora</Link>
            <p className={styles.tagline}>Building products that build people.</p>
            <div className={styles.socials}>
              <a
                href="https://linkedin.com/company/zevorahq"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/zevorahq"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="X / Twitter"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <nav className={styles.nav}>
            <div className={styles.navCol}>
              <span className={styles.navLabel}>Products</span>
              <a href="#products">DropnShop</a>
              <a href="#products">Knowmee</a>
            </div>
            <div className={styles.navCol}>
              <span className={styles.navLabel}>Company</span>
              <a href="#about">About</a>
              <a href="#build">What We Build</a>
              <Link to="/contact">Contact</Link>
            </div>
            <div className={styles.navCol}>
              <span className={styles.navLabel}>Legal</span>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </nav>
        </div>

        <div className={styles.bigWord} aria-hidden="true">Zevora</div>

        <div className={styles.bottom}>
          <span>© {year} Zevora Labs Pvt. Ltd. All rights reserved.</span>
          <div className={styles.bottomLinks}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
