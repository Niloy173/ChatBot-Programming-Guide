import React from "react";

import "./LinkList.css";

// import all assets 
import CPlus from "../../assets/C++.png";
import Go from "../../assets/Go.jpg";
import Java from "../../assets/java.png";
import JavaScript from "../../assets/javascript.png";
import Php from "../../assets/php.png";
import Python from "../../assets/python.jpg";
import Scala from "../../assets/scala.jpg";

const LinkList = (props) => {

  const getImagePath = (subject) => {
    switch (subject) {
      case 'JavaScript':
        return JavaScript;
      case 'Python':
        return Python;
      case 'Php':
        return Php;
      case 'Go':
        return Go;
      case 'Scala':
        return Scala;
      case 'C++':
        return CPlus;
      case 'Java':
        return Java;
      default:
        return '/path/to/default-image.png';
    }
  };


  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}
      </a>
    </li>
  ));

  return (
    <div>
      <img className="link-subject" src={getImagePath(props.subject)} alt={props.subject} />
      <ul className="link-list">{linkMarkup}</ul>
      <p className="link-suggest">Learn more about <b>{props.subject}</b> from <a target="_blank" href="https://devdocs.io/" rel="noreferrer">here</a></p>
    </div>
  );
};

export default LinkList;