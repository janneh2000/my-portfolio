import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '32px 60px',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--bg)',
      flexWrap: 'wrap',
      gap: 12,
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.08em' }}>
        © 2026 Alie Janneh — São Paulo, Brazil
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--mint)' }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: 'var(--mint)',
          display: 'inline-block', animation: 'pulse 2s infinite',
        }} />
        Open to opportunities
      </div>
    </footer>
  );
}
