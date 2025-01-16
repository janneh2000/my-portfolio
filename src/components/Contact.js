import React from 'react';

function Contact() {
  return (
    <section id="contact" style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Me</h2>
      <p style={{ textAlign: 'center' }}>
        I’m open to opportunities and collaborations! Feel free to reach out to me via email, LinkedIn, or phone.
      </p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a
          href="mailto:cjanneh@gmail.com"
          style={{
            marginRight: '15px',
            textDecoration: 'none',
            color: '#007bff',
            fontWeight: 'bold',
          }}
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/alie-janneh/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: '15px',
            textDecoration: 'none',
            color: '#007bff',
            fontWeight: 'bold',
          }}
        >
          LinkedIn
        </a>
        <a
          href="tel:+5511987071493"
          style={{
            textDecoration: 'none',
            color: '#007bff',
            fontWeight: 'bold',
          }}
        >
          Call Me
        </a>
      </div>
    </section>
  );
}

export default Contact;
