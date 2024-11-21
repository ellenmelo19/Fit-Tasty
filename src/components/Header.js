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
  logo: { 
    height: '40px' 
  }, 
  search: {
    display: 'flex',
    flexBasis: '50%', // Ocupa 50% da largura do header
    marginLeft: '20px', 
    marginRight: '20px', 
  },
  input: {
    flexGrow: 1, 
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  searchButton: {
    backgroundColor: '#ffffff', // Fundo branco
    border: '1px solid #4caf50', // Borda verde
    borderRadius: '5px',
    padding: '10px',
    marginLeft: '10px', 
    cursor: 'pointer',
    color: '#4caf50', // Texto verde
  },
  loginButton: {
    backgroundColor: 'white',
    border: 'none',
    color: '#4caf50',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};


export default Header;
