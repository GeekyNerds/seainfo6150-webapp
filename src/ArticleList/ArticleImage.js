import React from 'react';
import styles from './ArticleImage.module.css'

const ArticleImage = ({ url, title }) => (
    <img className={styles.image} src={url} alt={title} />
);

export default ArticleImage;