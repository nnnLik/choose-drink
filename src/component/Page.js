import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./Page.css";

export const Page = (props) => {
  useEffect(() => {
    console.log(props.state);
  }, [props.state]);

  return (
    <div className="page">
      <div className="page_wrapper">
        <Outlet />
      </div>
    </div>
  );
};
