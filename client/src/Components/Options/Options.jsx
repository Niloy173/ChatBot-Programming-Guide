import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    
    { text: "Javascript", 
    handler: () => props.actionProvider.handleScriptList("JavaScript"), 
    id: 1 
    },

    { text: "PHP", 
    handler: () => props.actionProvider.handleScriptList("Php"), 
    id: 2 
    },

    { text: "Python", 
    handler: () => props.actionProvider.handleScriptList("Python"), 
    id: 3 },

    { text: "Java", 
    handler: () => props.actionProvider.handleScriptList("Java"), 
    id: 4 },

    { text: "Scala", 
    handler: () => props.actionProvider.handleScriptList("Scala"), 
    id: 5 },

    { text: "C++", 
    handler: () => props.actionProvider.handleScriptList("C++"), 
    id: 6 },

    { text: "Go", 
    handler: () => props.actionProvider.handleScriptList("Go"), 
    id: 7 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default Options;