import styles from './About.module.css'
import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.label}>
          <span>01 — About</span>
        </div>

        <div className={styles.content}>
          <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
            A company built around<br />
            products, not projects.
          </h2>

          <div className={styles.body}>
            <p className={styles.lead}>
              Most software companies build products for clients.<br />
              <strong>We build products for the world.</strong>
            </p>
            <p className={styles.para}>
              Every product we create starts with a real problem, is shaped through relentless iteration,
              and is designed to feel effortless to use. Alongside our own portfolio, we collaborate with
              a small number of founders and businesses where we believe we can create lasting impact.
            </p>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>2+</span>
            <span className={styles.statLabel}>Products in Development</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>∞</span>
            <span className={styles.statLabel}>Problems to Solve</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>1</span>
            <span className={styles.statLabel}>Mission</span>
          </div>
        </div>

      </div>
    </section>
  )
}
