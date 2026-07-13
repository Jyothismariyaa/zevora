import styles from './WhyZevora.module.css'
import { useInView } from '../hooks/useInView'

const reasons = [
  {
    title: 'Product First',
    desc: 'We think like builders, not vendors.',
    num: '01',
  },
  {
    title: 'Design Matters',
    desc: 'Every interaction should feel intentional.',
    num: '02',
  },
  {
    title: 'AI Native',
    desc: "Artificial intelligence isn't an add-on—it's part of how we build.",
    num: '03',
  },
  {
    title: 'Built for Scale',
    desc: 'Products should grow without being rebuilt.',
    num: '04',
  },
  {
    title: 'Long-Term Thinking',
    desc: "We're creating products that will still matter years from now.",
    num: '05',
  },
]

export default function WhyZevora() {
  const { ref, inView } = useInView()

  return (
    <section className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.top}>
          <div className={styles.label}>05 — Why Zevora</div>
          <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
            Five reasons<br />we're different.
          </h2>
        </div>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div
              key={r.num}
              className={styles.card}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={styles.cardNum}>{r.num}</span>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
