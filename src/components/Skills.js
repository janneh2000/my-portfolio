import React from 'react';

const skillGroups = [
  { icon: '☁️', title: 'Cloud Platforms',           tags: ['GCP', 'AWS', 'OCI', 'Cloud Run', 'GKE', 'EKS', 'Cloud Functions'] },
  { icon: '⚙️', title: 'Infrastructure as Code',    tags: ['Terraform', 'Helm', 'Ansible', 'Pulumi', 'CloudFormation'] },
  { icon: '🐳', title: 'Containers & Orchestration', tags: ['Kubernetes', 'Docker', 'Docker Compose', 'ArgoCD', 'Istio'] },
  { icon: '📊', title: 'Observability',              tags: ['Prometheus', 'Grafana', 'Alertmanager', 'Loki', 'Cloud Monitoring'] },
  { icon: '🔁', title: 'CI/CD & Version Control',   tags: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Git', 'ArgoCD'] },
  { icon: '🐍', title: 'Languages & Data',           tags: ['Python', 'Bash', 'SQL', 'BigQuery', 'Rust (learning)', 'JavaScript'] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 60px', background: 'var(--bg)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ color: 'var(--muted)' }}>{'// '}</span> Technical Stack
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 60 }}>
        Tools I build <br />production with.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {skillGroups.map(group => (
          <SkillCard key={group.title} {...group} />
        ))}

        {/* Web3 full-width card */}
        <div style={{
          gridColumn: '1 / -1', padding: 28,
          background: 'linear-gradient(135deg, var(--surface), rgba(0,229,160,0.03))',
          border: '1px solid var(--border)', borderRadius: 8,
        }}>
          <div style={{ fontSize: 28, marginBottom: 16 }}>⛓️</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--mint)', letterSpacing: '0.08em', marginBottom: 16 }}>Web3 & Blockchain (New Frontier)</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['Solana', 'Anchor Framework', 'Drift Protocol', 'Helius RPC', 'DeFi Infrastructure', 'SPL Tokens', 'On-chain Programs'].map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, tags }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: 28, background: 'var(--surface)',
        border: `1px solid ${hovered ? 'rgba(0,229,160,0.3)' : 'var(--border)'}`,
        borderRadius: 8, transition: 'all 0.3s', position: 'relative', overflow: 'hidden',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 16px 32px rgba(0,0,0,0.3)' : 'none',
      }}>
      {hovered && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, var(--mint), transparent)' }} />}
      <div style={{ fontSize: 28, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--mint)', letterSpacing: '0.08em', marginBottom: 16 }}>{title}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)',
      background: 'var(--surface2)', border: '1px solid var(--border)',
      padding: '3px 8px', borderRadius: 3,
    }}>{children}</span>
  );
}
