import React from 'react';
import styles from './ArticleListItem.module.css'

const ArticleListItem = ({ title, date, year, author, shortText }) => (
    <li className={styles.item}>
        <article>
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