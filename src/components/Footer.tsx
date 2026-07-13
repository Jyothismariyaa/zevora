import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>Zevora</span>
            <p className={styles.tagline}>Building products that build people.</p>
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
              <a href="#work-with-us">Collaborate</a>
            </div>
            <div className={styles.navCol}>
              <span className={styles.navLabel}>Connect</span>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </nav>
        </div>

        <div className={styles.bigWord} aria-hidden="true">Zevora</div>

        <div className={styles.bottom}>
          <span>© {year} Zevora. All rights reserved.</span>
          <span className={styles.built}>Built with purpose.</span>
        </div>

      </div>
    </footer>
  )
}
