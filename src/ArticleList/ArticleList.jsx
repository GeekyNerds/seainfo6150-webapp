import React from 'react';
import ArticleListItem from './ArticleListItem'
import styles from './ArticleList.module.css'

const ArticleList = ({ articles }) => (
  <ul className={styles.list}>
    {
      // this iterates through the articles JSON and
      // calls your ArticleListItem component for each article object
      Object.values(articles).map(article => {
          return <ArticleListItem
          title={article.title} 
          date={article.pubDate} 
          year={article.pubYear} 
          author={article.author} 
          shortText={article.shortText}
          url={article.image._url} />
      })
    }
  </ul>
);

export default ArticleList;