import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" style={{ padding: '100px 60px', background: 'var(--bg2)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
        {'// '}</span> About Me
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 60 }}>
        Infrastructure <br />at scale, by design.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        {/* Left: bio */}
        <div style={{ fontSize: 16, color: 'var(--muted2)', lineHeight: 1.8 }}>
          <p>I'm <strong style={{ color: 'var(--text)' }}>Alie Janneh</strong>, a DevOps and Cloud Engineer with 4+ years of experience architecting multi-cloud environments, automating deployments, and building data pipelines that actually hold up in production.</p>
          <p style={{ marginTop: 20 }}>I've worked across <strong style={{ color: 'var(--text)' }}>GCP, AWS, and OCI</strong>, shipping automation with Python and Terraform, orchestrating workloads on Kubernetes, and more recently extending into <strong style={{ color: 'var(--text)' }}>Web3 infrastructure</strong> — building on Solana and participating in DeFi protocol hackathons.</p>
          <p style={{ marginTop: 20 }}>Previously at <strong style={{ color: 'var(--text)' }}>Foxconn</strong> and <strong style={{ color: 'var(--text)' }}>Banco BV</strong>, I built and maintained cloud automation at scale. I care deeply about observability, security hardening, and CI/CD pipelines that don't break at 2am.</p>
          <p style={{ marginTop: 20 }}>Currently seeking <strong style={{ color: 'var(--text)' }}>DevOps / Cloud Engineer</strong> roles globally — with a strong interest in the US, UK, Portugal, and Malta.</p>
        </div>

        {/* Right: info cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[
            { icon: '📍', label: 'Location', val: 'São Paulo, Brazil' },
            { icon: '🌐', label: 'Languages', val: 'Portuguese (native) · English (fluent)' },
            { icon: '🎓', label: 'Top Certification', val: 'Google Cloud Professional Cloud Architect' },
            { icon: '📡', label: 'Focus Areas', val: 'Cloud Infra · DevOps · Web3 · Data Engineering' },
          ].map(item => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '16px 20px', background: 'var(--surface)',
              border: '1px solid var(--border)', borderRadius: 6,
            }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{item.label}</div>
                <div style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{item.val}</div>
              </div>
            </div>
          ))}

          <div style={{
            padding: 20, background: 'var(--mint-glow2)',
            border: '1px solid rgba(0,229,160,0.15)', borderRadius: 6,
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>🌍 Open to opportunities in</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['🇺🇸 United States', '🇬🇧 United Kingdom', '🇵🇹 Portugal', '🇲🇹 Malta', 'Remote-First'].map(tag => (
                <span key={tag} style={{
                  fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)',
                  border: '1px solid rgba(0,229,160,0.3)', padding: '4px 10px',
                  borderRadius: 3, background: 'rgba(0,229,160,0.05)',
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
