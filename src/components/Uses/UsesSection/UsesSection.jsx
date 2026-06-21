import "./UsesSection.css";
import PropTypes from "prop-types";
import UseCard from "../UseCard/UsesCard.jsx";

const UsesSection = ({ items = [] }) => {
  return (
    <section className="uses-section">
      <div className="uses-section__content">
        {items.map((group, groupIndex) => (
          <div key={groupIndex} className="uses-section__group">
            <h2>{group.groupName}</h2>
            <div className="uses-section__group-content">
              {group.items.map((item, itemIndex) => (
                <UseCard key={itemIndex} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

UsesSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      groupName: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
    }),
  ),
};

// default `items` handled in function parameter

export default UsesSection;
