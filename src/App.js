import React from "react";
import PropTypes from "prop-types";
import ArticleGrid from "./ArticleList/ArticleGrid";

const App = ({ articles }) => {
  return <div className="App">
    <ArticleGrid articles={articles}/>
  </div>;
};

App.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      shortText: PropTypes.string.isRequired,
      pubDate: PropTypes.string.isRequired,
      pubYear: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  ).isRequired
};
export default App;
