import React from 'react';
import styles from './Header.module.css'


const Header = () => (
    <header id={styles.flex1} className={styles.flex_container}>
        {/* <div id={styles.box1}>1111</div> */}
        <h4 id={styles.header}>The INFO6150 News</h4>
        <time id={styles.time} dateTime="2019-06-26">Wed, June 26, 2019</time>    
    </header>
);

export default Header;