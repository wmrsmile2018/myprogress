import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1> About us</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi dolor expedita mollitia,
        quisquam, id quaerat commodi laboriosam quo temporibus corrupti explicabo dignissimos. Autem
        ducimus, error consequuntur cupiditate illum repellat aliquam!
      </p>
      <button onClick={() => history.push("/")} className="btn">
        Back to Todo list{" "}
      </button>
    </>
  );
};
