import React from 'react';

import './Decision.css';

const Decisions = (props) => {

  const decision = [
    {
      text: 'Yes',
      handler : props.actionProvider.handleJokeResponse,
      id: 1
    },

    {
      text: 'No',
      handler :  props.actionProvider.handleDefaultSuggestions,
      id: 2
    },


  ];

  const decisionMarkUp = decision.map((opt) => (
    <li key={opt.id} id={opt.id} onClick={opt.handler} >
      {opt.text}
    </li>
  ));


  return (
    <div className='decision-list-order'>{decisionMarkUp}</div>
  )
}

export default Decisions