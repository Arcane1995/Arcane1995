import { NavLink,} from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa"; 
import styles from "./Menu.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <nav className={styles.navbar}>
      {!isOpen && <div className={styles.logo}>
        <NavLink to="/" end>
          PilatesProkz
        </NavLink>
      </div>}
      <div className={isOpen ? styles.show : styles.menuItems}>
      {isOpen && <div className={styles.logo}>
        <NavLink to="/" end>
          PilatesPro
        </NavLink>
      </div>}
        <NavLink to="/about">О нас</NavLink>
        <NavLink to="/services">Услуги и цены</NavLink>
        <NavLink to="/trainer">Команда</NavLink>
        <a href="#Contacts"> Контакты</a>

      </div>
      
      <button className={styles.menuIcon} onClick={toggleMenu}>
        <FaBars />
      </button>
    </nav>
  );
}






