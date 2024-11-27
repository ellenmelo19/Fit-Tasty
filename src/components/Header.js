import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import headerLogo from '../assets/header-logo.jpg';

function Header({ user }) {
  return (
    <header style={styles.header}>
      <img src={headerLogo} alt="Logo" style={styles.logo} />
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
      {user ? (
        <span style={styles.userEmail}>{user.email}</span> // Exibe o email do usuário logado
      ) : (
        <Link to="/login" style={styles.loginButton}>
          Login
        </Link>
      )}
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
  logo: { height: '40px' },
  search: {
    display: 'flex',
    flexGrow: 1,
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
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginLeft: '10px',
    cursor: 'pointer',
    color: '#4caf50',
  },
  loginButton: {
    backgroundColor: 'white',
    border: 'none',
    color: '#4caf50',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  userEmail: {
    color: 'white',
    fontWeight: 'bold',
  },
};

export default Header;
