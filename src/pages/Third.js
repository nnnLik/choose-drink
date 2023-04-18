import axios from "axios";
import { useNavigate } from "react-router-dom";
import { thirdStepData } from "../config";
import "./Steps.css";

export const Third = (props) => {
  const navigate = useNavigate();

  const postData = async (value) => {
    try {
      const postUrl = "https://13e6-134-17-26-206.ngrok-free.app/api/reports/all_reports/";
      const proxyUrl = "https://5scontrol.pl/proxy_to_ngrok/";

      const start_tracking = new Date();
      const stop_tracking = new Date(start_tracking.getTime() + 2 * 60000);
      
      const res = await axios.post(proxyUrl, {
        url: postUrl,
        body: JSON.stringify({
          algorithm: algorithm,
          camera: camera,
          start_tracking: start_tracking,
          stop_tracking: stop_tracking,
          photos: photos,
          violation_found: value,
          extra: { worker: props.state.team, beverage: props.state.drink, place: "kitchen" },
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
