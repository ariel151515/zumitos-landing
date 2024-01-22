import React from "react";
import styles from './texto.module.css';
import clock from '../../img/clock.png'
import ubicacion from '../../img/ubicacion.png'

const Btn = () => {
    return ( 
        <div className={styles.texto}>

            <span className={styles.clock}><img src={clock} alt="btn" />Delivery en 45 minutos</span>
            <span className={styles.ubi}><img src={ubicacion} alt="btn" />Cubrimos la zona de Nezahualcóyotl</span>
            
            <span className={styles.text}>
            Solo por hoy, disfruta de un festín irresistible con un 30% de descuento en nuestros deliciosos chilaquiles. ¡Haz tu pedido ahora y lleva la auténtica experiencia culinaria directo a tu puerta en Nezahualcóyotl!
            </span>
        </div>
     );
}
 
export default Btn;
