import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';

// import files

import ActionProvider from './Files/ActionProvider';
import config from './Files/Config';
import MessageParser from './Files/MessageParser';

function App() {

  const validatorInput = (message) => {
    if(message.trim() === ""){
      return false;
    }
    return true;
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <Chatbot
      config={config}
      messageParser={MessageParser}
      actionProvider={ActionProvider}
      validator={validatorInput}
    />
      </header>
    </div>
  );
}

export default App;
