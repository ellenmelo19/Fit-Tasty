import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import headerLogo from '../../assets/header-logo.jpg';
import './styles.css'


function Header({ user, onLogout }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Chama a função onLogout passada como prop
    }
  }

  return (
    <header className='container-fluid header'>
      <div className='row header justify-content-between'>
        <div className='col-2'>
          <img src={headerLogo} alt="Logo" className='logo' />
        </div>
        <div className='col-8 search '>
          <input
            type="text"
            placeholder="Procurar receitas, ingredientes, calorias, etc"
            className='input'
          />
          <button className='searchButton'>
            Buscar
          </button>
        </div>
        <div className='col-2 userSection'>
          {user ? (
            <div>
              <span 
                className='userEmail'
                onClick={() => setDropdownVisible(!isDropdownVisible)} // Toggle dropdown
              >
                {user.email}
              </span>
              {isDropdownVisible && (
                <div className='dropdownMenu'>
                  <button onClick={handleLogout} className='logoutButton'>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className='loginButton'>
              Login
            </Link>
          )}
        </div>
      </div>
      
    </header>
  );
}

export default Header;
