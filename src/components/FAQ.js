import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="faq-section mtop20">
      <div className="faq-title mtop20">
        <p>{title}</p>
        {isVisible ? (
          <FaChevronUp onClick={() => setIsVisible(false)} />
        ) : (
          <FaChevronDown onClick={() => setIsVisible(true)} />
        )}
      </div>

      <div className="faq-content">{isVisible && <p>{description}</p>}</div>
    </div>
  );
};

export default FAQ;
