import "./SkillsWidget.css";
import PropTypes from "prop-types";
import Image from "next/image";

const SkillsWidget = ({ title, content, skills = [] }) => {
  return (
    <section className="skills-widget">
      <h2>{title}</h2>
      <p>{content}</p>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <div className="skills-item">
              <Image src={skill.icon} alt={`${skill.name} Icon`} width={28} height={28} />

              <div className="skills-item-content">
                <h3>{skill.name}</h3>

                <div className="skills-item-proficiency">
                  <div className="proficiency-bar" style={{ width: `${skill.proficiency}%` }}></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

SkillsWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      proficiency: PropTypes.number.isRequired,
    }),
  ),
};

// default `skills` handled in function parameter

export default SkillsWidget;
