import React from 'react';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '140px 60px 80px',
      position: 'relative', overflow: 'hidden', background: 'var(--bg)',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,229,160,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.035) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)',
      }} />
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,229,160,0.07) 0%, transparent 70%)',
        top: -100, right: -100, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)',
        bottom: 100, left: 100, pointerEvents: 'none',
      }} />

      {/* Eyebrow */}
      <div className="animate-fadeUp" style={{
        fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mint)',
        letterSpacing: '0.18em', textTransform: 'uppercase',
        marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <span style={{ width: 32, height: 1, background: 'var(--mint)', display: 'inline-block' }} />
        DevOps · Cloud · Infrastructure
      </div>

      {/* Name */}
      <h1 className="animate-fadeUp delay-1" style={{
        fontFamily: 'var(--display)', fontWeight: 800,
        fontSize: 'clamp(52px, 8vw, 108px)', lineHeight: 0.92,
        letterSpacing: '-0.02em', color: 'var(--text)', marginBottom: 8,
      }}>
        Alie<br /><span style={{ color: 'var(--mint)' }}>Janneh</span>
      </h1>

      {/* Role */}
      <p className="animate-fadeUp delay-2" style={{
        fontFamily: 'var(--display)', fontWeight: 700,
        fontSize: 'clamp(20px, 3vw, 38px)', color: 'var(--muted)', marginBottom: 36,
      }}>
        DevOps &amp; Cloud Engineer
      </p>

      {/* Description */}
      <p className="animate-fadeUp delay-3" style={{
        maxWidth: 560, fontSize: 17, color: 'var(--muted2)', lineHeight: 1.75, marginBottom: 48,
      }}>
        Building resilient cloud infrastructure across GCP, AWS, and OCI —
        automating pipelines, orchestrating containers, and shipping production-grade systems.
        Based in São Paulo, open to the world.
      </p>

      {/* CTAs */}
      <div className="animate-fadeUp delay-4" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <a href="#projects" style={{
          background: 'var(--mint)', color: 'var(--bg)',
          fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 700,
          letterSpacing: '0.06em', padding: '14px 28px', borderRadius: 4,
          textDecoration: 'none', transition: 'all 0.2s', display: 'inline-flex',
          alignItems: 'center', gap: 8,
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--mint-dim)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--mint)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          ↓ View My Work
        </a>
        <a href="#contact" style={{
          border: '1px solid var(--border)', color: 'var(--muted2)',
          fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '0.06em',
          padding: '14px 28px', borderRadius: 4, textDecoration: 'none',
          transition: 'all 0.2s', background: 'transparent',
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--mint)'; e.currentTarget.style.color = 'var(--mint)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted2)'; }}
        >
          Let's Connect
        </a>
      </div>

      {/* Stats */}
      <div className="animate-fadeUp delay-5" style={{
        display: 'flex', gap: 48, marginTop: 72,
        paddingTop: 40, borderTop: '1px solid var(--border)',
        flexWrap: 'wrap',
      }}>
        {[
          { num: '4+', label: 'Years Experience' },
          { num: '3',  label: 'Cloud Platforms' },
          { num: '6+', label: 'Projects Shipped' },
          { num: '4',  label: 'Certifications' },
        ].map(s => (
          <div key={s.label}>
            <div style={{ fontFamily: 'var(--display)', fontSize: 36, fontWeight: 800, color: 'var(--mint)' }}>{s.num}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)', letterSpacing: '0.06em' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
