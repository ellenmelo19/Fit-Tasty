import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      {/* <div style={styles.curtain}>
        <button style={styles.seeMoreButton}>
          <span>Veja mais</span>
        </button>
      </div> */}
      <div style={styles.footerContent}>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Suporte</h4>
          <p style={styles.footerText}>+55 11 91234-5678</p>
          <p style={styles.footerText}>suporte@fitntasty.com</p>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>Informações</h4>
          <p style={styles.footerText}>Política de Privacidade</p>
          <p style={styles.footerText}>FAQ</p>
        </div>
        <div style={styles.footerSection}>
          <h4 style={styles.footerHeading}>© 2024. All rights reserved.</h4>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: { 
    backgroundColor: '#ECF87F', 
    color: '#3D550C', 
    padding: '20px 0', 
    textAlign: 'center', 
    position: 'relative', 
    fontWeight: 'bold'
  },
  curtain: { 
    position: 'absolute', 
    top: '-200px', 
    left: 0,
    right: 0,
    height: '250px', 
    background: 'linear-gradient(to bottom, rgba(76, 175, 80, 0), rgba(76, 175, 80, 1))', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',  // Centraliza verticalmente
  },
  seeMoreButton: {
    backgroundColor: 'transparent', 
    border: 'none', 
    color: 'rgba(255, 255, 255, 0.8)', 
    fontSize: '16px', // Fonte menor
    cursor: 'pointer',
    marginBottom: '-120px' // Ajusta a posição vertical (menos)
  },
  footerContent: { 
    display: 'flex', 
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    borderTop: '1px solid rgba(255, 255, 255, 0.3)', 
    paddingTop: '20px',
  },
  footerSection: {
    margin: '12px',
  },
  footerHeading: {
    fontSize: '16px', // Fonte menor
  },
  footerText: {
    fontSize: '14px', // Fonte menor
  },
};

export default Footer;
