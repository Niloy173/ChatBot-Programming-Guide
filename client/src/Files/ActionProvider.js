import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const customComponent = () => {
    const AdditonalMessage = `<p>Type <b>💜 topics 💜 </b> for overall suggested concepts</p>`;
    
    const generatedComponent = <div dangerouslySetInnerHTML={{ __html: AdditonalMessage }} />;

    return generatedComponent;
  }

  const decisionComponent = () => {

    const DeceisionComponent = `<div class='decision-header'>
        <p>😎 Do you want to hear a programming joke ?</p>
      </div>
      `;

      const generatedComponent = <div dangerouslySetInnerHTML={{ __html: DeceisionComponent }} />;
      return generatedComponent;
  }

  const handleJokeResponse = () => {

    const botMessage = createChatBotMessage(
      "👇 Here's a nice joke for you!",
      {
        widget: 'jokes',
      }
    )
    
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  
  const handleGreetResponse = () => {
    const botMessage = createChatBotMessage(`👋 Hello. Nice to meet you. what do you want to learn today ?`,{widget: "Options",});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleSorryResponse = () => {
    
    const botMessage = createChatBotMessage(`🙏 Apologies, but we couldn't locate any relevant resources based on your input `);

    const botMessage2 = createChatBotMessage(decisionComponent(),{ widget: 'Decisions',});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage,botMessage2],
    }));
  }

  const handleThanksResponse = () => {

    const botMessage = createChatBotMessage(
      "💜 Most welcome",
    )

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }
  
  const handleDefaultSuggestions = () => {
    const botMessage = createChatBotMessage(`🛠️ Here are all your suggestions 🛠️`, { widget: 'Options'});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleNameResponse = (name) => {

    const greeting = `Hello ${name} 🌝. Nice to meet you.what do you want to learn today ?`;
    const botMessage = createChatBotMessage(greeting, {widget: "Options",});

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleScriptList = (language) => {

    const message = createChatBotMessage(`📔 Fantastic, I've got the following resources for you on ${language} 📔`,
    {
      widget: `${language}Links`,
    })

    const botMessage2 = createChatBotMessage(customComponent());

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message, botMessage2],
    }));
  }
  
  
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGreetResponse,
            handleSorryResponse,
            handleThanksResponse,
            handleDefaultSuggestions,
            handleNameResponse,
            handleScriptList,
            handleJokeResponse
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;