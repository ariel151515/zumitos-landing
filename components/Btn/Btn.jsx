import React from "react";
import styles from './btn.module.css'; // Importa el módulo de estilos
import whatsapp from '../../img/whatsapp-logo 1.png'

const Btn = ({props}) => {
    return ( 
        <div className={styles.btn}>
          <img src={whatsapp} alt="btn" />
          {props}
        </div>
     );
}
 
export default Btn;
