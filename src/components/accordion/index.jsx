import React from "react";
import { useState } from "react";
import "../../styles/accordion.css";
import ArrowDeploy from "../../assets/verctorarrow.png";

function Accordion({ title, content }) {
  const [active, setActive] = useState(false);
  const handleToggle = (e) => {
    setActive(!active);
  };
  if (Array.isArray(content)) {
    return (
      <div className={`accordionstyle ${active && "active"}`}>
        <div className="barre" onClick={handleToggle}>
          <div className="accordionstyleTitre">{title}</div>
          <img className="accordionstyleArrow" src={ArrowDeploy}></img>
        </div>
        <ul className="accordionstyleContent">
          {content.map((equipement, index) => (
            <li key={`${equipement}-${index}`}>{equipement}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className={`accordionstyle ${active && "active"}`}>
        <div className="barre" onClick={handleToggle}>
          <div className="accordionstyleTitre">{title}</div>
          <img className="accordionstyleArrow" src={ArrowDeploy}></img>
        </div>{" "}
        <div className="accordionstyleContent">{content}</div>
      </div>
    );
  }
}

export default Accordion;
