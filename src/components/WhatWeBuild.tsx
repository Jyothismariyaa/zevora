import styles from './WhatWeBuild.module.css'
import { useInView } from '../hooks/useInView'

const items = [
  {
    n: '01',
    title: 'AI Products',
    desc: 'Intelligent applications powered by modern AI.',
  },
  {
    n: '02',
    title: 'SaaS Platforms',
    desc: 'Scalable software businesses from idea to launch.',
  },
  {
    n: '03',
    title: 'Mobile Apps',
    desc: 'Beautiful native experiences for iOS and Android.',
  },
  {
    n: '04',
    title: 'Web Applications',
    desc: 'Fast, reliable, and delightful digital products.',
  },
  {
    n: '05',
    title: 'Internal Tools',
    desc: 'Custom software that helps businesses move faster.',
  },
  {
    n: '06',
    title: 'Product Design',
    desc: 'Simple interfaces people enjoy using.',
  },
]

export default function WhatWeBuild() {
  const { ref, inView } = useInView()

  return (
    <section id="build" className={styles.section} ref={ref as React.RefObject<HTMLElement>}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.header}>
          <div className={styles.label}>03 — We build.</div>
          <h2 className={`${styles.heading} ${inView ? styles.visible : ''}`}>
            We build.
          </h2>
        </div>

        <div className={styles.list}>
          {items.map((item, i) => (
            <div
              key={item.n}
              className={styles.row}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className={styles.rowNum}>{item.n}</span>
              <h3 className={styles.rowTitle}>{item.title}</h3>
              <p className={styles.rowDesc}>{item.desc}</p>
              <span className={styles.rowArrow}>↗</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
