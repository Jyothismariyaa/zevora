import { useEffect } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact — Zevora'
  }, [])

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h1 className={styles.title}>
            Let's build something<br />
            <em className={styles.italic}>exceptional.</em>
          </h1>
          <p className={styles.subtitle}>
            Whether you're a founder, a business, or just curious—we'd love to hear from you.
          </p>
        </div>

        <div className={styles.grid}>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 5.5A1.5 1.5 0 014 4h12a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0116 16H4a1.5 1.5 0 01-1.5-1.5v-9z" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M2.5 6l7.5 5 7.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.cardLabel}>General Inquiries</div>
            <a href="mailto:hello@zevora.io" className={styles.cardValue}>hello@zevora.io</a>
            <p className={styles.cardNote}>We respond within 48 hours.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.cardLabel}>Products</div>
            <a href="mailto:hello@dropn.shop" className={styles.cardValue}>hello@dropn.shop</a>
            <p className={styles.cardNote}>DropnShop & product-specific questions.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.4"/>
                <circle cx="10" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </div>
            <div className={styles.cardLabel}>Company</div>
            <span className={styles.cardValue}>Kerala, India</span>
            <p className={styles.cardNote}>Zevora Labs Pvt. Ltd.</p>
          </div>

        </div>

        <div className={styles.social}>
          <p className={styles.socialLabel}>Follow us</p>
          <div className={styles.socialLinks}>
            <a
              href="https://linkedin.com/company/zevorahq"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://x.com/zevorahq"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              X (Twitter)
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
