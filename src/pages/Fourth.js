import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Steps.css";

export const Fourth = ({ setState }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // reset state
    setState();

    let timer = 0;
    const time = 30000;
    setTimeout(() => navigate("/"), time);

    //log timer
    console.log("start 30 seconds!");
    const interval = setInterval(() => console.log(++timer + " second"), 1000);

    return () => clearInterval(interval);
  }, [setState, navigate]);

  return (
    <section className="step">
      <h2 className="step__title">Thank you for your answers!</h2>
    </section>
  );
};
