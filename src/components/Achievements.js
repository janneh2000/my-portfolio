import React from 'react';

const items = [
  {
    year: '2025 — Present',
    tag: 'Startup',
    title: 'Founded ARGUS',
    desc: 'Launched ARGUS — a security and intelligence platform for Web3 spanning the Ethereum and Solana ecosystems. Shipping four products in parallel and driving real traction across the ecosystem.',
    accent: '◆',
  },
  {
    year: '2025',
    tag: 'Product · Ethereum',
    title: 'Protocol Guardian — Live',
    desc: 'Shipped the ARGUS Ethereum defense layer: real-time exploit detection on EVM smart contracts, economic-anomaly alerting, and protocol-side response automation.',
    accent: '🛡',
  },
  {
    year: '2025',
    tag: 'Product · Solana',
    title: 'SolGuard — Live',
    desc: 'Solana-native security toolkit shipped under ARGUS: contract scanning, validator hygiene, and runtime guardrails for the Solana stack.',
    accent: '🛡',
  },
  {
    year: '2025',
    tag: 'Product',
    title: 'Mosaic — Live',
    desc: 'On-chain intelligence aggregator — the data backbone behind ARGUS, composing signals across Ethereum, Solana, and oracle networks into a queryable surface.',
    accent: '🧩',
  },
  {
    year: '2025',
    tag: 'Product',
    title: 'AI Venture Studio — Live',
    desc: 'Internal AI-augmented venture studio that lets ARGUS prototype, validate, and ship new product bets at a velocity normally reserved for much larger teams.',
    accent: '🤖',
  },
  {
    year: '2026',
    tag: 'Open Source',
    title: 'Solana Vault Standard — 3 PRs Merged',
    desc: 'Contributed SVS-7, SVS-10, and SVS-11 to solanabr/solana-vault-standard, hardening SPL token pinning and native mint validation — work that fed into SolGuard.',
    accent: '🦀',
  },
  {
    year: '2024',
    tag: 'Certification',
    title: 'Google Cloud Professional Cloud Architect',
    desc: 'Earned the GCP PCA — the deepest architect-level cert in the Google Cloud track, validating multi-project design, IAM, networking, and reliability.',
    accent: '🏆',
  },
  {
    year: '2024',
    tag: 'Career',
    title: 'Cloud Engineer @ Banco BV',
    desc: 'Closed a multi-year run engineering GCP automation, BigQuery pipelines, and Composer-orchestrated workflows for one of Brazil\'s largest banks.',
    accent: '🏦',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: '100px 60px', background: 'var(--bg)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
         {'// '} Achievements & Milestones
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 60 }}>
        Builds, wins, <br />and milestones.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
        {items.map((it, i) => (
          <AchievementCard key={i} {...it} />
        ))}
      </div>
    </section>
  );
}

function AchievementCard({ year, tag, title, desc, accent }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="achievement-card"
      style={{
        padding: 24, background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(0,229,160,0.25)' : 'var(--border)'}`,
        borderRadius: 10, transition: 'all 0.3s',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 16px 32px rgba(0,0,0,0.35)' : 'none',
        display: 'flex', flexDirection: 'column', gap: 10,
      }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22 }}>{accent}</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--mint)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{tag}</span>
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>{year}</span>
      </div>
      <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 18, color: 'var(--text)' }}>{title}</h3>
      <p style={{ fontSize: 14, color: 'var(--muted2)', lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}
