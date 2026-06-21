import Link from "next/link";
import "./Navbar.css";
import PropTypes from "prop-types";

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function Navbar({ options = [] }) {
  return (
    <nav className="navbar">
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option.path.startsWith("/") ? (
              <Link className="link" href={option.path}>
                {option.label}
              </Link>
            ) : (
              <a className="link" href={option.path}>
                {option.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
