import "./Footer.css";
import PropTypes from "prop-types";

const Footer = ({ links = [] }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={"footer"}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>

      <p>© {year}</p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ),
};

// default `links` handled in function parameter

export default Footer;
