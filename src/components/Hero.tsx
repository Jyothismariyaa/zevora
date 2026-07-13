import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(28px)'
    const timer = setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        <h1 ref={headingRef} className={styles.heading}>
          We build software{' '}
          <em className={styles.italic}>people love</em>{' '}
          to use.
        </h1>

        <p className={styles.desc}>
          Zevora is a product company creating thoughtful software for modern businesses and individuals.
          We build our own products, invest in new ideas, and occasionally partner with ambitious teams
          to create exceptional digital experiences.
        </p>

        <div className={styles.actions}>
          <a href="#products" className={styles.primary}>
            Explore Products
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#work-with-us" className={styles.secondary}>
            Work With Us
          </a>
        </div>

        <div className={styles.marqueeWrap} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {Array(3).fill(['DropnShop', 'Knowmee', 'AI Products', 'SaaS Platforms', 'Mobile Apps', 'Web Applications']).flat().map((item, i) => (
              <span key={i} className={styles.marqueeItem}>
                {item} <span className={styles.marqueeDot}>·</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
