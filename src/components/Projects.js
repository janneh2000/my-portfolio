import React from 'react';

const Badge = ({ type, label }) => {
  const styles = {
    argus:   { color: '#00e5a0', background: 'rgba(0,229,160,0.10)', border: '1px solid rgba(0,229,160,0.30)' },
    product: { color: 'var(--sky)', background: 'rgba(56,189,248,0.08)', border: '1px solid rgba(56,189,248,0.18)' },
    live:    { color: 'var(--mint)', background: 'var(--mint-glow2)', border: '1px solid rgba(0,229,160,0.2)' },
    open:    { color: 'var(--sky)', background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.15)' },
    wip:     { color: '#f5a623', background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.15)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em',
      textTransform: 'uppercase', padding: '4px 10px', borderRadius: 3,
      marginBottom: 4, ...styles[type],
    }}>{label}</span>
  );
};

const Chip = ({ children }) => (
  <span style={{
    fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)',
    background: 'var(--surface2)', border: '1px solid var(--border)',
    padding: '3px 8px', borderRadius: 3,
  }}>{children}</span>
);

const projects = [
  {
    badge: { type: 'argus', label: '◆ ARGUS — Parent Company' },
    title: 'ARGUS',
    desc: 'Security and intelligence platform for Web3. Founded ARGUS to build the unified safety and intelligence layer for DeFi protocols, validators, and on-chain applications across both the Ethereum and Solana ecosystems. Currently shipping four products in production — Protocol Guardian (Ethereum), SolGuard (Solana), Mosaic, and an AI Venture Studio — and driving real traction across the Web3 ecosystem.',
    stack: ['Ethereum', 'Solana', 'Security', 'On-chain Intel', 'AI', 'Cloud'],
    link: 'https://github.com/janneh2000',
    featured: true,
    metrics: [
      { val: '4', label: 'Products Shipping' },
      { val: '2', label: 'Chains Covered' },
      { val: '2025 →', label: 'Building Since' },
    ],
  },
  {
    badge: { type: 'product', label: '🛡 ARGUS · Ethereum' },
    title: 'Protocol Guardian',
    desc: 'Real-time security monitoring and defense layer for the Ethereum ecosystem. Watches EVM smart contracts for exploit signatures, economic anomalies, and governance attacks — routes alerts and triggers protocol-side responses before damage spreads. Built to be the default incident layer for Ethereum DeFi teams operating on-chain.',
    stack: ['Ethereum', 'Solidity', 'EVM', 'Foundry', 'Real-time Alerting', 'Web3 Security'],
    link: 'https://github.com/janneh2000',
  },
  {
    badge: { type: 'product', label: '🛡 ARGUS · Solana' },
    title: 'SolGuard',
    desc: 'Solana-native security toolkit — smart-contract scanning, validator hygiene, and runtime protection across the Solana ecosystem. Designed as the safety primitive every Solana builder reaches for: pre-deploy audits, on-chain runtime guardrails, and continuous risk surface monitoring.',
    stack: ['Solana', 'Rust', 'Anchor', 'Validator Ops', 'SAST'],
    link: 'https://github.com/janneh2000',
  },
  {
    badge: { type: 'product', label: '🧩 ARGUS · Intelligence' },
    title: 'Mosaic',
    desc: 'On-chain intelligence aggregator. Composes signals across Ethereum, Solana, and oracle networks into a single queryable data surface for analysts, traders, and risk teams. Mosaic is the data backbone behind ARGUS\'s security and venture-studio products — and a standalone API layer for outside builders.',
    stack: ['TypeScript', 'Python', 'Ethereum', 'Solana', 'On-chain Data', 'Postgres'],
    link: 'https://github.com/janneh2000',
  },
  {
    badge: { type: 'product', label: '🤖 ARGUS · Studio' },
    title: 'AI Venture Studio',
    desc: 'AI-augmented venture studio inside ARGUS. Internal tooling that pairs LLM-driven ideation, prototyping, and GTM playbooks with my build velocity — the engine behind how ARGUS ships multiple products in parallel and explores adjacent product bets without spinning up new teams.',
    stack: ['LLM Pipelines', 'Agents', 'GCP', 'TypeScript', 'Python'],
    link: 'https://github.com/janneh2000',
  },
  {
    badge: { type: 'open', label: '↗ Open Source' },
    title: 'Solana Vault Standard — Merged PRs',
    desc: 'Contributed three merged PRs (SVS-7, SVS-10, SVS-11) to solanabr/solana-vault-standard, the official Brazilian Solana vault spec. Tackled SPL token program pinning, native mint validation, and on-chain program architecture — work that fed directly into the SolGuard product line.',
    stack: ['Rust', 'Anchor', 'Solana', 'SPL Tokens', 'Open Source'],
    link: 'https://github.com/solanabr/solana-vault-standard',
  },
  {
    badge: { type: 'live', label: '● Production-Ready' },
    title: 'DevOps Monitoring Stack',
    desc: 'Reference observability stack with Prometheus metrics, Grafana dashboards, Loki logs, and Alertmanager routing — Docker Compose-driven and reused across ARGUS internal infrastructure for service health and product telemetry.',
    stack: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager', 'Docker Compose'],
    link: 'https://github.com/janneh2000',
  },
  {
    badge: { type: 'open', label: '☁️ Cloud Native' },
    title: 'Terraform GCP Landing Zone',
    desc: 'Modular Terraform reference for a production-grade GCP landing zone — folders, IAM, networking, VPC-SC, log sinks, and audit baselines. The same patterns I shipped at Banco BV, generalised and reused inside ARGUS for our GCP footprint.',
    stack: ['Terraform', 'GCP', 'IAM', 'VPC', 'Cloud Logging'],
    link: 'https://github.com/janneh2000',
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 60px', background: 'var(--bg)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
         {'// '} Projects
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 60 }}>
        Building <br />ARGUS.
      </h2>

      <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {projects.map((p, i) => (
          p.featured
            ? <FeaturedCard key={i} {...p} />
            : <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({ badge, title, desc, stack, link, metrics }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="featured-card"
      style={{
        gridColumn: '1 / -1',
        display: 'flex', gap: 40, flexWrap: 'wrap',
        padding: 32, borderRadius: 10,
        background: 'linear-gradient(135deg, var(--surface) 60%, rgba(0,229,160,0.06))',
        border: `1px solid ${hovered ? 'rgba(0,229,160,0.45)' : 'rgba(0,229,160,0.2)'}`,
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.3s',
      }}>
      <div className="featured-card-body" style={{ flex: 1, minWidth: 280 }}>
        <Badge {...badge} />
        <h3 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 28, color: 'var(--text)', margin: '8px 0 12px', letterSpacing: '-0.01em' }}>{title}</h3>
        <p style={{ fontSize: 14, color: 'var(--muted2)', lineHeight: 1.7 }}>{desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
          {stack.map(s => <Chip key={s}>{s}</Chip>)}
        </div>
        {link && <a href={link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mint)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16 }}>Visit ARGUS →</a>}
      </div>
      <div className="featured-card-metrics" style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', minWidth: 200 }}>
        {metrics.map(m => (
          <div key={m.label} style={{ padding: 16, background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 6 }}>
            <div style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 28, color: 'var(--mint)' }}>{m.val}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ badge, title, desc, stack, link }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-card"
      style={{
        padding: 32, background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(0,229,160,0.25)' : 'var(--border)'}`,
        borderRadius: 10, display: 'flex', flexDirection: 'column', gap: 12,
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.3s',
      }}>
      <Badge {...badge} />
      <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 20, color: 'var(--text)' }}>{title}</h3>
      <p style={{ fontSize: 14, color: 'var(--muted2)', lineHeight: 1.7 }}>{desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {stack.map(s => <Chip key={s}>{s}</Chip>)}
      </div>
      {link && <a href={link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mint)', textDecoration: 'none', marginTop: 4 }}>View →</a>}
    </div>
  );
}
