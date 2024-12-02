import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import headerLogo from '../../assets/TastyNFitLogoType_white.png';

import styles from './styles.module.css'


function Header({ user, onLogout }) {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
  const handleClick = (to) =>{
    navigate(`/${to}`);
  }

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Chama a função onLogout passada como prop
    }
  }

  return (
    <header className={`container-fluid ${styles.header}`}>
      <div className='row align-items-center'>
        <div className='col-2'>
          <img className={`${styles.logo}`} src={headerLogo} alt="Tasty & Fit logotype" onClick={() => handleClick("")}/>
        </div>
        <div className='col-4 search '>
        </div>
        <div className={`col-6 ${styles.userSection}`}>
          {user ? (
            <div className='d-flex align-items-center'>
              <button className={styles.loginButton} onClick={() => handleClick("addrecipe")}>Cadastrar nova receita</button>
              <p 
                className={styles.userEmail}
                onClick={() => setDropdownVisible(!isDropdownVisible)} // Toggle dropdown
              >
                {user.email}
              </p>
              {isDropdownVisible && (
                <div className={styles.dropdownMenu}>
                  <button onClick={handleLogout} className={styles.logoutButton}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className={styles.loginButton}>
              Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
