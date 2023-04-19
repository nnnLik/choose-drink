import axios from "axios";
import { useNavigate } from "react-router-dom";
import { thirdStepData } from "../config";
import "./Steps.css";

export const Third = (props) => {
  const navigate = useNavigate();

  const postData = async (value) => {
    try {
      const postUrl = "https://a56d-134-17-26-206.ngrok-free.app/api/reports/report-with-photos/";
      const proxyUrl = "https://5scontrol.pl/proxy_to_ngrok/";

      const start_tracking = new Date();
      const stop_tracking = new Date(start_tracking.getTime() + 2 * 60000);
      
      let responseData = JSON.stringify({
        algorithm: "operation_control",
        camera: "192.168.1.111",
        start_tracking: start_tracking,
        stop_tracking: stop_tracking,
        photos: [
          {
          "image": "images/192.168.1.111/ebb7057f-529e-4f47-a739-a61f0cd058b5.jpeg",
          "date": start_tracking
        }
      ],
        violation_found: value,
        extra: [{ worker: props.state.team, beverage: props.state.drink, place: "kitchen" }],
      })
      const res = await axios.post(proxyUrl, {
        url: postUrl,
        body: responseData,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(responseData);
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
