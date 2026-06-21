import "./WorkWidget.css";
import PropTypes from "prop-types";
import Image from "next/image";

const WorkWidget = ({ title, content, experiences = [] }) => {
  return (
    <section className="work-widget">
      <h2>{title}</h2>
      <p>{content}</p>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index}>
            <div className="work-item">
              <Image src={exp.logo} alt={`${exp.organization} Logo`} width={40} height={40} />
              <div className="work-item-content">
                <h3>{exp.organization}</h3>
                <div className="work-item-content-details">
                  <p>{exp.jobTitle}</p>
                  <span>
                    {exp.startYear} - {exp.endYear ? exp.endYear : "current"}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

WorkWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      organization: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      startYear: PropTypes.number.isRequired,
      endYear: PropTypes.number || null,
    }),
  ),
};

// default `experiences` handled in function parameter

export default WorkWidget;
