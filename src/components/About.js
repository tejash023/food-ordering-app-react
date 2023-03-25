import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FAQs } from "../constants";
import about from "../assets/svg/about.svg";

const FAQ = ({ id, title, description, isVisible, setIsVisible }) => {
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

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="container">
      <h2 className="heading-text">About Us!</h2>
      <img className="display-img-md mbottom10" src={about} />
      <h3 className="subheading-text">
        Get your food delivery without the hassle!
      </h3>
      <p className="paragraph">
        Go Foods was founded with a simple mission: to make it easier for people
        to get their food delivered. With a food delivery app in India, they
        make it easy for people to order food from their favorite restaurants
        and have it delivered right to their door. They work with some of the
        best restaurants in the area, so people can always get the food they
        want, when they want it. Whether they're in the mood for Indian food,
        Italian food, or something else, Go Foods has them covered. Plus, they
        offer great discounts on food delivery when people order through the
        app. With Go Foods, there's no need to go out to eat; they can bring the
        restaurant to you.
      </p>
      <div className="FAQ">
        <h3 className="subheading-text mtop10">Frequently Asked Questions</h3>
        {FAQs.map((FAQContent) => (
          <FAQ
            key={FAQContent.id}
            id={FAQContent.id}
            title={FAQContent.title}
            description={FAQContent.description}
            isVisible={visibleSection === FAQContent.id}
            setIsVisible={(display) => {
              if (display) {
                setVisibleSection(FAQContent.id);
              } else {
                setVisibleSection(" ");
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
