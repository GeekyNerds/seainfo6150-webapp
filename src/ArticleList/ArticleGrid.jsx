import React from 'react';
import ArticleGridItem from './ArticleGridItem'
import styles from './ArticleGrid.module.css'
import Header from './Header';
import Footer from './Footer';


const ArticleGrid = ({ articles }) => (
  <div>
  <Header />
  <div className={styles.grid_container}>
    {
      // this iterates through the articles JSON and
      // calls your Item component for each article object
      Object.values(articles).map(article => {
          return <ArticleGridItem
          title={article.title} 
          date={article.pubDate} 
          year={article.pubYear} 
          author={article.author} 
          shortText={article.shortText}
          url={article.image._url} />
      })
    }
  </div>
  <Footer />
  </div>
);

export default ArticleGrid;