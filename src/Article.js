import React from 'react';

const Article = ({ article }) => (
  <article>
      <h2>{article.title}<br/></h2>
      <address>By: {article.author}<br/></address>
      <time dateTime={article.pubYear}>{article.pubDate}</time><br/>
      <p>
        {article.shortText}
      </p>
  </article>
);

export default Article;