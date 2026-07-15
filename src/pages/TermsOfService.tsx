import { useEffect } from 'react'
import styles from './Legal.module.css'

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms of Service — Zevora'
  }, [])

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.header}>
          <span className={styles.label}>Legal</span>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.meta}>Last Updated: July 15, 2026</p>
        </div>

        <div className={styles.body}>

          <p className={styles.lead}>
            By accessing or using the Zevora website, products, or services, you agree to be bound
            by these Terms of Service. If you do not agree with these Terms, please discontinue
            use of our services.
          </p>

          <Section title="About Zevora">
            <p>
              Zevora Labs Pvt. Ltd. develops, operates, and maintains software products, web
              applications, mobile applications, APIs, AI-powered services, and related technologies.
              Our website may provide information about our products, services, research, and future
              offerings.
            </p>
          </Section>

          <Section title="Use of Services">
            <p>You agree to use our services only for lawful purposes. You may not:</p>
            <ul>
              <li>Violate applicable laws or regulations</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Disrupt or interfere with service availability</li>
              <li>Reverse engineer or exploit our software where prohibited</li>
              <li>Upload malicious software or harmful content</li>
              <li>Misuse automated systems to abuse our services</li>
            </ul>
          </Section>

          <Section title="Accounts">
            <p>Some products may require an account. You are responsible for:</p>
            <ul>
              <li>Maintaining account security</li>
              <li>Keeping login credentials confidential</li>
              <li>All activities occurring under your account</li>
            </ul>
          </Section>

          <Section title="Intellectual Property">
            <p>
              Unless otherwise stated, all content on this website—including text, graphics, logos,
              software, designs, trademarks, and source code—is owned by Zevora Labs Pvt. Ltd. or
              its licensors. You may not copy, reproduce, distribute, or modify our content without
              prior written permission.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>
              Our products may integrate with or rely on third-party platforms and services. Your
              use of those services is governed by their respective terms and privacy policies.
            </p>
          </Section>

          <Section title="Product Availability">
            <p>We continuously improve our products. We may:</p>
            <ul>
              <li>Add or remove features</li>
              <li>Modify pricing</li>
              <li>Suspend or discontinue services</li>
              <li>Release beta features</li>
              <li>Introduce new products</li>
            </ul>
            <p>without prior notice where permitted by law.</p>
          </Section>

          <Section title="Disclaimer">
            <p>
              Our website and services are provided on an "as is" and "as available" basis. While
              we strive to provide reliable services, we do not guarantee uninterrupted operation
              or error-free functionality.
            </p>
          </Section>

          <Section title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Zevora Labs Pvt. Ltd. shall not be liable
              for indirect, incidental, consequential, or special damages arising from the use or
              inability to use our products or services.
            </p>
          </Section>

          <Section title="Termination">
            <p>
              We reserve the right to suspend or terminate access to our services where necessary
              to protect our platform, users, or comply with legal obligations.
            </p>
          </Section>

          <Section title="Governing Law">
            <p>
              These Terms shall be governed by the laws of India. Any disputes shall be subject to
              the exclusive jurisdiction of the competent courts in Kerala, India.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Zevora Labs Pvt. Ltd.<br />
              Email: <a href="mailto:hello@zevora.io" className={styles.link}>hello@zevora.io</a><br />
              Website: <a href="https://zevora.io" className={styles.link}>https://zevora.io</a>
            </p>
          </Section>

        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  )
}
