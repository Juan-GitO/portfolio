import "./ProjectCard.css";
import PropTypes from "prop-types";
import Image from "next/image";

const ProjectCard = ({ logo, name, content, link = "#" }) => {
  return (
    <div className="project-card">
      <div>
        <Image src={logo} alt={`${name} Logo`} width={48} height={48} className="project-card-logo" />
        <h2>{name}</h2>
      </div>

      <div>
        <p>{content}</p>
        <a href={link} target="_blank" rel="noreferrer">
          <Image src="/lik.svg" alt="" width={16} height={16} /> View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

// default `link` handled in function parameter

export default ProjectCard;
