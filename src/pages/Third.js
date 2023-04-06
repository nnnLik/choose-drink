import axios from "axios";
import { useNavigate } from "react-router-dom";
import { thirdStepData } from "../config";
import "./Steps.css";

export const Third = (props) => {
  const navigate = useNavigate();

  const postData = async (value) => {
    try {
      const postUrl = "https://5b3c-134-17-26-206.eu.ngrok.io/skany/create/";
      const proxyUrl = "https://5scontrol.pl/proxy_to_ngrok/";

      const res = await axios.post(proxyUrl, {
        url: postUrl,
        body: JSON.stringify({
          beverage: props.state.drink,
          worker: props.state.team,
          status: value,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("response", res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = (value) => {
    props.setState(value);
    postData(value);
    navigate("/fourth");
  };

  return (
    <section className="step">
      <h2 className="step__title">Are you satisfied with your drink?</h2>

      <div className="step__content">
        {thirdStepData.map(({ title, value, image, alt }, index) => (
          <div
            key={index}
            className="step__card"
            onClick={() => handleClick(value)}
          >
            <img src={image} alt={alt} />
            <p className="step__card_title">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
