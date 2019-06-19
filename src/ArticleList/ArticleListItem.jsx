import React from 'react';
import styles from './ArticleListItem.module.css'
import ArticleImage from './ArticleImage'

const ArticleListItem = ({ title, date, year, author, shortText, url }) => (
    <li className={styles.item}>
        
        <article>
        <ArticleImage url={url} title={title} />
            <h2 className={styles.title}>{title}<br/></h2>
            <p className={styles.paragraph}>
                {shortText}
            </p>
            <section className={styles.section}>
                <address>By: {author}<br/></address>
                <time className={styles.time} dateTime={year}>{date}</time><br/>
            </section>
        </article>
    </li>
);

export default ArticleListItem;