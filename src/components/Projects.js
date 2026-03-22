import React from 'react';

const Badge = ({ type, label }) => {
  const styles = {
    hack: { color: '#f5a623', background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.2)' },
    live: { color: 'var(--mint)', background: 'var(--mint-glow2)', border: '1px solid rgba(0,229,160,0.2)' },
    open: { color: 'var(--sky)', background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.15)' },
    wip:  { color: '#f5a623', background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.15)' },
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
    badge: { type: 'hack', label: '⚡ Live Hackathon — Deadline Apr 6' },
    title: 'Delta-Neutral SOL Funding Rate Farm',
    desc: 'Building a delta-neutral yield strategy on Solana for the Ranger Build-A-Bear Hackathon. Deposits USDC for lending yield on Drift Protocol while running a SOL-PERP short hedge — targeting 15–40% APY with market-neutral exposure.',
    stack: ['Solana', 'Drift Protocol', 'TypeScript', 'Helius RPC', 'DeFi', 'Delta-Neutral'],
    link: 'https://github.com/janneh2000/ranger-drift-vault',
    featured: true,
    metrics: [{ val: '15–40%', label: 'Target APY' }, { val: '0Δ', label: 'Market Exposure' }, { val: 'Apr 6', label: 'Submission Deadline' }],
  },
  {
    badge: { type: 'live', label: '● Live on GitHub' },
    title: 'CryptoSentinel',
    desc: 'Real-time crypto intelligence monitoring system — tracks on-chain signals, price anomalies, and market events across multiple chains. Built for proactive alerting and automated threat/opportunity detection.',
    stack: ['Python', 'On-chain Data', 'Alerting', 'WebSockets', 'APIs'],
    link: 'https://github.com/janneh2000/cryptosentinel',
  },
  {
    badge: { type: 'open', label: '🤖 AI Agent' },
    title: 'ChainOps Agent',
    desc: 'An AI-powered DevOps agent for blockchain infrastructure — automates on-chain operations, monitors node health, manages RPC endpoints, and orchestrates chain-level tasks. Bridges traditional DevOps with Web3 infra.',
    stack: ['Python', 'LLM', 'Web3', 'RPC', 'DevOps', 'Automation'],
    link: 'https://github.com/janneh2000/chainops-agent',
  },
  {
    badge: { type: 'hack', label: '📈 Trading Bot' },
    title: 'Polymarket Bot v2',
    desc: 'Automated prediction market trading bot for Polymarket — v2 with improved strategy logic, position sizing, and market selection. Analyzes event probabilities and executes trades programmatically on the CLOB-based prediction market.',
    stack: ['Python', 'Polymarket API', 'CLOB', 'Trading Strategy', 'Polygon'],
    link: 'https://github.com/janneh2000/polymarket-bot-v2',
  },
  {
    badge: { type: 'open', label: '⚙️ SDK' },
    title: 'SSS Token SDK',
    desc: 'Developer SDK for interacting with SSS token contracts — abstracts token operations, staking flows, and on-chain interactions into a clean programmatic interface. Designed for composability and integration into DeFi pipelines.',
    stack: ['TypeScript', 'Solana', 'SPL Tokens', 'Anchor', 'SDK Design'],
    link: 'https://github.com/janneh2000/sss-token-sdk',
  },
  {
    badge: { type: 'live', label: '● Live on GitHub' },
    title: 'DevOps Monitoring Stack',
    desc: 'Production-ready observability stack with Prometheus metrics collection, Grafana dashboards, and Alertmanager routing. Containerized with Docker Compose, built to portfolio-and-interview standard.',
    stack: ['Prometheus', 'Grafana', 'Alertmanager', 'Docker Compose', 'YAML'],
    link: 'https://github.com/janneh2000',
  },
  {
    badge: { type: 'open', label: '↗ Open Source' },
    title: 'Solana Vault Standard — Bounty PRs',
    desc: 'Contributed three PRs (SVS-7, SVS-10, SVS-11) to the solanabr/solana-vault-standard repository. Tackled SPL token program pinning, native mint validation, and on-chain program architecture.',
    stack: ['Rust', 'Anchor', 'Solana', 'SPL Tokens', 'Security'],
    link: 'https://github.com/solanabr/solana-vault-standard',
  },
  {
    badge: { type: 'wip', label: '⏳ In Progress' },
    title: 'AI-Powered Customer Support',
    desc: 'Cloud-native AI support agent built on GCP — React frontend, Tailwind CSS, Python backend, with LLM integration for intelligent ticket routing and response generation.',
    stack: ['React', 'Python', 'GCP', 'LLM API', 'Tailwind'],
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 60px', background: 'var(--bg)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        {'// '}</span> Projects
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 60 }}>
        What I've <br />been building.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
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
      style={{
        gridColumn: '1 / -1',
        display: 'flex', gap: 40, flexWrap: 'wrap',
        padding: 32, borderRadius: 10,
        background: 'linear-gradient(135deg, var(--surface) 60%, rgba(0,229,160,0.03))',
        border: `1px solid ${hovered ? 'rgba(0,229,160,0.35)' : 'rgba(0,229,160,0.15)'}`,
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'all 0.3s',
      }}>
      <div style={{ flex: 1 }}>
        <Badge {...badge} />
        <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 22, color: 'var(--text)', margin: '8px 0 12px' }}>{title}</h3>
        <p style={{ fontSize: 14, color: 'var(--muted2)', lineHeight: 1.7 }}>{desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
          {stack.map(s => <Chip key={s}>{s}</Chip>)}
        </div>
        {link && <a href={link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mint)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16 }}>View on GitHub →</a>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', minWidth: 200 }}>
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
      {link && <a href={link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mint)', textDecoration: 'none', marginTop: 4 }}>View on GitHub →</a>}
    </div>
  );
}
