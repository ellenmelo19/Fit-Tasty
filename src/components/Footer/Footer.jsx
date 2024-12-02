import React from 'react';

import styles from './styles.module.css'
import logo from './../../assets/TastyNFitLogo_white.png'

function Footer() {
  return (
    <footer className={`container-fluid ${styles.footer}`}>
      <div className="row">
        <div className={`col-5`}>
          <p className={styles.copyright}>© 2024 Tasty & Fit </p>
        </div>
        <div className={`col-2 ${styles.logo}`}>
          <img src={logo}/>
        </div>
        <div className={`col-5 ${styles.right_side}`}>
          <div className="row">
            <div className="col">
              <p>+55 11 91234-5678</p>
            </div>
            <div className="col">
              <p>suporte@fitntasty.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
