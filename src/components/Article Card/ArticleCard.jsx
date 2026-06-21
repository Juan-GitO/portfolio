import "./ArticleCard.css";
import PropTypes from "prop-types";

const ArticleCard = ({ date, title, content, link = "#" }) => {
  return (
    <article className="article-card">
      <div className="article-card-header">
        <time>{date}</time>
        <h2>{title}</h2>
      </div>
      <p>{content}</p>
      <a href={link}>Read article</a>
    </article>
  );
};

ArticleCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

// default `link` handled in function parameter

export default ArticleCard;
