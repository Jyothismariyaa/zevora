import styles from './Vision.module.css'
import { useInView } from '../hooks/useInView'

export default function Vision() {
  const { ref, inView } = useInView()

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.label}>07 — Vision</div>

        <div className={styles.content}>

          <div className={styles.textBlock}>
            <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
              We're building an<br />ecosystem of products.
            </h2>

            <div className={styles.body}>
              <p className={styles.para}>
                Today's software is often bloated, slow, and unnecessarily complicated.
              </p>
              <p className={styles.lead}>We're changing that.</p>
              <p className={styles.para}>
                Zevora exists to build focused products that solve real problems with speed,
                simplicity, and exceptional design. Every new product strengthens our ecosystem
                while remaining powerful enough to stand on its own.
              </p>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.orbit}>
              <div className={styles.orbitCenter}>Z</div>

              <div className={styles.ring1}>
                <div className={styles.dot1}><span>DropnShop</span></div>
                <div className={styles.dot2}><span>Knowmee</span></div>
              </div>

              <div className={styles.ring2}>
                <div className={styles.dot3}><span>Future</span></div>
                <div className={styles.dot4}><span>Future</span></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
