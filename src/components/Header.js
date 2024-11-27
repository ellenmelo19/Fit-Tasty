import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import headerLogo from '../assets/header-logo.jpg';

function Header({ user, onLogout }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Chama a função onLogout passada como prop
    }
  };

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
        <div style={styles.userSection}>
          <span 
            style={styles.userEmail}
            onClick={() => setDropdownVisible(!isDropdownVisible)} // Toggle dropdown
          >
            {user.email}
          </span>
          {isDropdownVisible && (
            <div style={styles.dropdownMenu}>
              <button onClick={handleLogout} style={styles.logoutButton}>
                Logout
              </button>
            </div>
          )}
        </div>
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
    cursor: 'pointer',
  },
  dropdownMenu: {
    position: 'absolute',
    top: '40px',
    right: '10px',
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  },
  logoutButton: {
    backgroundColor: 'white',
    color: '#4caf50',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Header;
