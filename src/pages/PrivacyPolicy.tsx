import { useEffect } from 'react'
import styles from './Legal.module.css'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy — Zevora'
  }, [])

  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>

        <div className={styles.header}>
          <span className={styles.label}>Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>Last Updated: July 15, 2026</p>
        </div>

        <div className={styles.body}>

          <p className={styles.lead}>
            Zevora Labs Pvt. Ltd. ("Zevora", "we", "our", or "us") respects your privacy and is
            committed to protecting the information you share with us. This Privacy Policy explains
            how we collect, use, disclose, and safeguard information when you visit our website,
            use our products, or interact with our services.
          </p>

          <Section title="Who We Are">
            <p>
              Zevora Labs Pvt. Ltd. is a technology company that designs, develops, and operates
              software products for businesses and individuals. Our portfolio includes products
              such as DropnShop, Knowmee, and future applications developed under the Zevora brand.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>We may collect the following information:</p>

            <h4 className={styles.subheading}>Information you provide</h4>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company information</li>
              <li>Messages submitted through contact forms</li>
              <li>Account information for our products</li>
            </ul>

            <h4 className={styles.subheading}>Automatically collected information</h4>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Usage statistics</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </Section>

          <Section title="How We Use Information">
            <p>We use information to:</p>
            <ul>
              <li>Operate and improve our products</li>
              <li>Provide customer support</li>
              <li>Respond to inquiries</li>
              <li>Manage user accounts</li>
              <li>Maintain platform security</li>
              <li>Detect fraud or abuse</li>
              <li>Analyze product performance</li>
              <li>Develop new products and features</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </Section>

          <Section title="Third-Party Services">
            <p>
              To operate our products, we may work with trusted third-party providers for services such as:
            </p>
            <ul>
              <li>Cloud infrastructure</li>
              <li>Authentication</li>
              <li>Analytics</li>
              <li>Payment processing</li>
              <li>AI services</li>
              <li>Customer communication</li>
              <li>Security and fraud prevention</li>
            </ul>
            <p>These providers process information only as necessary to perform their services.</p>
          </Section>

          <Section title="Cookies">
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Maintain secure sessions</li>
              <li>Remember preferences</li>
              <li>Improve performance</li>
              <li>Understand website usage</li>
            </ul>
            <p>
              You may disable cookies through your browser settings, although some functionality
              may be limited.
            </p>
          </Section>

          <Section title="Data Security">
            <p>
              We implement reasonable administrative, technical, and organizational safeguards to
              protect your information against unauthorized access, disclosure, alteration, or
              destruction. No method of electronic transmission or storage is completely secure,
              and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain information only for as long as necessary to provide our services, comply
              with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>Depending on your location, you may have rights to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p>Requests may be submitted to the contact information below.</p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              Our services are not directed toward children under the age required by applicable
              law, and we do not knowingly collect personal information from children.
            </p>
          </Section>

          <Section title="Changes">
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this
              page with the revised effective date.
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
