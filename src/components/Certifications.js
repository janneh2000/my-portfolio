import React from 'react';

const certs = [
  { icon: '🏆', issuer: 'Google Cloud',           name: 'Professional Cloud Architect' },
  { icon: '☁️', issuer: 'The Cloud Bootcamp',      name: 'AWS Cloud Practitioner' },
  { icon: '🔷', issuer: 'The Cloud Bootcamp',      name: 'Microsoft Azure Fundamentals' },
  { icon: '🌐', issuer: 'The Cloud Bootcamp',      name: 'Oracle Cloud Infrastructure (OCI)' },
  { icon: '📡', issuer: 'Cisco Networking Academy', name: 'Network Fundamentals & Infrastructure' },
  { icon: '🎯', issuer: 'In Progress',              name: 'CKA — Certified Kubernetes Administrator', wip: true },
];

export default function Certifications() {
  return (
    <section id="certs" style={{ padding: '100px 60px', background: 'var(--bg2)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        {'// '}</span> Certifications
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 60 }}>
        Credentials <br />that back it up.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {certs.map((cert, i) => (
          <CertCard key={i} {...cert} />
        ))}
      </div>
    </section>
  );
}

function CertCard({ icon, issuer, name, wip }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 24, background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(0,229,160,0.2)' : 'var(--border)'}`,
        borderStyle: wip ? 'dashed' : 'solid',
        borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 12,
        transition: 'all 0.3s', opacity: wip ? 0.65 : 1,
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}>
      <div style={{ fontSize: 32 }}>{icon}</div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--mint)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{issuer}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>{name}</div>
    </div>
  );
}
