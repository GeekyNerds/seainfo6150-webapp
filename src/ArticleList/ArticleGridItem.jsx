import React from 'react';
import styles from './ArticleGridItem.module.css'
import ArticleImage from './ArticleImage'

const ArticleGridItem = ({ title, date, year, author, shortText, url }) => (
    <div className={styles.item}>
        <ArticleImage url={url} title={title} />
        <article className={styles.article}>
            <h2 className={styles.title}>{title}<br/></h2>
            <p>{shortText}</p>
            <section className={styles.section}>
                <address>By: {author}<br/></address>
                <time className={styles.time} dateTime={year}>{date}</time><br/>
            </section>
        </article>
    </div>
);

export default ArticleGridItem;