import { useNavigate } from "react-router-dom";
import { secondStepData } from "../config";
import "./Steps.css";

export const Second = (props) => {
  const navigate = useNavigate();

  return (
    <section className="step">
      <h2 className="step__title">Select your drink</h2>

      <div className="step__content">
        {secondStepData.map(({ title, image, alt }, index) => (
          <div
            key={index}
            className="step__card"
            onClick={() => {
              props.setState(title);
              navigate("/third");
            }}
          >
            <img src={image} alt={alt} />
            <p className="step__card_title">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
