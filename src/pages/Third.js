import { useNavigate } from "react-router-dom";
import { thirdStepData } from "../config";
import "./Steps.css";

export const Third = (props) => {
  const navigate = useNavigate();

  return (
    <section className="step">
      <h2 className="step__title">Are you satisfied with your drink?</h2>

      <div className="step__content">
        {thirdStepData.map(({ title, value, image, alt }, index) => (
          <div
            key={index}
            className="step__card"
            onClick={() => {
              props.setState(value);
              navigate("/fourth");
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
