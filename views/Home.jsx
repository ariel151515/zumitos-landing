import React from "react";
import Btn from "../components/Btn/Btn";
import styles from '../estilos.module.css'; 
import Menu from "../components/Menu/Menu";
import Texto from "../components/Texto/Texto.jsx";
import Banner from "../components/Banner/Banner.jsx";

const Home = () => {
    return ( 
        <div className={styles.contenedor}>
          <Banner />
          <Texto />
          <Menu />
          <Btn props="Enviar mensaje"/>
        </div>
     );
}
 
export default Home;
