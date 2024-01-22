import React from "react";
import plato from '../../img/plato.png'
import styles from './imgplato.module.css'


const ImgPlato = () => {
    return ( 
        <div className={styles.plato}>
           <img src={plato} alt="plato" />
        </div>
     );
}
 
export default ImgPlato;