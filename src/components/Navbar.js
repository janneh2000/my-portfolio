import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['about', 'skills', 'experience', 'projects', 'certs', 'contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 60px',
      background: 'rgba(10,12,15,0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--mint)', letterSpacing: '0.08em' }}>
        <span style={{ color: 'var(--muted)' }}>~/ </span>rivaldo.dev
      </div>

      <ul style={{ display: 'flex', gap: 36, listStyle: 'none' }}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link}`} style={{
              fontFamily: 'var(--mono)', fontSize: 12,
              color: active === link ? 'var(--mint)' : 'var(--muted)',
              textDecoration: 'none', letterSpacing: '0.1em',
              textTransform: 'uppercase', transition: 'color 0.2s',
            }}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      <a href="mailto:cjanneh@gmail.com" style={{
        fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--mint)',
        border: '1px solid var(--mint)', padding: '8px 18px', borderRadius: 3,
        textDecoration: 'none', letterSpacing: '0.08em', transition: 'all 0.2s',
      }}
        onMouseEnter={e => { e.target.style.background = 'var(--mint)'; e.target.style.color = 'var(--bg)'; }}
        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--mint)'; }}
      >
        Hire Me →
      </a>
    </nav>
  );
}
