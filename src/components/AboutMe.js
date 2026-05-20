import React from 'react';

export default function AboutMe() {
  return (
    <section id="about" style={{ padding: '100px 60px', background: 'var(--bg2)' }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
         {'// '} About Me
      </div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 54px)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 60 }}>
        Founder. Engineer. <br />Builder at heart.
      </h2>

      <div className="grid-about" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        {/* Left: bio */}
        <div style={{ fontSize: 16, color: 'var(--muted2)', lineHeight: 1.8 }}>
          <p>I'm <strong style={{ color: 'var(--text)' }}>Alie Janneh</strong>, founder of <strong style={{ color: 'var(--text)' }}>ARGUS</strong> — a security and intelligence platform for Web3 — and a Cloud &amp; DevOps Engineer with <strong style={{ color: 'var(--text)' }}>8+ years</strong> shipping multi-cloud infrastructure that holds up in production.</p>
          <p style={{ marginTop: 20 }}>At ARGUS I'm shipping four products in parallel: <strong style={{ color: 'var(--text)' }}>Protocol Guardian</strong> (Ethereum), <strong style={{ color: 'var(--text)' }}>SolGuard</strong> (Solana), <strong style={{ color: 'var(--text)' }}>Mosaic</strong>, and an <strong style={{ color: 'var(--text)' }}>AI Venture Studio</strong>. It's the build velocity I always wanted to operate at, applied to a problem space — Web3 security &amp; on-chain intelligence — that's both early and consequential.</p>
          <p style={{ marginTop: 20 }}>Before ARGUS, I ran cloud infrastructure on <strong style={{ color: 'var(--text)' }}>GCP, AWS, and OCI</strong> at <strong style={{ color: 'var(--text)' }}>Banco BV</strong> and <strong style={{ color: 'var(--text)' }}>Foxconn</strong> — automating with Python and Terraform, orchestrating on Kubernetes, and shipping pipelines that don't break at 2am.</p>
          <p style={{ marginTop: 20 }}>Based in São Paulo. Open to senior <strong style={{ color: 'var(--text)' }}>Cloud / Customer Engineer / Platform</strong> roles — Google São Paulo first on the list.</p>
        </div>

        {/* Right: info cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {[
            { icon: '🏢', label: 'Currently', val: 'Founder @ ARGUS' },
            { icon: '📍', label: 'Location', val: 'São Paulo, Brazil' },
            { icon: '🌐', label: 'Languages', val: 'Portuguese (native) · English (fluent)' },
            { icon: '🎓', label: 'Top Certification', val: 'Google Cloud Professional Cloud Architect' },
            { icon: '📡', label: 'Focus Areas', val: 'Web3 Security · Cloud · DevOps · AI' },
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
              {['🇧🇷 São Paulo', '🇺🇸 United States', '🇬🇧 United Kingdom', '🇵🇹 Portugal', 'Remote-First'].map(tag => (
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
