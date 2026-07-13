import styles from './Products.module.css'
import { useInView } from '../hooks/useInView'

const products = [
  {
    index: '01',
    name: 'DropnShop',
    tagline: 'Launch an online store from your Instagram profile in minutes.',
    desc: 'Built for creators, small businesses, and social sellers, DropnShop makes selling online simple without the complexity of traditional ecommerce platforms.',
    tags: ['Commerce', 'Social', 'Mobile'],
    status: 'Coming Soon',
  },
  {
    index: '02',
    name: 'Knowmee',
    tagline: 'Your AI-powered career companion.',
    desc: 'Create professional resumes, portfolios, and career profiles while discovering opportunities tailored to your skills—all in one place.',
    tags: ['AI', 'Career', 'Productivity'],
    status: 'Coming Soon',
  },
]

export default function Products() {
  const { ref, inView } = useInView()

  return (
    <section id="products" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.header}>
          <div className={styles.label}>02 — Products</div>
          <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
            Building the next<br />generation of software.
          </h2>
        </div>

        <div className={styles.grid}>
          {products.map((p) => (
            <article key={p.index} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardIndex}>{p.index}</span>
                <span className={styles.status}>{p.status}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.productName}>{p.name}</h3>
                <p className={styles.productTagline}>{p.tagline}</p>
                <p className={styles.productDesc}>{p.desc}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <div className={styles.arrow}>→</div>
              </div>
            </article>
          ))}

          <article className={styles.cardMore}>
            <div className={styles.moreInner}>
              <div className={styles.moreIcon}>+</div>
              <h3 className={styles.moreTitle}>More products<br />are on the way.</h3>
              <p className={styles.moreDesc}>
                Zevora is continuously building new software across AI, productivity,
                commerce, and developer tools.
              </p>
            </div>
          </article>
        </div>

      </div>
    </section>
  )
}
