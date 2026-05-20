import React from 'react';

const jobs = [
  {
    date: '2025 — Present',
    company: 'ARGUS',
    title: 'Founder · Engineering & Product',
    desc: 'Founded ARGUS — a security and intelligence platform for Web3. Shipping four products in parallel: Protocol Guardian (Ethereum protocol defense), SolGuard (Solana-native security toolkit), Mosaic (on-chain intelligence aggregator), and the ARGUS AI Venture Studio. Own infrastructure, observability, and the GCP footprint end-to-end, plus product engineering across the EVM, Solana, and AI stack.',
    tags: ['Ethereum', 'Solana', 'Rust', 'TypeScript', 'GCP', 'AI', 'Founder'],
  },
  {
    date: '2022 — 2024',
    company: 'Banco BV',
    title: 'Cloud Engineer — Google Cloud',
    desc: "Engineered Python-based automation workflows and Google Cloud infrastructure for one of Brazil's leading financial institutions. Owned BigQuery data pipelines, Composer-orchestrated workflows, and Terraform-driven GCP provisioning. Delivered reliable, scalable solutions inside a strict regulated banking environment.",
    tags: ['GCP', 'Python', 'BigQuery', 'Cloud Functions', 'Composer', 'Terraform'],
  },
  {
    date: '2020 — 2022',
    company: 'Foxconn',
    title: 'DevOps Engineer',
    desc: 'Managed Kubernetes-based container orchestration and Python automation for manufacturing-scale operations. Hardened deployment pipelines, instrumented monitoring across plants, and contributed to internal platform tooling in a high-throughput production environment.',
    tags: ['Kubernetes', 'Python', 'Docker', 'CI/CD', 'Linux', 'Bash'],
  },
  {
    date: '2018 — 2020',
    company: 'Early Career',
    title: 'Systems / Infrastructure Engineer',
    desc: 'Built foundational expertise in Linux administration, networking, virtualization, and on-prem-to-cloud migrations. Wrote Bash and Python automation that replaced manual operations work and supported infrastructure operations across internal systems.',
    tags: ['Linux', 'Networking', 'Bash', 'Virtualization', 'On-Prem → Cloud'],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 60px', background: 'var(--bg2)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
         {'// '} Work Experience
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 60 }}>
        Where I've <br />built things.
      </h2>

      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, var(--mint), transparent)' }} />

        {jobs.map((job, i) => (
          <div key={i} style={{ paddingLeft: 40, paddingBottom: i < jobs.length - 1 ? 56 : 0, position: 'relative' }}>
            {/* Dot */}
            <div style={{
              position: 'absolute', left: -5, top: 6,
              width: 11, height: 11, borderRadius: '50%',
              background: 'var(--bg2)', border: '2px solid var(--mint)',
              boxShadow: '0 0 10px rgba(0,229,160,0.4)',
            }} />

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.08em' }}>{job.date}</span>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', padding: '2px 8px', border: '1px solid var(--border)', borderRadius: 3 }}>{job.company}</span>
            </div>
            <h3 style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: 22, color: 'var(--text)', marginBottom: 12 }}>{job.title}</h3>
            <p style={{ fontSize: 15, color: 'var(--muted2)', lineHeight: 1.75, maxWidth: 720 }}>{job.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
              {job.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--sky)',
                  background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.15)',
                  padding: '3px 8px', borderRadius: 3,
                }}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
