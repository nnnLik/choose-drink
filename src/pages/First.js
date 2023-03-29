import { useNavigate } from "react-router-dom";
import { firstStepData } from "../config";
import "./Steps.css";

export const First = (props) => {
  const navigate = useNavigate();

  return (
    <section className="step">
      <h2 className="step__title">Select your team</h2>

      <div className="step__content">
        {firstStepData.map(({ title, image, alt }, index) => (
          <div
            key={index}
            className="step__card"
            onClick={() => {
              props.setState(title);
              navigate("/second");
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
