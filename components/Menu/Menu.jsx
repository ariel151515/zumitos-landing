import React from "react";
import styles from '../Menu/menu.module.css'
import menu from '../../img/menu.png'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <img src={menu} alt="btn" className={styles.menuimg}/>
            <span>Pide nuestro menú a través de WhatsApp</span>
        </div>
    );
}
 
export default Menu;