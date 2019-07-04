import React from 'react';
import styles from './Footer.module.css'

const Footer = () => (
   <footer id={styles.flex1} className={styles.flex_container}>
      <address className={styles.addr}>&copy; 2019, April Bingham</address>
   </footer>
);

export default Footer;