import React from 'react';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 60px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 700, textAlign: 'center', margin: '0 auto' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, justifyContent: 'center', display: 'flex', alignItems: 'center', gap: 10 }}>
          Contact
        </div>
        <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 24 }}>
          Let's build <br />something real.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--muted2)', lineHeight: 1.75, marginBottom: 48 }}>
          I'm actively looking for DevOps and Cloud Engineer roles — remote or on-site in
          the US, UK, Portugal, or Malta. If you're building something ambitious, let's talk.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
          {[
            { href: 'https://www.linkedin.com/in/alie-janneh/', label: 'LinkedIn',  icon: 'in' },
            { href: 'https://github.com/janneh2000',            label: 'GitHub',    icon: '⌥' },
            { href: 'https://x.com/cjanneh2000',               label: 'Twitter/X', icon: '𝕏' },
          ].map(link => (
            <ContactLink key={link.label} {...link} />
          ))}
        </div>

        <div style={{ fontFamily: 'var(--mono)', fontSize: 18, color: 'var(--text)', letterSpacing: '0.04em' }}>
          cjanneh@gmail.com
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, label, icon }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '12px 22px',
        border: `1px solid ${hovered ? 'var(--mint)' : 'var(--border)'}`,
        borderRadius: 6,
        fontFamily: 'var(--mono)', fontSize: 12,
        color: hovered ? 'var(--mint)' : 'var(--muted2)',
        textDecoration: 'none', transition: 'all 0.2s',
        letterSpacing: '0.06em',
        background: hovered ? 'var(--mint-glow2)' : 'transparent',
      }}>
      <span>{icon}</span> {label}
    </a>
  );
}
