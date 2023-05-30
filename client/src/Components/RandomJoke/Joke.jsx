import React, { useEffect, useState } from 'react';

import './Joke.css';

const Joke = (props) => {
  
  const [joke, setJoke] = useState('');

  const Custom = () => {
    return (
      <div className="custom__skeleton">
        <div className="parent__ball">
          <div className="child__ball ball_1"></div>
          <div className="child__ball ball_2"></div>
          <div className="child__ball ball_3"></div>
        </div>
        {/*<span className="custom__txt">Loading Please wait ...</span>*/}
      </div>
    )
  }
  

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/programming') // API endpoint for programming jokes
      .then(response => response.json())
      .then(data => setJoke(data.joke));
  }, []);
  
  return (
    
      joke ?
      (<div style={{ backgroundColor: 'purple', padding: '10px' }}>
      <p style={{ color: 'white' }}>{joke}</p>
      </div>) :
      (<Custom />)
    
  )
}

export default Joke