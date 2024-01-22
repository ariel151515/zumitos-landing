import React from "react";
import styles from '../Banner/banner.module.css'
import ImgPlato from "../ImgPlato/ImgPlato.jsx";


const Banner = () => {
    return ( 
        <div className={styles.banner}>
          <ImgPlato />
          <div className={styles.titulo}>
             Hoy 30% En Chilaquiles 🔥🔥🔥
          </div>

        </div>
     );
}
 
export default Banner;