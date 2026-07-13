import styles from './WorkWithUs.module.css'
import { useInView } from '../hooks/useInView'

export default function WorkWithUs() {
  const { ref, inView } = useInView()

  return (
    <section id="work-with-us" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.label}>06 — Work With Us</div>

        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
              We occasionally<br />partner with<br /><em className={styles.italic}>companies.</em>
            </h2>
          </div>

          <div className={styles.right}>
            <p className={styles.desc}>
              While our primary focus is building our own products, we collaborate with a limited number of
              startups and businesses that need world-class product engineering, AI solutions, or custom software.
            </p>
            <p className={styles.desc}>
              If we believe we can create something exceptional together, we'd love to hear from you.
            </p>

            <div className={styles.contactCard}>
              <div className={styles.contactLabel}>Start a conversation</div>
              <a href="mailto:hello@dropn.shop" className={styles.emailLink}>
                hello@dropn.shop
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <p className={styles.hint}>We respond within 48 hours. No spam, ever.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
