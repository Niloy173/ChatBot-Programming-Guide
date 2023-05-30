import React from 'react';

const MessageParser = ({ children, actions }) => {
  
  const parse = (message) => {

    if(['Hello', 'hello','hi','Hi','hI'].includes(message)){      
      actions.handleGreetResponse();
    }
    else if(['topics','topic'].includes(message.toLowerCase())){
      actions.handleDefaultSuggestions();
    }
    else if(new RegExp(/\b(thank(?:s)?)\b/g).test(message)){
      actions.handleThanksResponse();
    }
    // else if(new RegExp(/^[a-zA-Z\s-]+$/).test(message)){
      
    //   const name = message.toLowerCase().trim();
    //   actions.handleNameResponse(name);
    
    // }
    else if(message.toLowerCase().includes('javascript')){
      actions.handleScriptList('JavaScript');
    }
    else if(message.toLowerCase().includes('java')){
      actions.handleScriptList('Java');
    }
    else if(message.toLowerCase().includes('python')){
      actions.handleScriptList('Python');
    }
    else if(message.toLowerCase().includes('scala')){
      actions.handleScriptList('Scala');
    }
    else if(message.toLowerCase().includes('c++')){
      actions.handleScriptList('C++');
    }
    else if(message.toLowerCase().includes('php')){
      actions.handleScriptList('Php');
    }
    else if(message.toLowerCase().includes('go')){
      actions.handleScriptList('Go');
    }
    else{
      actions.handleSorryResponse();
    }


  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: actions
        });
      })}
    </div>
  );
};

export default MessageParser;