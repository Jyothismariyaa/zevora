import styles from './Philosophy.module.css'
import { useInView } from '../hooks/useInView'

export default function Philosophy() {
  const { ref, inView } = useInView()

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.label}>04 — Our Philosophy</div>

        <div className={styles.content}>
          <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
            Great software<br />should <em className={styles.italic}>disappear.</em>
          </h2>

          <div className={styles.body}>
            <blockquote className={styles.quote}>
              The best products don't get in your way.
            </blockquote>
            <p className={styles.para}>
              They're intuitive, reliable, and thoughtfully designed.
              That's what we strive to build—software that feels effortless
              while solving meaningful problems.
            </p>

            <div className={styles.pillars}>
              <div className={styles.pillar}>
                <div className={styles.pillarDot} />
                <span>Simplicity over complexity</span>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarDot} />
                <span>Speed through clarity</span>
              </div>
              <div className={styles.pillar}>
                <div className={styles.pillarDot} />
                <span>Design as function</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
