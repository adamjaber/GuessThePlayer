import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <p>Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
