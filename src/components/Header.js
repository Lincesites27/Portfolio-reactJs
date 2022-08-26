import React from 'react'
import logo from '../img/logolince.png'
import styles from './Header.module.css'


const Header = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.container}>
        <div className={styles.logo}>
           <img src={logo} alt="" /> 
        </div>
        <div className={styles.categorias}>   
            <ul>
                <li>SOBRE MIM</li>
                <li>ESPECIALIDADES</li>
                <li>UX/UI</li>
                <li>PORTFÓLIO</li>
                <li>CONTATO</li>
            </ul>

        </div>
        </div>
    </nav>
  )
}

export default Header