import React from 'react';
import { FaSearch } from 'react-icons/fa';
import headerLogo from '../assets/header-logo.jpg'; // Importa a imagem

function Header() {
  return (
    <header style={styles.header}>
      <img src={headerLogo} alt="Logo" style={styles.logo} /> {/* Usa a imagem */}
      <div style={styles.search}>
        <input
          type="text"
          placeholder="Procurar receitas, ingredientes, calorias, etc"
          style={styles.input}
        />
        <button style={styles.searchButton}>
          <FaSearch />
        </button>
      </div>
      <button style={styles.loginButton}>Login</button>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
  },
  logo: { height: '40px' }, // Tamanho ajustável da imagem
  //search: { ... },
 // input: { ... },
 // searchButton: { ... },
 // loginButton: { ... },
};

export default Header;
